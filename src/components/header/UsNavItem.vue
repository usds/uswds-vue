<template>
    <li class="usx-component usa-nav__primary-item">
        <us-button v-if="to || href" variant="link" class="usa-nav__link" :class="`navbar-link-${variant}`" :href="href" :to="to" :title="title" :aria-label="title">
            Variant: {{variant}}
            <slot>
                <span>Simple link</span>
            </slot>
        </us-button>            
    </li>
</template>

<script>
/**
 * USWDS nav link component
 */
export default {
    name: 'us-nav-item',

    props: {
        title: {
            type: String,
            default: 'Home'
        },
        href: {
            type: String,
            default: null
        },
        to: {
            type: [String, Object],
            default: null
        }
    },
    data() {
        return {
            variant: null,
        };
    }, 
    mounted(){
        // If no variant is set, inherit from us-header-nav (which in turn will inherit from us-header)
        if (!this.variant && this.$parent.$options && (this.$parent.$options.name == 'us-header' || this.$parent.$options.name == 'us-header-nav')){
            this.variant = this.$parent.variant;
        }
    }
};
</script>
<style lang="scss">
.bg-dark {
    .navbar-link-dark {
        color: light;
    }
}
</style>