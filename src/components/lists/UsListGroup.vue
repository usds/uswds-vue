<template>
    <div class="usx-list-group">
        <slot>
        </slot>
    </div>
</template>

<script>
/**
 * USWDS alert component
 * Supports a default slot for the body content, and a 'header' slot for title.
 * @props
 *    variant (string): info, error|danger, success, warning|warn
 *    size (string): normal (default), small|slim
 *    noIcon (bool): false (default), true
 *    title (string):
 */
export default {
    name: 'us-list-group',
    props: {
        variant: {
            type: String,
            default: 'info'
        }
    },

};
</script>
<style lang="scss">
    .usx-list-group {
        display: flex;
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 0;
        border-radius: .25rem;        
    }
</style>
