<template>    

<fieldset class="usa-fieldset">
    
    <legend class="usa-legend" v-if="label">{{label}}</legend>

    <!-- Help text -->
    <span v-if="helpText" class="usa-hint">{{ helpText }}</span>

    ERROR: {{localError}}

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
                :rules="{required:true, 'require-calendar-day': {month: month, year: year, day: day}}"
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
import _ from 'lodash';
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
            validator: (val, opts) => {
                let max = 31;
                if (_.isNumber(opts.year) && _.isNumber(opts.month)){
                    max = moment(`${opts.year}-${opts.month}`, "YYYY-MM").daysInMonth();
                }
                else if (_.isNumber(opts.year)){
                    max = moment(opts.month, "MM").daysInMonth()
                }
                else {
                    
                }
                console.log(`MAX: ${max} -- Year: ${opts.year} (${_.isNumber(opts.year)}), month: ${opts.month} (${_.isNumber(opts.month)})`, opts);
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
                console.log(name, this.validationStates[name]);
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
