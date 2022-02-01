<template>
    <div :class="['usx-component', 'container-'+size]" v-bind="$props">
        <slot></slot>
    </div>
</template>

<script>
/**
 * USWDS extendions: container component
 * This provides a centered container content with a width based on current breakpoint
 * @props
 */
export default {
    name: 'us-container',
    props: {
        size: {
            type: String,
            default: 'lg'
        }
    }
};
</script>
