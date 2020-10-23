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
        <us-form-boolean
                :id="divId"
                :name="opts.name"
                v-model="currentValue"
                :disabled="opts.disabled"
            />
        </us-form-group>
    </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import InputMixin from '../mixins/InputMixin.js';

export default {
    name: 'us-validated-boolean',
    components: {
        ValidationProvider
    },
    mixins: [InputMixin],
};
</script>
