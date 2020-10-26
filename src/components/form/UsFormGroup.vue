<template>
    <div class="usa-form-group" :class="{ 'usa-form-group--error': localValid === false }">
        
        <slot name="label">
            <label v-if="label" class="usa-label" :for="divId">{{ label }}</label>
        </slot>

        <slot v-bind="{ localValid, divId }"></slot>

        <!-- Error Message -->
        <slot name="validation-error" v-bind:error="localError">
            <span v-if="localError" class="usa-error-message" id="input-error-message" role="alert">{{ localError }}</span>
        </slot>

        <!-- Help text -->
        <slot name="help-text">
            <span v-if="helpText" class="usa-hint">
                {{ helpText }}
            </span>
        </slot>

    </div>
</template>

<script>
/**
 * @see https://designsystem.digital.gov/components/form-controls/#text-input
 */
export default {
    name: 'us-form-group',
    props: {
        divId: {
            type: String,
            default() {
                return `id-` + Math.floor(100 + Math.random() * 10000);
            }
        },
        // To support column form layouts, break from uswds norms and place help text 
        // and error messages *below* input
        colSupport: {
            type: Boolean,
            default: false
        },
        valid: {
            type: Boolean,
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
            localValid: null,
            localError: null
        };
    },    
    mounted(){
        this.localValid = this.valid;
        this.localError = this.error;
    },
    methods: {
        // This method is called by child components to indicate the validation state 
        // has changed
        onValidated(state, errors){
            this.localValid = state;
            this.localError = (errors && errors.length > 0) ? errors[0] : null;
        }

    }  
};
</script>
