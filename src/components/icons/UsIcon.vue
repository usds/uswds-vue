<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 18 18" :aria-labelledby="name" role="presentation">
        <title :id="name" lang="en">{{ name }} icon</title>
        <g :fill="iconColor">
            <icon-https v-if="name == 'https'" />
            <icon-dot-gov v-else-if="name == 'dot-gov'" />
            <icon-flag v-else-if="name == 'flag'" />
            <icon-lock v-else-if="name == 'lock'" />
        </g>
    </svg>
</template>
<script>
import IconFlag from './IconFlag';
import IconDotGov from './IconDotGov';
import IconHttps from './IconHttps';
import IconLock from './IconLock';

export default {
    components: {
        // IconHttps: () => import(/* webpackPrefetch: true */ './IconHttps.vue'),
        IconFlag,
        IconHttps,
        IconLock,
        IconDotGov
    },
    props: {
        name: {
            type: String,
            default: 'box'
        },
        width: {
            type: [Number, String],
            default: 18
        },
        height: {
            type: [Number, String],
            default: 18
        },
        iconColor: {
            type: String,
            default: 'currentColor'
        }
    }
};
</script>
<style scoped>
svg {
    display: inline-block;
    vertical-align: baseline;
    margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>
