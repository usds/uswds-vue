<template>
    <div class="usx-component usa-navbar">
        <div class="usa-logo" id="basic-logo">
            <em class="usa-logo__text">
                <us-button v-if="to || href" variant="link" :href="href" :to="to" :title="title" :aria-label="title">
                    <slot></slot>
                </us-button>
                <slot v-else></slot>
            </em>
        </div>
        <button class="usa-menu-btn">Menu</button>
    </div>
</template>

<script>
/**
 * USWDS nav link component
 */
export default {
    name: 'us-header-brand',

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
