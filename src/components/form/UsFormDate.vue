<template>    

<fieldset class="usa-fieldset">
    
    <legend class="usa-legend" v-if="label">{{label}}</legend>

    <!-- Help text -->
    <span v-if="helpText" class="usa-hint">{{ helpText }}</span>

    <div class="usa-memorable-date mt-2">

        <div class="usa-form-group usa-form-group--month">        
            <label for="month">Month</label>
            <us-form-input-masked         
                name="month"
                v-model="month"
                mask="##"
                :suppress-error="true"
                :rules="{required:true, between: {min: 1, max: 12}}"                
                :disabled="disabled"
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
            />
        </div>        

    </div>

    <!-- Error Message -->
    <div v-if="localError" class="usa-error-message" id="input-error-message" role="alert">{{ localError }}</div>

</fieldset>
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
        description: {
            type: String,
            default: null
        },
        label: {
            type: String,
            default: null
        },
        error: {
            type: String,
            default: null
        },
        helpText: {
            type: String,
            default: null
        }                
    },
    data() {
        return {
            day: null,
            month: null,
            year: null,
            validationStates: {}
        };
    },
    computed: {
        parentValid(){
            return this.$parent.valid;
        },
        localError(){
            let keys = ['day','month','year'];
            for (let i=0; i<keys.length; i+=1){
                let key = keys[i];
                if (this.validationStates[key] === false){
                    //return `Please enter a valid ${key}`;
                    return `Please enter a valid date`;
                }
            }
            return null;
        }        
    },
    mounted(){

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
            message: (length) => {
                return {'en': `You must enter at least ${length} characters`}
            }
        });

    },
    methods: {
        // Listen in on validation changes from the form input fields
        onValidated({context, name, isValid}){
            if (context == 'us-form-input-masked'){
                this.$set(this.validationStates, name, isValid);
            }
        }        
    }
};
</script>
<style lang="scss">
.usa-input {
    max-width: 100%;
}
</style>
