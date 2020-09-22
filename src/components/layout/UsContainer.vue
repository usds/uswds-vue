<template>
    <div class="grid-container" :class="`fluid-${this.fluid}`">
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
        fluid: {
            type: String,
            default: 'full'
        }
    }
};
</script>
<style lang="scss">
@import '../../styles/variables.scss';

// Layer in some styles to help standardize
.grid-container {
    
    &.fluid {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    &.fluid-full {
        max-width: 100% !important;
    }

    &.fluid-sm {
        max-width: map-get($grid-breakpoints, 'sm');
    }

    &.fluid-md {
        max-width: map-get($grid-breakpoints, 'md');
    }

    &.fluid-lg {
        max-width: map-get($grid-breakpoints, 'lg');
    }

    &.fluid-xl {
        max-width: map-get($grid-breakpoints, 'xl');
    }
}
</style>
