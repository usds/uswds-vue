# Boolean

## Basic Usage 

<div class="mt-3 mb-3">
    <us-form-group label="A Boolean field">
        <us-form-boolean
            name="yes or no?"
            v-model="currentValue"
        />
    </us-form-group>
    <div class="mt-2">You selected: {{currentValue}}</div>
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

<script>
export default {
    data() {
        return {
            currentValue: null,
        }
    }
}
</script>