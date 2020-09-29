<template>
    <img class="usx-img" :src="src" :class="[{'fluid':fluid}]"/>
</template>

<script>
export default {
    name: 'us-img',
    props: {
        src: {
            type: String,
            default: null
        },
        alt: {
            type: String,
            default: null
        },
        fluid: {
            type: Boolean,
            default: false
        }     
    }
};
</script>
<style lang="scss">
.usx-img {
    .fluid {
        max-width: 100%;
    }
}
</style>
