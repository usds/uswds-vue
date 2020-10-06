<template>
    <div class="usx-tabs">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'us-tabs'
};
</script>
<style lang="scss">
.usx-tabs {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
</style>
