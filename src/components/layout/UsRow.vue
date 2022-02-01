<template>
    <div :class="['usx-component', 'row']" v-bind="$props">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'us-row'    
};
</script>
