<template>
<span>
    MASK: {{mask}}
    <the-mask 
        class="usa-input"
        :name="name"
        :mask="mask" 
        :masked="false"         
        :id="divId"
        v-model="currentValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="{
            'usa-input--error': isValid === false || parentValid === false,
            'usa-input--success': isValid === true || parentValid === true
        }"             
        >
    </the-mask>
</span>
</template>

<script>
import {TheMask} from 'vue-the-mask'
import FormInputMixins from "../mixins/FormInputMixin";

export default {
    name: 'us-form-input-masked',
    components: {
        TheMask
    },
    mixins: [FormInputMixins],
    props: {
        mask: {
            type: String,
            default: null
        }
        // value, required, disabled, name, label, placeholder, description, hideLabel
        // provided by the InputMixin
    },
    data() {
        // divId, isUpdating, vid, currentValue, inputName
        // provided by the InputMixin
        return {};
    },    
    methods: {
        // getValidationState method provided by InputMixin
    }
};
</script>
