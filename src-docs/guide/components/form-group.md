# Form Group

The `<us-form-group>` component is the easiest way to add some structure to forms. Its purpose is to pair form controls with a legend or label, and to provide help text and invalid/valid feedback text, as well as visual (color) contextual state feedback.

## Basic Usage

<div class="mb-3 mt-3">
    <us-form-group label='Enter your username' help-text='Your username should be 8-16 characters long'>
        <us-form-input name='username' v-model="username"/>
    </us-form-group>
</div>

```vue
<us-form-group label='Enter your username' help-text='Your username should be 8-16 characters long'>
    <us-form-input name='username' v-model="username"/>
</us-form-group>
```

## Validation States

Validation states are handled through the `valid` prop. You can also pass an error message with the `error` prop. This will also set the validation state of any child form components automatically, though this can still be done manually.

<div class="mb-3 mt-3">
    <us-form-group label='This is invalid' help-text='Your username should be 8-16 characters long' :valid="false" error="This is incorrect">
        <us-form-input name='text1' />
    </us-form-group>
    <us-form-group label='This is valid' help-text='Your username should be 8-16 characters long' :valid="true" error="This is incorrect">
        <us-form-input name='text1' />
    </us-form-group>
    <us-form-group label='This is indeterminate' help-text='Your username should be 8-16 characters long' :valid="null" error="This is incorrect">
        <us-form-input name='text1' />
    </us-form-group>        
</div>

```vue
<us-form-group 
    label='This is invalid' 
    help-text='Your username should be 8-16 characters long' 
    :valid="false" 
    error="This is incorrect">
    <us-form-input name='text1' />
</us-form-group>

<us-form-group 
    label='This is valid' 
    help-text='Your username should be 8-16 characters long' 
    :valid="true" 
    error="This is incorrect">
    <us-form-input name='text1' />
</us-form-group>

<us-form-group 
    label='This is indeterminate' 
    help-text='Your username should be 8-16 characters long' 
    :valid="null" 
    error="This is incorrect">
    <us-form-input name='text1' />
</us-form-group>  
```

## Support for custom labels

If you need full support for hmtl with your label, then you can use the label slot to fully customize the help text. Similar slots exist for the help text and validation errors.

<div>
    <us-form-group name='username' helpText='Your username should be 8-16 characters long'>
        <template name="label">
            My custom label with a icon <i class="fas fa-robot"></i>
        </template>
        <us-form-input v-model="username"/>
    </us-form-group>
</div>

## Component Reference

### `<us-form-group>`

### Properties 

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| name  | boolean | false | Show page title labels |
| help-text | boolean | false | Center page title labels |
| col-support | boolean | false | To support column form layouts, break from uswds norms and place help text and error messages *below* input which looks a lot better as the input fields stay in alignment.
| valid | boolean | null | If true, sets the validation state a valid. False is invalid and null is indeterminate |
| error | string | null | Pass in an error message to be displayed |

### Slots 

| Slot Name | Arguments | Description |
| -------- | ----- | ------- | ----------- | 
| label  | none | Allows customization of the label |
| help-text  | error | Allows customization of the help text, with the current error message passed in as a prop |
| validation-error  | none | Allows customization of the error |

<script>
export default {
    data() {
        return {
            username: null
        };
    }
}
</script>