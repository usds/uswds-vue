<template>
    <textarea
        class="usa-textarea"
        :name="name"
        :id="divId"
        v-model="currentValue"
        :rows="rows"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="{
            'usa-input--small': size == 'sm',
            'usa-input--medium': size == 'md',
            'usa-input--error': valid === false || parentValid === false,
            'usa-input--success': valid === true || parentValid === true  
        }"
    />
</template>
<script>
import FormInputMixins from "../mixins/FormInputMixin";
export default {
    name: 'us-form-textarea',
    mixins: [FormInputMixins],
    props: {
        size: {
            type: String,
            default: 'lg'
        },
        rows: {
            type: Number,
            default: 8
        }
    }
};
</script>
<style lang="scss">
.usa-textarea {
    max-width: 100%;
}
</style>