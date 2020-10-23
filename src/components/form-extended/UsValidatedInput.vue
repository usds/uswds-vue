<template>
    <!-- A form divider -->

    <div v-if="config.type == 'divider'" class="pt-3 mb-5">
        <hr />
        <h4 v-if="config.title">{{ config.title }}</h4>
        <p v-if="config.lead">{{ config.lead }}</p>
    </div>

    <p v-else-if="config.type == 'statement'">
        {{config.lead}}
    </p>

    <!-- Phone Number (US) -->

    <us-validated-masked-text v-else-if="config.type == 'phone-us'" 
        v-model="currentValue" 
        :config="{ 
            ...config, 
            mask: '###-###-####', 
            rules: {required:true, length:10}
        }" 
    />

    <!-- Social Security Number /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/ -->

    <us-validated-masked-text v-else-if="config.type == 'ssn'" v-model="currentValue" :config="{ ...config, mask: '###-##-####', rules: {required:true, length:9}}" />

    <!-- Email -->

    <us-validated-text v-else-if="config.type == 'email'" v-model="currentValue" :config="{ ...config, rules: { required: true, email: true } }" />

    <!-- Password -->

    <us-validated-text type="password" v-else-if="config.type == 'password'" v-model="currentValue" :config="{ ...config, rules: 'required|password-complex' }" />
    <us-validated-text type="password" v-else-if="config.type == 'password-confirm'" v-model="currentValue" :config="{ ...config, rules: 'required|confirmed:pwdConfirmedVid' }" />

    <!-- Url -->

    <us-validated-masked-text v-else-if="config.type == 'url'" v-model="currentValue" :config="{ ...config, rules: { required: true, url: true } }" />

    <!-- Zip Code -->

    <us-validated-masked-text v-else-if="config.type == 'zip'" v-model="currentValue" :config="{ ...config, mask: '#####', rules: {required:true, length:5} }" />

    <!-- A list of options, where each option is check -->

    <us-validated-checkbox v-else-if="config.type == 'checkbox'" v-model="currentValue" :config="config" />
    <us-validated-radio v-else-if="config.type == 'radio'" v-model="currentValue" :config="config" />

    <!-- A list of options, where each option is just text -->

    <us-validated-combobox v-else-if="config.type == 'combobox'" v-model="currentValue" :config="config" />

    <!-- Yes/No input -->

    <us-validated-boolean v-else-if="config.type == 'boolean'" v-model="currentValue" :config="config" />

    <!-- Default to text input -->

    <us-validated-text v-else-if="config.type == 'text'" v-model="currentValue" :config="config" />

    <!-- Else, show an alert! -->

    <div v-else class="w-100">
        <us-validated-text v-model="currentValue" :config="{ ...config, disabled: true, placeholder: `ERROR: ${config.type} is a unknown form input type` }" />
    </div>
</template>

<script>
import UsValidatedText from './inputs/UsValidatedText';
import UsValidatedCombobox from './inputs/UsValidatedCombobox';
import UsValidatedCheckbox from './inputs/UsValidatedCheckbox';
import UsValidatedRadio from './inputs/UsValidatedRadio';
import UsValidatedMaskedText from './inputs/UsValidatedMaskedText';
import ValueWatcherMixin from './mixins/ValueWatcherMixin.js';

/**
 * This is a generic form input, it figures out the specific input type from the configuration passed in
 * and sets up appropriate rules and masking
 */
export default {
    name: 'us-validated-input',
    components: {
        UsValidatedText,
        UsValidatedCombobox,
        UsValidatedCheckbox,
        UsValidatedRadio,
        UsValidatedMaskedText
    },
    data() {
        return {
            // isUpdating, currentValue provided by the InputMixin
            passwordRules: {
                required: true,
                alpha_num: true,
                min: { length: 8 },
                max: { length: 15 }
            }
        };
    },
    mixins: [ValueWatcherMixin],
    props: {
        // value prop provided by the InputMixin
        config: {
            type: Object
        }
    }
};
</script>
