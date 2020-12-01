# Table

For displaying tabular data, `<us-table>`. **Coming soon:** support for pagination, filtering, sorting, custom rendering, various style options, events, and asynchronous data.

## Fields as a simple array

Fields can be a simple array, for defining the order of the columns, and which columns to display:

Example: Using `array` fields definition

<div class="mt-3 mb-3">
    <us-table 
        hover
        caption="Fields as a simple array"
        :items="[
            { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
            { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
            { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]">
    </us-table>
</div>

```vue
<us-table 
    caption="Fields as a simple array"
    :items="[
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
    ]">
</us-table>
```

## Fields as an array of objects

Fields can be a an array of objects, providing additional control over the fields (such as sorting, formatting, etc.). Only columns (keys) that appear in the fields array will be shown:

<div class="mt-3 mb-3">
    <us-table 
        caption="Example: Using array of objects fields definition"
        striped 
        hover 
        :fields="[
                { key: 'last_name'},
                { key: 'first_name'},
                { key: 'age', label: 'Person age'}            
        ]" 
        :items="[
            { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
            { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
            { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]"
    >
    </us-table>
</div>


```vue
<template>
  <div>
    <us-table striped hover :items="items" :fields="fields"></us-table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            // Note 'isActive' is left out and will not appear in the rendered table
            fields: [
                { key: 'last_name'},
                { key: 'first_name'},
                { key: 'age', label: 'Person age'}            
            ],
            items: [
                { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
            ]
        }
    }
}
</script>

```

## Borderless

To render a borderless table, add the prop `borderless`.

<div class="mt-3 mb-3">
    <us-table 
        borderless
        :items="[
            { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
            { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
            { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]">
    </us-table>
</div>

```vue
<us-table 
    borderless
    :items="[
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
    ]">
</us-table>
```

## Custom cell rendering

Scoped field slots give you greater control over how the record data appears. You can use scoped slots to provided custom rendering for a particular field. If you want to add an extra field which does not exist in the records, just add it to the fields array, and then reference the field(s) in the scoped slot(s). Scoped field slots use the following naming syntax: `'cell(' + field key + ')'`.

Example: Custom data rendering with scoped slots

<div class="mt-3 mb-3">
    <us-table :fields="fields" :items="items">
        <!-- A custom formatted column --> 
        <template v-slot:cell(name)="{cell}">
            <b class="text-info">{{ cell.last.toUpperCase() }}</b>, <b>{{ cell.first }}</b>
        </template>
        <!-- A virtual column -->
        <template #cell(index)="{index}">
            {{ index + 1 }}
        </template>
        <!-- A virtual composite column -->
        <template #cell(nameage)="{item}">
            {{ item.name.first }} is {{ item.age }} years old
        </template> 
    </us-table>
</div>


```vue
<template>
    <us-table :fields="fields" :items="items">
        <!-- A custom formatted column --> 
        <template v-slot:cell(name)="{cell}">
            <b class="text-info">{{ cell.last.toUpperCase() }}</b>, <b>{{ cell.first }}</b>
        </template>
        <!-- A virtual column -->
        <template #cell(index)="{index}">
            {{ index + 1 }}
        </template>
        <!-- A virtual composite column -->
        <template #cell(nameage)="{row}">
            {{ row.name.first }} is {{ row.age }} years old
        </template> 
    </us-table>
</div>
</template>

<script>
export default {
    data() {
        return {
            fields: [
                // A virtual column that doesn't exist in items
                'index',
                // A column that needs custom formatting
                { key: 'name', label: 'Full Name' },
                // A regular column
                'age',
                // A regular column
                'sex',
                // A virtual column made up from two fields
                { key: 'nameage', label: 'First name and age' }
            ],
            items: [
                { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
                { name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36 },
                { name: { first: 'Rubin', last: 'Kincade' }, sex: 'Male', age: 73 },
                { name: { first: 'Shirley', last: 'Partridge' }, sex: 'Female', age: 62 }
            ]
        };
    }
};
</script>
```

The slot's scope variable (data in the above sample) will have the following properties:


| Property | Type  | Description |
| -------- | ----- | ----------- | 
| index  | Number | The row number (indexed from zero) relative to the displayed rows |
| item  | Object | The entire raw record data (i.e. `items[index]`) for this row |
| key  | String | The cell's column key |
| cell  | Object | The raw data for this cell, i.e. `item[key]` |

`index` will not always be the actual row's index number, as it is computed after filtering, sorting and pagination have been applied to the original table data. The index value will refer to the displayed row number. This number will align with the indexes from the optional v-model bound variable.

When using the new Vue 2.6 v-slot syntax, note that slot names cannot contain spaces, and when using in-browser DOM templates the slot names will always be lower cased. To get around this, you can pass the slot name using Vue's dynamic slot names.

<script>
export default {
    data() {
        return {
            fields: [
                // A virtual column that doesn't exist in items
                'index',
                // A column that needs custom formatting
                { key: 'name', label: 'Full Name' },
                // A regular column
                'age',
                // A regular column
                'sex',
                // A virtual column made up from two fields
                { key: 'nameage', label: 'First name and age' }
            ],
            items: [
                { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
                { name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36 },
                { name: { first: 'Rubin', last: 'Kincade' }, sex: 'Male', age: 73 },
                { name: { first: 'Shirley', last: 'Partridge' }, sex: 'Female', age: 62 }
            ]
        };
    }
};
</script>