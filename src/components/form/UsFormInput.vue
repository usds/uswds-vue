<template>
    <input
        class="usa-input"
        :name="name"
        :id="divId"
        v-model="currentValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="{
            'usa-input--error': valid === false || parentValid === false,
            'usa-input--success': valid === true || parentValid === true
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
    computed: {
        parentValid(){
            return this.$parent.valid;
        }
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
