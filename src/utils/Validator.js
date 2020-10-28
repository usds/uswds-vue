import {isObject, isEmpty} from 'lodash';

class Validator {
    
    constructor(rules){
        
        this.rules = rules;
        this.valids  = {};
        this.errors = [];
        this.passed = [];
        this.isDirty = false;

        /*
        Vee-Validate rules not implemented yet;

        alpha_dash
        alpha_spaces
        between
        confirmed
        digits
        dimensions
        email Inferred
        excluded
        ext
        image
        oneOf
        integer
        is
        is_not
        length
        max Inferred
        max_value Inferred
        mimes
        min Inferred
        min_value Inferred
        numeric
        regex Inferred
        required Inferred
        required_if
        size

*/
        this.defaultMessages = {
            'en' : 'Please enter a value'
        };



        this.__checkRules();

    }

    /**
     * Check rules are setup correctly, if a rule has a checkRule function
     */
    __checkRules(){

        let keys = Object.keys(this.rules);

        for (let i=0; i<keys.length; i+=1){
            
            let name = keys[i];
            let ruleDef = Validator.ruleLibary[name];

            // Check this rule exists first
            //if (!ruleDef){
            //    throw new Error(`Rule ${name} does not exist, and no validator given`);
            //}  

            // Does the rule have a checkRule function?
            if (ruleDef && typeof ruleDef.checkRule == 'function'){
                ruleDef.checkRule(this.rules[name]);
            }

        }
    }

    getErrors(){
        return this.errors;
    }
    
    getPassed(){
        return this.passed;
    }

    /**
     * Run the validation, returns an instance of ValidatorErrors
     * @param {object} obj The data object holding the form data
     */
    async run(val){

        let errors = [];
        let passed = [];
        
        if (!this.rules){
            return;
        }

        // Support of vee-validate style string based rules. i.e. rules are serpated by a pipe
        // e.g. 'required|length:10'
        if (typeof this.rules == 'string'){
            // TODO: implment vee-validate strings style rules
            throw new Error(`String based rules not supported yet!!`)
            //let rules = ruleObj.split('|');
            //let vars = _.map(r)
        }

        let keys = Object.keys(this.rules);

        for (let i=0; i<keys.length; i+=1){

            let name = keys[i];

            // Check this rule exists first
            if (!Validator.ruleLibary[name]){
                throw new Error(`Rule ${name} does not exist, and no validator given`);
            }            

            let ruleSettings = this.rules[name];
            let validFunc = Validator.ruleLibary[name].validator;

            // the rule message could be a function, if so call it to get a string
            let msg = null;

            if (typeof Validator.ruleLibary[name].message === 'function'){
                msg = Validator.ruleLibary[name].message(ruleSettings);
            }
            else {
                msg = Validator.ruleLibary[name].message;
            }

            if (!msg[Validator.locale]){
                throw new Error(`Rule ${name} does not have a validation message for the current locale, ${Validator.locale}`);
            }

            msg = msg[Validator.locale];

            // Lookup the rule, or check if a validator function was passed
            
            // Now do the validation!
            if (isObject(val) && isEmpty(val) && ruleSettings !== false){
                //console.log(`[${name}] EMPTY: ${msg}`)    
                errors.push(msg);           
            }
            else if (ruleSettings !== false) {
                
                let isValid = await validFunc(val, ruleSettings);

                if (!isValid){ 
                    //console.log(`[${name}] ERROR: ${msg}`)    
                    errors.push(msg);           
                }
                else {
                    // store the fields that passed in case we need them
                    passed.push(msg);
                }
            }
            else {
                passed.push(msg);
            }
        }
        
        this.errors = errors;
        this.passed = passed;
        this.isDirty = true;

        return (errors.length == 0) ? true : false;
    }

    /**
     * Add a new rule
     * @param {*} rule 
     */
    static extend(ruleName, settings){
        
        let msg = {};

        // Check we have a validator function
        if (typeof settings.validator != 'function'){
            throw new Error(`You must supply a validator function`);
        }

        // Check for custom message
        if (settings.message) {
            if (typeof settings.message == 'string'){
                msg[Validator.locale] = settings.message;
            }
            else if (typeof settings.message == 'function' && settings.message()[Validator.locale]){
                msg = settings.message;
            }            
            else if (settings.message[Validator.locale]){
                msg = settings.message;
            }
            else {
                throw new Error(`Message does not support the current locale, ${Validator.locale}`);
            }
        }

        Validator.ruleLibary[ruleName] = {
            validator: settings.validator,
            message: msg
        };

    }

    static isEmailValid(email) {

        //const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

        function validateEmail(email) {
            // eslint-disable-next-line 
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        if (!email) {
            return false;
        }
    
        if (email.length > 256) {
            return false;
        }
      
        if (!validateEmail(email)) {
            return false;
        }
      
        // Further checking of some things regex can't handle
        var [account, address] = email.split('@');
        
        if (account.length > 64) {
            return false;
        }
      
        var domainParts = address.split('.');

        if (domainParts.some(function (part) {return part.length > 63})) {
            return false;
        }
      
        return true;

    }

	static isPasswordComplex(password) {

        if (!password){
            return false;
        }

		var hasUpperCase = /[A-Z]/.test(password);
		var hasLowerCase = /[a-z]/.test(password);
		var hasNumbers = /\d/.test(password);
		//var hasNonalphas = /\W/.test(password);
		//var characterGroupCount = hasUpperCase + hasLowerCase + hasNumbers + hasNonalphas;
		var characterGroupCount = hasUpperCase + hasLowerCase + hasNumbers;

		//console.log('characterGroupCount = ' + characterGroupCount);

		if ((password.length >= 8) && (characterGroupCount >= 3)) {
			return true;
		}
		else {
			return false;
		}
    }

}

// Setup rules

if (!Validator.ruleLibary){
    Validator.locale = 'en';
    Validator.ruleLibary = {
        'length': {
            validator: (val, length)=>{
                return (val && typeof val == 'string') ? val.length>=length : false 
            },
            message: (length) => {
                return {
                    'en': `Please enter at least ${length} characters`
                }
            }
        },            
        'email': {
            validator: (val)=>{
                return Validator.isEmailValid(val);
            },
            message: {'en': 'Please enter a valid email'}
        },
        'zip': {
            validator: (val)=>{
                return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(val);
            },
            message: {'en': 'Please enter a valid zip code'}
        }, 
        'alpha': {
            validator: (val)=>{
                return /^[a-z]+$/i.test(val);
            },
            message: {'en': 'Please enter only characters'}
        },             
        'numeric': {
            validator: (val)=>{
                return /^[0-9]+$/i.test(val);
            },
            message: {'en': 'Please enter a number'}
        },     
        'between': {
            validator: (val, opts)=>{
                
                if (typeof val == 'string'){
                    val = parseInt(val);
                }
                
                if (val < opts.min || val > opts.max){
                    return false;
                }

                return true;
            },
            checkRule: (opts)=>{
                if (!opts){
                    throw new Error('You must supply a {min, max} object');
                }
                else if (!opts.min){
                    throw new Error('You must supply a min');
                }
                else if (!opts.max){
                    throw new Error('You must supply a max');
                }
            },
            message: (opts) => {
                return {
                    'en': `Please enter a number between ${opts.min} and ${opts.max}`
                }
            }
        },                         
        'alpha_num': {
            validator: (val)=>{
                return /^[a-z0-9]+$/i.test(val);
            },
            message: {'en': 'Please enter a alpha-numeric value'}
        },             
        'required': {
            validator: (val)=>{
                return !!val;
            },
            message: {'en': 'Please enter a value'}
        }, 
        'password': {
            validator: (val, opts)=>{
                return Validator.isPasswordComplex(val, opts);
            },
            message: {'en': 'Passwords must be at least 8 characters long and contain at least one number and one uppercase letter'}
        }                
    }
}

export default Validator