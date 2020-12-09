# Lists <Badge type="green" text="extension"/>

## Basic Usage

<div class="mt-3 mb-3">
    <us-list-group>
        <us-list-group-item>List item</us-list-group-item>
        <us-list-group-item>List item</us-list-group-item>
        <us-list-group-item class="active">Active List item</us-list-group-item>
        <us-list-group-item>List item</us-list-group-item>
    </us-list-group>
</div>

```vue
    <us-list-group>
        <us-list-group-item>List item</us-list-group-item>
        <us-list-group-item>List item</us-list-group-item>
        <us-list-group-item class="active">Active List item</us-list-group-item>
        <us-list-group-item>List item</us-list-group-item>
    </us-list-group>
```

<script>
export default {
    data() {
        return {
            selectedTab: null
        };
    },
    methods: {
    }
}
</script>