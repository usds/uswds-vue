<template>
    <span class="usa-tag radius-pill" :class="[`bg-${variant}`]">
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: 'us-pill',
    props: {
        variant: {
            type: String,
            default: 'info'
        },
        size: {
            type: String,
            default: ''
        }
    }
};
</script>
