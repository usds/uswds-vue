# Checkbox

## Basic Usage 

<div class="mt-3 mb-3">
    <us-form-checkbox v-model="checkedVal" label="I have read, understood, and accept the legal terms"/>
    <div class="mt-2">Value: {{checkedVal}}</div>
</div>

## Usage with options

<div class="mt-3 mb-3">
    <us-form-group label="Select any historical figure">
        <us-form-checkbox
            name="select historical figure"
            :options="['Sojourner Truth', 'Frederick Douglass', 'Booker T. Washington', 'George Washington Carver']"
            v-model="checkedValues"
        />
    </us-form-group>
    <div class="mt-2">You selected: {{checkedValues}}</div>
</div>

```vue
<us-form-group label="Select any historical figure">
    <us-form-checkbox
        name="select historical figure"
        :options="['Sojourner Truth', 'Frederick Douglass', 'Booker T. Washington', 'George Washington Carver']"
        v-model="checkedValues"
    />
</us-form-group>
```

## Checkbox group options array

The checkbox items are specificed by the `options` prop, and is an array of strings or objects (or both). For objects, the available fields are;

* `value` The selected value which will be set on v-model
* `label` Display text, rendered as basic text. If you require html, use the `label` slot (see below)
* `description` (optional) Add text that is rendered as a second line (see multi-line support below)
* `disabled` (optional) Disables item for selection
* `checked` (optional) Specifies the initial state (is checked or not)

For example;

<div class="mt-3 mb-3">
    <us-form-group label="Select any historical figure">
        <us-form-checkbox
            name="select historical figure"
            :options="options"
            v-model="checkedValues"
        />
    </us-form-group>
    <div class="mt-2">You selected: {{checkedValues}}</div>
</div>

```vue
<us-form-group label="Select any historical figure">
    <us-form-checkbox
        name="select historical figure"
        :options="[
            {value: 1, label: 'Sojourner Truth', default:true},
            {value: 2, label: 'Frederick Douglass'},
            {value: 3, label: 'Booker T. Washington'},
            {value: 4, label: 'George Washington Carver', disabled:true}
        ]"
        v-model="checkedValues"
    />
</us-form-group>
```

If an array entry is a string, it will be used for both the generated value and text fields. You can mix using strings and objects in the array.

## Mutli-Line labels

<div class="mt-3 mb-3">
    <div>You selected: {{checkedValues}}</div>
    <us-form-group label="Select any historical figure">
        <us-form-checkbox
            name="select historical figure"
            :options="options2"
            v-model="checkedValues"
        />
    </us-form-group>
</div>


```vue
<us-form-group label="Select any historical figure">
    <us-form-checkbox
        name="select historical figure"
        :options="[
            {value: 1, label: 'Sojourner Truth', description: 'Born Isabella Belle Baumfre....', default:true},
            {value: 2, label: 'Frederick Douglass', description: 'Frederick Douglass...' },
            {value: 3, label: 'Booker T. Washington', description: 'Booker Taliaferro Washington...'},
            {value: 4, label: 'George Washington Carver', description: 'George Washington Carver...', disabled:true}
        ]"
        v-model="checkedValues"
    />
</us-form-group>
```

## Support for custom labels

You can customize the labels any way you want using the `label` slot. The slot is given the item as a prop, 
which will contain the specific item in the options data that you passed in.

<div class="mt-3 mb-3">
    <div>You selected: {{checkedValues}}</div>
    <us-form-group label="Select any historical figure">
        <us-form-checkbox
            name="select historical figure"
            :options="options2"
            v-model="checkedValues">
            <template v-slot:label="{item}">
                <div style="display: inline-block; text-indent: 0">
                    <us-tag variant="primary" pill>{{item.label}}</us-tag> 
                </div>
            </template>
        </us-form-checkbox>
    </us-form-group>
</div>

```vue
<us-form-group label="Select any historical figure">
    <us-form-checkbox
        name="select historical figure"
        :options="[
            {value: 1, label: 'Sojourner Truth', description: 'Born Isabella Belle Baumfre....', default:true},
            {value: 2, label: 'Frederick Douglass', description: 'Frederick Douglass...' },
            {value: 3, label: 'Booker T. Washington', description: 'Booker Taliaferro Washington...'},
            {value: 4, label: 'George Washington Carver', description: 'George Washington Carver...', disabled:true}
        ]"
        v-model="checkedValues">
        <template v-slot:label="{item}">
            <div style="display: inline-block; text-indent: 0">
                <us-tag variant="primary" pill>{{item.label}}</us-tag> 
            </div>
        </template>
    </us-form-checkbox>
</us-form-group>
```

## Validation

You can make use of built-in validation, for example;

<div class="mt-3 mb-3">
    <us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
        <us-form-group label="Select any historical figure">
            <us-form-checkbox
                name="select historical figure"
                :options="options2"
                :rules="{required:true}"
                v-model="checkedValues2">
            </us-form-checkbox>
        </us-form-group>
        <us-button type="submit" variant="primary">Submit</us-button>
        <us-tag variant="danger" v-if="isValid === false">Invalid</us-tag>
        <us-tag variant="success" v-else-if="isValid === true">Valid</us-tag>
        <us-tag variant="dark" v-if="isDirty === true">Dirty</us-tag>
        <us-tag variant="light" v-else-if="isDirty === false">Prestine</us-tag>
    </us-form>
    <div class="mt-2">You checked: {{checkedValues2}}</div>
</div>

```vue
<us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
    <us-form-group label="Select any historical figure">
        <us-form-checkbox
            name="select historical figure"
            :options="options2"
            :rules="{required:true}"
            v-model="checkedValues2">
        </us-form-checkbox>
    </us-form-group>
    <us-button type="submit" variant="primary">Submit</us-button>
    <us-tag variant="danger" v-if="isValid === false">Invalid</us-tag>
    <us-tag variant="success" v-else-if="isValid === true">Valid</us-tag>
    <us-tag variant="dark" v-if="isDirty === true">Dirty</us-tag>
    <us-tag variant="light" v-else-if="isDirty === false">Prestine</us-tag>
</us-form>
```

## Component Reference

### `<us-form-checkbox>`

### Properties 

| Property | Type    | Default | Description |
| -------- | ------- | ------- | ----------- | 
| options  | array   | []      | An array of items describing you checkbox items, see above |
| valid    | boolean | null   | If true, sets the validation state a valid. False is invalid and null is indeterminate, or if wrapped in a us-form-group you can let that handle this. |

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
            checkedValues: null,
            checkedValues2: null,
            checkedVal: null,
            options: [
                {value: 'sojourner-truth', label: 'Sojourner Truth', default:true},
                {value: 'frederick-douglass', label: 'Frederick Douglass'},
                {value: 'booker-washington', label: 'Booker T. Washington'},
                {value: 'george-washington-carver', label: 'George Washington Carver', disabled:true}
            ],
            options2: [
                {   
                    value: 'sojourner-truth', 
                    label: 'Sojourner Truth', 
                    description: 'Born Isabella "Belle" Baumfree; c. 1797 – November 26, 1883) was an American abolitionist and women\'s rights activist', 
                    default:true
                },
                {
                    value: 'frederick-douglass', 
                    label: 'Frederick Douglass', 
                    description: 'Frederick Douglass (born Frederick Augustus Washington Bailey; c. February 1818 – February 20, 1895) was an American social reformer, abolitionist, orator, writer, and statesman'},
                {
                    value: 'booker-washington', 
                    label: 'Booker T. Washington', 
                    description: 'Booker Taliaferro Washington (April 18, 1856 – November 14, 1915) was an American educator, author, orator, and adviser to multiple presidents of the United States'},
                {
                    value: 'george-washington-carver', 
                    label: 'George Washington Carver', 
                    description: 'George Washington Carver (1860s – January 5, 1943) was an American agricultural scientist and inventor who promoted alternative crops to cotton and methods to prevent soil depletion.', 
                    disabled:true}
            ]              
        }
    },
    methods: {
        onSubmit(){

        }
    } 
}
</script>
