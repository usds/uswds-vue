# Date Picker

## Basic Usage

<div class="mt-3 mb-3">
    <us-form-date label="Enter your date of birth" helpText="For example: 4 28 1986">
        <us-form-date
            name="text-input"
            v-model="currentValue"
        />
    </us-form-date>
    <div class="mt-2">You entered: {{currentValue}}</div>
</div>

```vue
<us-form-group label="A basic text field">
    <us-form-date
        name="text-input"
        v-model="currentValue"
    />
</us-form-group>
```

## Validation

You can make use of built-in validation, for example;

<div class="mt-3 mb-3">
    <us-form @submit="onSubmit()" :validate="true" v-slot="{isValid, isDirty}">
        <us-form-group label="A validated date field">
            <us-form-date
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

```

<script>
export default {
    data() {
        return {
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