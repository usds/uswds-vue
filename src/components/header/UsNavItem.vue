<template>
    <li class="usx-component usa-nav__primary-item">
        <a class="usa-nav__link" href="javascript:void(0)">

            <us-button v-if="to || href" variant="link" class="m-0 p-0" :href="href" :to="to" :title="title" :aria-label="title">
                <slot>
                    <span>Simple link</span>
                </slot>
            </us-button>
            
        </a>
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
