<template>
    <div class="usx-component usx-button-group segmented" role="group">
        <slot>
        </slot>
    </div>
</template>

<script>

export default {
    name: 'us-button-group',
    props: {

    }
};
</script>
<style lang="scss">
.usx-button-group {

    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: nowrap;

    &.segmented {

        margin-left: 0;
        margin-right: 0;        

        .usa-button {

            position: relative;
            margin-right: 0;

            &:first-child {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }

            &:last-child {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }

            &:not(:first-child):not(:last-child) {
                border-radius: 0;
                margin-right: -1px;
                margin-left: -1px;
            }

        }

        :not(:first-child):not(:last-child)>.usa-button {
            border-radius: 0;
            margin-right: -1px;
            margin-left: -1px;
        }

    }

}
</style>
