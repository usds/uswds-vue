<template>
    <div class="us-responsive-info">
        <div class="resp-info display-none card:display-inline-block mr-1 text-warning">card</div>
        <div class="resp-info display-none card-lg:display-inline-block mr-1 text-warning">card-lg</div>
        <div class="resp-info display-none mobile:display-inline-block mr-1 text-warning">mobile</div>
        <div class="resp-info display-none mobile-lg:display-inline-block mr-1 text-warning">mobile-lg</div>
        <div class="resp-info display-none tablet:display-inline-block mr-1 text-warning">tablet</div>
        <div class="resp-info display-none tablet-lg:display-inline-block mr-1 text-warning">tablet-lg</div>
        <div class="resp-info display-none desktop:display-inline-block mr-1 text-warning">desktop</div>
        <div class="resp-info display-none desktop-lg:display-inline-block mr-1 text-warning">desktop-lg</div>
        <div class="resp-info display-none widescreen:display-inline-block mr-1 text-warning">widescreen</div>
        <hr />
        <div class="resp-info d-none d-sm-inline-block mr-1 text-warning">sm</div>
        <div class="resp-info d-none d-md-inline-block mr-1 text-warning">md</div>
        <div class="resp-info d-none d-lg-inline-block mr-1 text-warning">lg</div>
        <div class="resp-info d-none d-xl-inline-block mr-1 text-warning">xl</div>
    </div>
</template>

<script>
/**
 * @see https://designsystem.digital.gov/utilities/layout-grid/
 */
export default {
    name: 'us-responsive-info'
};
</script>
<style lang="scss">
.us-responsive-info {
    background-color: rgba(20, 20, 20, 0.6);
    display: inline-block;
    position: fixed;
    width: 70px;
    height: auto;
    left: 10px;
    top: 10px;
    padding: 5px;

    .resp-info {
        width: 100%;
        font-size: 12px;
    }
}
</style>
