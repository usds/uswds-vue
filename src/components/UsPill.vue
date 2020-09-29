<template>
    <us-tag pill>
        <slot></slot>
    </us-tag>
</template>

<script>
export default {
    name: 'us-pill',
    props: {
        variant: {
            type: String,
            default: 'info'
        }
    }
};
</script>
