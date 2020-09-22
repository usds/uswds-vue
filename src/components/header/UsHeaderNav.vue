<template>
    <nav aria-label="Primary navigation" class="usa-nav">
        <button class="usa-nav__close">
            <i class="fas fa-times"></i>
        </button>

        <ul class="usa-nav__primary usa-accordion">
            <slot></slot>
        </ul>
    </nav>
</template>

<script>
/**
 * USWDS nav link component
 */
export default {
    name: 'us-header-nav',
    props: {
        variant: {
            type: String,
            default: 'info'
        }
    }
};
</script>
