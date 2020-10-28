<template>    

    <div class="usa-memorable-date pt-2 pb-1">

        <div class="usa-form-group usa-form-group--month">        
            <label for="month">Month</label>
            <us-form-input-masked         
                name="month"
                v-model="month"
                mask="##"
                :suppress-error="true"
                :rules="{required:true, between: {min: 1, max: 12}}"                
                :disabled="disabled"
                @changed="onChanged('month')"
            />
        </div>

        <div class="usa-form-group usa-form-group--day">        
            <label for="day">Day</label>
            <us-form-input-masked         
                name="day"
                v-model="day"
                mask="##"
                :suppress-error="true"
                :rules="{required:true, 'require-calendar-day':true}"
                :disabled="disabled"
                @changed="onChanged('day')"
            />
        </div>

        <div class="usa-form-group usa-form-group--year">        
            <label for="year">Year</label>
            <us-form-input-masked         
                name="year"
                v-model="year"
                mask="####"
                :suppress-error="true"
                :rules="{required:true}"
                :disabled="disabled"
                @changed="onChanged('year')"
            />
        </div>       

        <!-- Put date as a string into hidden field for compatibility -->
        <input v-if="name" :name="name" type="hidden" v-model="currentDateAsString"/> 

    </div>

</template>
<script>
import Validator from '../../utils/Validator';
import moment from 'moment';

export default {
    name: 'us-form-date',
    props: {
        value: {
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }, 
        required: {
            type: Boolean,
            default: false
        },             
        valid: {
            type: Boolean,
            default: null
        },
        validationMode: {
            type: String,
            default: 'aggressive'
        },   
        maxYear: {
            type: Number,
            default: 9999
        },
        minYear: {
            type: Number,
            default: 0
        },
        name: {
            type: String,
            default: null
        },        
        format: {
            type: String,
            default: "YYYY-MM-DD"
        },
        valueAsDate: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            day: null,
            month: null,
            year: null,
            currentDate: null,
            currentDateAsString: '',
            validationStates: {},
            localValid: null
        };
    },
    computed: {
        validationMessages() {
            return {
                basic: 'Please enter a valid date',
                maxYear: `Please enter a year less than ${this.maxYear}`,
                minYear: `Please enter a year greater than ${this.minYear}`
            }
        },
        parentValid(){
            return this.$parent.valid;
        },
        localError(){
            let keys = ['day','month','year'];
            for (let i=0; i<keys.length; i+=1){
                let key = keys[i];
                if (this.validationStates[key] === false){
                    //return `Please enter a valid ${key}`;
                    
                    return this.validationMessages['basic'];
                }
            }
            return null;
        }        
    },
    mounted(){

        // Update internals based in v-model value
        this.onValueUpdate();

        Validator.extend('require-calendar-day', {

            validator: (val) => {

                let max = 31;

                /*
                let days = {
                    '1': 31, // Jan
                    '2': 28, // Feb
                    '3': 31, // Mar
                    '4': 30, // Apr
                    '5': 31, // May
                    '6': 30, // Jun
                    '7': 31, // Jul
                    '8': 31, // Aug
                    '9': 30, // Sep
                    '10': 31, // Oct
                    '11': 30, // Nov
                    '12': 31 // Dec
                }
                */

                if (this.year && this.month){
                    max = moment(`${this.year}-${this.month}`, "YYYY-MM").daysInMonth();
                }
                else if (this.month){
                    max = moment(this.month, "MM").daysInMonth()
                }
                //console.log(`MAX: ${max} -- Year: ${this.year}, month: ${this.month}  ${days[this.month]}`);
                return (val > 0 && val <= max);
            },
            message: {'en': `You must enter a valid day`}
        });

    },
    methods: {

        __safeToDate(str){

            // Try to decode date
            var timestamp = Date.parse(str);

            if (isNaN(timestamp) == false) {
                return new Date(timestamp);
            }                

            return null;
        },

        onValueUpdate(){

            if (!this.value){
                this.currentDate = null;
                this.currentDateAsString = '';
                return;
            }

            // Attempt to create a date object
            let tmp = null;

            if (this.valueAsDate && (this.value instanceof Date)){
                tmp = this.value;
            }
            else if (!this.valueAsDate && (typeof this.value == 'string')) {
                tmp = this.__safeToDate(this.value);
            }

            if (tmp){
                this.currentDate = moment(tmp);
                this.currentDateAsString = this.currentDate.format(this.format);
                this.year = tmp.getFullYear();
                this.month = tmp.getMonth()+1;
                this.day = tmp.getDate();
            }
            else {
                this.currentDate = null;
                this.currentDateAsString = '';                
            }
        },

        onChanged(){

            // Attempt to create a date object
            if (this.year && this.month && this.day){
                this.currentDate = moment(`${this.year}-${this.month}-${this.day}`, "YYYY-MM-DD");
                if (this.currentDate.isValid()){                    
                    this.currentDateAsString = this.currentDate.format(this.format);
                }                
            }
            else if (this.currentDate != null) {
                this.currentDate = null;
                this.currentDateAsString = '';
            
            }
          
            // Now emit changes, if any
            if (this.valueAsDate){
                this.$emit('input', (this.currentDate) ? this.currentDate.toDate() : null);
                this.$emit('changed', (this.currentDate) ? this.currentDate.toDate() : null);
            }
            else {
                this.$emit('input', this.currentDateAsString);
                this.$emit('changed', this.currentDateAsString);
            }    

            // Do validation, if required
            if (this.validationMode == 'aggressive'){
                this.validate();
            }            

        },
        
        async validate(){

            let errors = [];

            if (this.required && this.currentDate){
                                
                if (this.currentDate.year() > this.maxYear){
                    this.localValid = false;
                    errors = [ this.validationMessages['maxYear']];
                }
                else if (this.currentDate.year() < this.minYear){
                    this.localValid = false;
                    errors = [ this.validationMessages['minYear']];
                }
                else {
                    this.localValid = this.currentDate.isValid();
                    errors = [ this.validationMessages['basic']];
                }

            }            
            else if (this.required && !this.currentDate){
                this.localValid = false;
                errors = [ this.validationMessages['basic'] ];
            }
            else {
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
                    

        },

        // Listen in on validation changes from the form input fields
        onValidated({context, name, isValid}){
            
            if (!this.required){
                return;
            }

            if (context == 'us-form-input-masked'){            
                this.$set(this.validationStates, name, isValid)
                //this.validationStates[name] = isValid;
            }

            //if (prevLocalValid != this.localValid){
                this.$nextTick(()=>{
                    this.updateParentValidState([this.localError]);
                })
           // }

        }        
    }
};
</script>
<style lang="scss">
.usa-input {
    max-width: 100%;
}
</style>
