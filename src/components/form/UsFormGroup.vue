<template>
    <div class="usa-form-group" :class="{ 'usa-form-group--error': valid === false }">
        <slot name="label" v-bind:label="label">
            <label v-if="label" class="usa-label" :for="divId">{{ label }}</label>
        </slot>

        <slot v-bind="{ valid, divId }"></slot>

        <!-- Error Message -->
        <slot name="validation-error" v-bind:error="error">
            <span v-if="error" class="usa-error-message" id="input-error-message" role="alert">{{ error }}</span>
        </slot>

        <!-- Help text -->
        <slot name="help-text" v-bind:helpText="helpText">
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
        name: {
            type: String,
            default: ''
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
    }
};
</script>
