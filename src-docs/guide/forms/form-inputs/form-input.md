# Form Input

## Basic Usage 

<div class="mt-3 mb-3">
    <us-form-group label="A basic text field">
        <us-form-input
            name="text-input"
            v-model="currentValue"
        />
    </us-form-group>
    <div class="mt-2">You entered: {{currentValue}}</div>
</div>

```vue
<us-form-group label="A basic text field">
    <us-form-input
        name="text-input"
        v-model="currentValue"
    />
</us-form-group>
```

## Input Type

`<us-form-input>` defaults to a text input, but you can set the type prop to one of the supported native browser HTML5 types: text, password, email, number, url, tel, search, date, datetime, datetime-local, month, week, time, range, or color.

<div class="mt-3 mb-3">
    <us-row>
        <us-col md="4" v-for="(type, index) in types" :key="index">
            <us-form-group>
                <template name="label">
                    <div class="usa-label">
                    Type: <span class="text-danger">{{type}}</span>
                    </div>
                </template>
                <us-form-input :type="type" name="text-input"/>
            </us-form-group>        
        </us-col>
    </us-row>

</div>

## Validation

You can make use of built-in validation, for example;

<div class="mt-3 mb-3">
    <us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
        <us-form-group label="A basic text field">
            <us-form-input
                name="text-input2"
                v-model="currentValue2"
                :rules="{required:true}"
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
    <us-form-group label="A basic text field">
        <us-form-input
            name="text-input2"
            v-model="currentValue"
            :rules="{required:true}"
        />
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
            types: ['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'date', 'datetime', 'datetime-local', 'month', 'week', 'time', 'range', 'color'],
            currentValue: null,
            currentValue2: null
        }
    },
    methods: {
        onSubmit(){

        }
    }
}
</script>