<template>
    <div>
        <us-form-group
            :label="opts.label"
            :helpText="opts.help"
            :label-sr-only="opts.hideLabel"
            :label-for="divId"
            :error="errors[0]"
            :valid="valid"
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
    </div>
</template>

<script>
import InputMixin from '../mixins/InputMixin.js';

export default {
    name: 'us-validated-text',
    components: {},
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
