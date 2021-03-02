# Combo box (dropdown)

## Basic Usage 

<div class="mt-3 mb-3">
    <us-form-group label="Select any historical figure">
        <us-form-combobox
            name="select historical figure"
            :options="options2"
            v-model="checkedValues"
        />
    </us-form-group>
    <div class="mt-2">You selected: {{checkedValues}}</div>
</div>

```vue
<us-form-group label="Select any historical figure">
    <us-form-combobox
        name="select historical figure"
        :options="['Sojourner Truth', 'Frederick Douglass', 'Booker T. Washington', 'George Washington Carver']"
        v-model="checkedValues"
    />
</us-form-group>
```

## Setting key and label fields with complex data

You can specify the key field and label fields using the `key-field` and `label-field` prop.

<div class="mt-3 mb-3">
    <us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
        <us-form-group label="Select any historical figure">
            <us-form-combobox
                name="select historical figure"
                key-field="id"
                label-field="name"
                :options="[
                    { id: 1, name: 'Sojourner Truth'},
                    { id: 2, name: 'Frederick Douglass'},
                    { id: 3, name: 'Booker T. Washington'}, 
                    { id: 4, name: 'George Washington Carver'}
                ]"
                v-model="checkedValues3"
            />
        </us-form-group>
    </us-form>
    <div class="mt-2">You checked: {{checkedValues3}}</div>
</div>

```vue
<us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
    <us-form-group label="Select any historical figure">
        <us-form-combobox
            name="select historical figure"
            key-field="id"
            label-field="name"
            :options="[
                { id: 1, name: 'Sojourner Truth'},
                { id: 2, name: 'Frederick Douglass'},
                { id: 3, name: 'Booker T. Washington'}, 
                { id: 4, name: 'George Washington Carver'}
            ]"
            v-model="checkedValues"
        />
    </us-form-group>
</us-form>
<div class="mt-2">You checked: {{checkedValues}}</div>
```

## Validation

You can make use of built-in validation, for example;

<div class="mt-3 mb-3">
    <us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
        <us-form-group label="Select any historical figure">
            <us-form-combobox
                name="select historical figure"
                :options="options"
                v-model="checkedValues2"
                :rules="{required:true}"
            />
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
        <us-form-combobox
            name="select historical figure"
            :options="options"
            :rules="{required:true}"
            v-model="checkedValues">
        </us-form-combobox>
    </us-form-group>
    <us-button type="submit" variant="primary">Submit</us-button>
    <us-tag variant="danger" v-if="isValid === false">Invalid</us-tag>
    <us-tag variant="success" v-else-if="isValid === true">Valid</us-tag>
    <us-tag variant="dark" v-if="isDirty === true">Dirty</us-tag>
    <us-tag variant="light" v-else-if="isDirty === false">Prestine</us-tag>
</us-form>
```

<script>
export default {
    data() {
        return {
            checkedValues: 'Sojourner Truth',
            checkedValues2: null,
            checkedValues3: null,
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
                    disabled:true
                }
            ]                        
        }
    },
    methods: {
        onSubmit(){

        }
    } 
}
</script>
