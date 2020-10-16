<template>
    <input
        class="usa-input"
        :name="localName"
        :id="divId"
        v-model="currentValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="{
            'usa-input--error': localValid === false,
            'usa-input--success': localValid === true
        }"
    />
</template>
<script>
import FormInputMixins from "../mixins/FormInputMixin";
export default {
    name: 'us-form-input',
    mixins: [FormInputMixins],
    props: {
        type: {
            type: String,
            default: 'text'
        }        
    },
    data() {
        return {
        };
    },
    watch: {

    },
    mounted(){
    },
    methods: {
    }
};
</script>
<style lang="scss">
.usa-input {
    max-width: 100%;
}
</style>
