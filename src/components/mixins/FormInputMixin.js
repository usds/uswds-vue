//import _ from 'lodash';
import Validator from '../../utils/Validator';

/**
 * This mixin provides all the basic machinary to support the props that an input field
 * of any type woild expect.
 */
const FormInputMixin = {
    props: {
        value: {
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }, 
        rules: {
            type: [Object, String],
            default: null
        },             
        valid: {
            type: Boolean,
            default: null
        },
        name: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        },
        // Allow you to turn of the error string being displayed by validation
        suppressError: {
            type: Boolean,
            default: false
        }       
    },
    data() {
        return {
            divId: null,
            isUpdating: false,
            currentValue: null,
            localValid: null,
            dirty: false,
            errors: [],
            validationMode: 'aggressive',
            validator: null
        };
    },
    watch: {
        valid(newVal, oldVal) {
            if (newVal != oldVal) { 
                this.localValid = newVal;
                this.updateParentValidState(null);
            }
        },
        value(newVal) {
            this.__updateVal(newVal);
        },
        currentValue(val) {
            if (!this.isUpdating) {

                // Set the field as dirty
                this.dirty = true;

                if (this.validationMode == 'aggressive'){
                    this.validate();
                }

                // allows us to use v-model on our input.
                this.$emit('input', val);
                this.$emit('changed', val);
            }
        }
    },
    computed:{
        isValid(){
            return this.localValid;
        },
        parentValid(){
            if (this.$parent && this.$parent.$options.name == 'us-form-group'){
                return this.$parent.valid;
            }
            return null;            
        }        
    },
    created() {},
    mounted() {

        const uuid = this.__getGuid();

        // Create a unique div id
        this.divId = `id-${uuid}`;

        // Set the internal value to the v-model value (i.e. copy the
        // data passed in from parent component as the v-model prop to
        // a local value so we can mutated it.)
        this.__updateVal(this.value);

        // Instantiate a validator class
        if (this.rules){
            this.validator = new Validator(this.rules);
        }

    },
    methods: {

        __getGuid() {
            var S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        },

        __updateVal(newVal){

            // Note that we're updating, so the watcher for currentValue won't respond
            this.isUpdating = true;

            // Set the internal value to the v-model value (i.e. copy the
            // data passed in from parent component as the v-model prop to
            // a local value so we can mutated it.)        
            // But deal with some special cases...
            if (this.$options.name == 'us-form-checkbox' || this.$options.name == 'us-form-radio'){
                if (!newVal){
                    this.currentValue = [];
                }
                else {
                    this.currentValue = newVal;
                }
            }
            else {
                this.currentValue = newVal;
            }

            this.$nextTick(() => {
                this.isUpdating = false;
            });

        },

        async validate(){

            let errors = [];
            let isValid = false;

            if (this.rules && this.validator){
                isValid = await this.validator.run(this.currentValue);
                errors = this.validator.getErrors();
                
                if (this.suppressError){
                    errors = [];
                }

                if (isValid){
                    this.localValid = true;
                }
                else {
                    this.localValid = false;
                }
            }            
            else {
                //console.log('NO VALIDATION: ', this.rules)
                this.localValid = null;
            }

            this.updateParentValidState(errors);
            
            return this.localValid;
        },

        updateParentValidState(errors){

            const myName = this.$options.name;

            // Go up the stack and inform parents of new valid state
            const updateParent = (parent, height) => {

                //console.log(`PARENT ${parent.$options.name}, isValid = ${this.localValid}, dirty = ${this.dirty}`, errors);

                if (parent && typeof parent.onValidated == 'function'){
                    parent.onValidated({context: myName, name: this.name, isValid: this.localValid, isDirty: this.dirty, errors: errors});
                }

                if (parent.$parent && height < 3){
                    updateParent(parent.$parent, height+1);
                }
                
            }

            updateParent(this.$parent, 0);
                    

        }

    }
};

export default FormInputMixin;
