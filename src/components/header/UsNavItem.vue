<template>
    <li class="usx-component usa-nav__primary-item">
        <us-button v-if="to || href" variant="link" class="usa-nav__link" :href="href" :to="to" :title="title" :aria-label="title">
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
    }
};
</script>
<style lang="scss">
.bg-dark {
    .usa-nav__link {
        color: lightblue;
    }
}
</style>