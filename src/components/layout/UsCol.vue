<template>
    <div :class="['usx-component', 'col']" v-bind="$props">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'us-col'    
};
</script>
