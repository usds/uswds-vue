# Validated Form <Badge text="extension"/>

## Basic Usage 

<div>
        <us-validated-form 
            v-model="formData" 
            :config="config1"        
        />
        {{formData}}
    </us-row>
</div>

## Setup

Because this is an extension, you'll need to manually add some dependencies and set them up. The validatation components make use of [vee-validate](https://logaretm.github.io/vee-validate/) and [vue-the-mask](https://vuejs-tips.github.io/vue-the-mask/). 

### Install 

```sh
yarn add vue-the-mask vee-validate
# or
npm install vue-the-mask vee-validate
```

### Setup

The following code snippet demonstrates how to setup `vee-validate`. One easy way is to add this to a file called `validate.js` and import from your `main.js`.


```js
import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';

// Install VeeValidate rules and localization
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';

Object.keys(rules).forEach((rule) => {
    extend(rule, rules[rule]);
});

// Support other languages if needed
localize('en', en);

// Install VeeValidate components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
```
<script>

import Vue from 'vue';
// https://logaretm.github.io/vee-validate/
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';

// Install VeeValidate rules and localization
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';

Object.keys(rules).forEach((rule) => {
    extend(rule, rules[rule]);
});

localize('en', en);
// TODO: add spanish validation messages here!!!!

// Install VeeValidate components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

export default {
    data() {
        return {
            formData: {},
            config1: [
                {label: 'Enter some text', type:'text', name: 'textField', description: 'This is a validated text input', key:'text-1', required: true},
                {label: 'What is your Phone number', type:'phone-us', name: 'phoneField', description: 'This is a US phone number, and uses a mask to enforce it', key:'phone-1', required: true},
                {label: 'What is your SSN?', type:'ssn', name: 'ssnField', description: 'This is a US social security number, and uses a mask to enforce it', key:'ssn-1', required: true},
                {label: 'What is your zip code?', type:'zip', name: 'zipField', description: 'This is a validated zip code input', key:'zip-1', required: true},
                {label: 'Pick one', type:'combobox', options: ['option 1', 'option 2', 'option 3'], name: 'comboboxField', description: 'This is a validated combobox, you must pick one', key:'combo-1', required: true},
            ]            
        };
    }
}
</script>