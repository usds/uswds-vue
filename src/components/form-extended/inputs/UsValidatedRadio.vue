<template>
    <validation-provider tag="div" :rules="opts.rules" :name="opts.name" :vid="vid" v-slot="v">

        <us-form-group
            :label="opts.label"
            :helpText="opts.help"
            :label-sr-only="opts.hideLabel"
            :label-for="divId"
            :error="opts.error || v.errors[0]"
            label-class="usx-form-label"
            :valid="getValidationState(v)"
        >
            <us-form-radio
                :id="divId"
                :name="opts.name"
                :options="opts.options"
                :labelField="opts.labelField"
                :keyField="opts.keyField"
                v-model="currentValue"
                :disabled="opts.disabled"
                :placeholder="opts.placeholder"
            />
        </us-form-group>
    
    </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import InputMixin from '../mixins/InputMixin.js';

export default {
    name: 'us-validated-radio',
    components: {
        ValidationProvider
    },
    mixins: [InputMixin],
    props: {
        // value, required, disabled, name, label, placeholder, description, hideLabel
        // provided by the InputMixin
    },
    mounted() {},
    data() {
        // divId, isUpdating, vid, currentValue, inputName
        // provided by the InputMixin
        return {
        };
    },
    methods: {
        // getValidationState method provided by InputMixin
    }
};
</script>
