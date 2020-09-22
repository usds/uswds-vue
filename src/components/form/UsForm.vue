<template>
    <form class="usa-form" @submit.stop.prevent="doSubmit" novalidate :class="{ 'usa-form--large': size == 'lg' }">
        <slot></slot>
    </form>
</template>

<script>
export default {
    name: 'us-form',
    props: {
        size: {
            type: String,
            default: ''
        }
    },
    methods: {
        async doSubmit() {
            this.$emit('submit');
        }
    }
};
</script>
