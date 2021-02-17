<template>
    <nav aria-label="Primary navigation" class="usx-component usa-nav">
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
    data() {
        return {
            variant: null,
        };
    },    
    mounted(){
        // If no variant is set, inherit from us-header
        if (!this.variant && this.$parent.$options && this.$parent.$options.name == 'us-header'){
            this.variant = this.$parent.variant;
        }
    }
};
</script>
