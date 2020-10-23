<template>
    <validation-provider tag="div" :rules="opts.rules" :mode="opts.validationMode" :name="opts.name" :vid="vid" v-slot="v">
        <us-form-group
            :label="opts.label"
            :helpText="opts.help"
            :label-sr-only="opts.hideLabel"
            :label-for="divId"
            :error="opts.error || v.errors[0]"
            :valid="getValidationState(v)"
            label-class="usx-form-label"
        >                    
        <us-form-input
                :id="divId"
                :name="opts.name"
                v-model="currentValue"
                :type="type"
                :disabled="opts.disabled"
                :placeholder="opts.placeholder"
            ></us-form-input>
        </us-form-group>
    </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import InputMixin from '../mixins/InputMixin.js';

export default {
    name: 'form-input-text',
    components: {
        ValidationProvider
    },
    mixins: [InputMixin],
    props: {
        // value, required, disabled, name, label, placeholder, description, hideLabel
        // provided by the InputMixin
    },
    mounted() {
        if (this.opts.type == 'password' || this.opts.type == 'password-confirm') {
            this.type = 'password';
        }
    },
    data() {
        // divId, isUpdating, vid, currentValue, inputName
        // provided by the InputMixin
        return {
            type: 'text'
        };
    },
    methods: {
        // getValidationState method provided by InputMixin
    }
};
</script>
