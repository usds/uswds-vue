# Date Input

## Basic Usage

<div class="mt-3 mb-3">
    <us-form-group label="Enter your date of birth" help-text="For example: 4 28 1986">
        <us-form-date
            name="text-input"
            v-model="currentValue"
        />
    </us-form-group>
    <div class="mt-2">You entered: {{currentValue}}</div>
</div>

```vue
<us-form-group label="Enter your date of birth" help-text="For example: 4 28 1986">
    <us-form-date
        name="text-input"
        v-model="currentValue"
    />
</us-form-group>
```

## Passing in a `v-model` value

If the value passed into `v-model` is already set, `<us-form-date>`  will attempt to decode and set it's internal state appropriatly. If the `valueAsDate` prop is set, it'll expect a Date object otherwise it'll expect a string with the format `YYYY-MM-DD` (or current format if changed from default).

<div class="mt-3 mb-3">
    <us-form-group label="A validated date field">
        <us-form-date
            :min-year="2019"
            :max-year="2021"
            v-model="presetVal"
            :required="true"
        />
    </us-form-group>
    <div class="mt-2">You entered: {{presetVal}}</div>
</div>

## `v-model` return value

By default, `<us-form-date>` returns dates as a string in the `YYYY-MM-DD` format, which is the same format returned by native browser `<input type="date">` controls. You can have `<us-form-date>` return a Date object (with no time portion) as the v-model value instead by setting the value-as-date prop.

If no date is selected, `<us-form-date>` returns an empty string '', or returns null if the value-as-date prop is set.

Note that when value-as-date prop is set, the returned Date object will be in the browser's default timezone.

If `<us-form-date>` has a value set for the name prop, a hidden input will be created which will have its name attribute set to the value of the name prop, and the value attribute will be set to the selected date as a `YYYY-MM-DD` string (or current format if changed from default). This will allow the `<us-form-date>` selected value to be submitted via native browser form submission.

## Validation

You can make use of built-in validation. As this compoment is more complex, it differs from others in that it doesn't have a `rules` prop, instead just set a `required` prop to true to turn on validation.

<div class="mt-3 mb-3">
    <us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
        <us-form-group label="A validated date field">
            <us-form-date
                v-model="currentValue2"
                :required="true"
            />
        </us-form-group>
        <us-button type="submit" variant="primary">Submit</us-button>
        <us-tag variant="danger" v-if="isValid === false">Invalid</us-tag>
        <us-tag variant="success" v-else-if="isValid === true">Valid</us-tag>
        <us-tag variant="dark" v-if="isDirty === true">Dirty</us-tag>
        <us-tag variant="light" v-else-if="isDirty === false">Prestine</us-tag>
    </us-form>
    <div class="mt-2">You entered: {{currentValue2}}</div>
</div>

```vue
<us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
    <us-form-group label="A validated date field">
        <us-form-date
            v-model="currentValue2"
            :required="true"
        />
    </us-form-group>
    <us-button type="submit" variant="primary">Submit</us-button>
    <us-tag variant="danger" v-if="isValid === false">Invalid</us-tag>
    <us-tag variant="success" v-else-if="isValid === true">Valid</us-tag>
    <us-tag variant="dark" v-if="isDirty === true">Dirty</us-tag>
    <us-tag variant="light" v-else-if="isDirty === false">Prestine</us-tag>
</us-form>
```

### Min and max years

You can set a min and max year with the `min-year` and `max-year` props, which expect a integer value. For example;

<div class="mt-3 mb-3">
    <us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
        <us-form-group label="A validated date field">
            <us-form-date
                :min-year="2019"
                :max-year="2021"
                v-model="currentValue2"
                :required="true"
            />
        </us-form-group>
        <us-button type="submit" variant="primary">Submit</us-button>
        <us-tag variant="danger" v-if="isValid === false">Invalid</us-tag>
        <us-tag variant="success" v-else-if="isValid === true">Valid</us-tag>
        <us-tag variant="dark" v-if="isDirty === true">Dirty</us-tag>
        <us-tag variant="light" v-else-if="isDirty === false">Prestine</us-tag>
    </us-form>
    <div class="mt-2">You entered: {{currentValue2}}</div>
</div>

```vue
<us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
    <us-form-group label="A validated date field">
        <us-form-date
            :min-year="2019"
            :max-year="2021"
            v-model="currentValue2"
            :required="true"
        />
    </us-form-group>
</us-form>
```

## Component Reference

### `<us-form-date>`

### Properties 

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| v-model  | string|Date | null | The v-model prop |
| disabled  | boolean | false | Disable the control |
| required  | boolean | false | Set to true to turn on validations |
| valid  | boolean | null | Allows you to manually control validation state |
| validation-mode  | string | 'aggressive' | Validation mode, see validation docs for details. |
| max-year  | number | 9999 | The max year required, only used if `required` is set to true |
| min-year  | number | 0 | The min year required, only used if `required` is set to true |
| name  | string | null | The title |
| value-as-date  | string | info | Applies one of the contextual color variants |
| format | string | 'YYYY-MM-DD' | The date format, see (momentjs docs)[https://momentjs.com/docs/#/parsing/] for more. |

### Further Reading

See [date picker documentation at USWDS](https://designsystem.digital.gov/components/form-controls/#date-input)

<script>
export default {
    data() {
        return {
            currentValue: null,
            currentValue2: null,
            presetVal: '2018-04-01'
        }
    },
    methods: {
        onSubmit(){

        }
    }
}
</script>