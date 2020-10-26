'use strict';

class Validator {
    
    constructor(rules){
        
        this.rules = rules;
        this.valids  = {};

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
        this.defaults = {
            'length': {
                validator: (val, length)=>{
                    return (val && typeof val == 'string') ? val.length>=length : false 
                },
                message: `Please enter at least ${length} characters`
            },            
            'email': {
                validator: (val)=>{
                    return Validator.isEmailValid(val);
                },
                message: 'Please enter a valid email'
            },
            'zip': {
                validator: (val)=>{
                    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(val);
                },
                message: 'Please enter a valid zip code'
            }, 
            'alpha': {
                validator: (val)=>{
                    return /^[a-z]+$/i.test(val);
                },
                message: 'Please enter only characters'
            },             
            'numeric': {
                validator: (val)=>{
                    return /^[0-9]+$/i.test(val);
                },
                message: 'Please enter a number'
            },             
            'alpha_num': {
                validator: (val)=>{
                    return /^[a-z0-9]+$/i.test(val);
                },
                message: 'Please enter a alpha-numeric value'
            },             
            'required': {
                validator: (val)=>{
                    return !!val;
                },
                message: 'Please enter a value'
            }, 
            'password': {
                validator: (val)=>{
                    return Validator.isPasswordComplex(val);
                },
                message: 'Passwords must be at least 8 characters long and contain at least one number and one uppercase letter'
            }                
        }

    }

    /**
     * Run the validation, returns an instance of ValidatorErrors
     * @param {object} obj The data object holding the form data
     */
    async run(val){

        let errors = [];
        
        if (!this.rules){
            return;
        }

        if (typeof this.rules == 'string'){
            // TODO: implment vee-validate strings style rules
            throw new Error(`String based rules not supported yet!!`)
        }

        let keys = Object.keys(this.rules);

        for (let i=0; i<keys.length; i+=1){
            
            // Start with the default validator
            let validFunc = this.defaults['required'].validator;

            // Lookup the rule, or check if a validator functuion was passed
            let rule = this.rules[i];
            let msg = 'Please enter a value';

            // Get the error message, first check for an over-ride. Then check for a default. 
            // Fallback to a generic messge
            if (rule.message){
                msg = rule.message;
            }
            else if (this.defaults[rule.type] && this.defaults[rule.type].message){
                msg = this.defaults[rule.type].message;
            }

            // Get the validator function, first check for an over-ride. Then check for a default. 
            // Fallback to a generic validator
            if (rule.validator){
                validFunc = rule.validator;
            }            
            else if (this.defaults[rule.type] && this.defaults[rule.type].validator){
                validFunc = this.defaults[rule.type].validator;
            }
            
            // Now do the validation!
            if (!val){
                //console.log(`[${rule.field}] EMPTY: ${msg}`)    
                errors.push(msg);           
            }
            else {
                
                let isValid = await validFunc(val);

                if (!isValid){ 
                    //console.log(`[${rule.field}] ERROR: ${msg}`)    
                    errors.push(msg);           
                }
                else {
                    console.log(`[${rule.field}] GOOD: ${msg}`)    
                    // store the fields that passed in case we need them
                    //errors.addValid(rule.field, msg);           
                }
            }
        }
        
        errors.isDirty = true;
        return errors;
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


module.exports = Validator