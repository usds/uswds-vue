<template>
    <div class="usa-accordion" :class="[`bg-${variant}`, { 'usa-accordion--bordered': bordered }]" :aria-multiselectable="multiSelect">
        <slot></slot>
    </div>
</template>

<script>
/**
 * USWDS accordion component
 * Supports a default slot for the body content, and a 'header' slot for title.
 * @props
 *    variant (string): info, error|danger, success, warning|warn
 *    bordered (boolean): (defaults to false) gives the content a border
 *    multiSelect (boolean): (defaults to false) allows multiple slots to be open at once
 *    title (string):
 */
export default {
    name: 'us-accordion',
    props: {
        variant: {
            type: String,
            default: 'info'
        },
        bordered: {
            type: Boolean,
            default: false
        },
        multiSelect: {
            type: Boolean,
            default: false
        }
    }
};
</script>
