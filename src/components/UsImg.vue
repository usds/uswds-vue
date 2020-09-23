<template>
    <img :src="src" />
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
        }        
    }
};
</script>
