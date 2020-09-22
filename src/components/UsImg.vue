<template>
    <img :src="value" />
</template>

<script>
export default {
    name: 'us-img',
    props: ['alt', 'value', 'title']
};
</script>
