<template>
    <div class="usx-responsive-info">

        <!--
        <div>
            <div class="resp-org display-none card:display-inline-block mr-1 text-warning">card</div>
            <div class="resp-org display-none card-lg:display-inline-block mr-1 text-warning">card-lg</div>
            <div class="resp-org display-none mobile:display-inline-block mr-1 text-warning">mobile</div>
            <div class="resp-org display-none mobile-lg:display-inline-block mr-1 text-warning">mobile-lg</div>
            <div class="resp-org display-none tablet:display-inline-block mr-1 text-warning">tablet</div>
            <div class="resp-org display-none tablet-lg:display-inline-block mr-1 text-warning">tablet-lg</div>
            <div class="resp-org display-none desktop:display-inline-block mr-1 text-warning">desktop</div>
            <div class="resp-org display-none desktop-lg:display-inline-block mr-1 text-warning">desktop-lg</div>
            <div class="resp-org display-none widescreen:display-inline-block mr-1 text-warning">widescreen</div>
        </div>
        -->

        <div class="resp-info resp-current d-none d-xs-inline-block d-sm-none">xs</div>
        <div class="resp-info resp-current d-none d-sm-inline-block d-md-none">sm</div>
        <div class="resp-info resp-current d-none d-md-inline-block d-lg-none">md</div>
        <div class="resp-info resp-current d-none d-lg-inline-block d-xl-none">lg</div>
        <div class="resp-info resp-current d-none d-xl-inline-block">xl</div>

        <div class="resp-info resp-visible d-none d-xs-inline-block">xs</div>
        <div class="resp-info resp-hidden d-inline-block d-xs-none">xs</div>

        <div class="resp-info resp-visible d-none d-sm-inline-block">sm</div>
        <div class="resp-info resp-hidden d-inline-block d-sm-none">sm</div>

        <div class="resp-info resp-visible d-none d-md-inline-block">md</div>
        <div class="resp-info resp-hidden d-inline-block d-md-none">md</div>

        <div class="resp-info resp-visible d-none d-lg-inline-block">lg</div>
        <div class="resp-info resp-hidden d-inline-block d-lg-none">lg</div>

        <div class="resp-info resp-visible d-none d-xl-inline-block">xl</div>
        <div class="resp-info resp-hidden d-inline-block d-xl-none">xl</div>

        <div class='resp-help text-muted'>
            Current breakpoint is 
            <span class="text-info d-none d-xs-inline-block d-sm-none">XS</span>
            <span class="text-info d-none d-sm-inline-block d-md-none">SM</span>
            <span class="text-info d-none d-md-inline-block d-lg-none">MD</span>
            <span class="text-info d-none d-lg-inline-block d-xl-none">LG</span>
            <span class="text-info d-none d-xl-inline-block">XL</span>
            Width: {{width}}px
        </div>


<!--
        <div class="resp-info d-none d-sm-inline-block mr-1 text-warning">sm</div>
        <div class="resp-info d-none d-md-inline-block mr-1 text-warning">md</div>
        <div class="resp-info d-none d-lg-inline-block mr-1 text-warning">lg</div>
        <div class="resp-info d-none d-xl-inline-block mr-1 text-warning">xl</div>
        -->
    </div>
</template>

<script>
/**
 * @see https://designsystem.digital.gov/utilities/layout-grid/
 */
export default {
    name: 'us-responsive-info',
    data() {
        return {
            width: window.innerWidth
        }
    },
    created() {
        window.addEventListener("resize", this.onResize);
    },
    destroyed() {
        window.removeEventListener("resize", this.onResize);
    },    
    methods: {
        onResize(){
            this.width = window.innerWidth;
        }
    }
};
</script>
<style lang="scss">
.usx-responsive-info {
    
    padding-top: 10px;
    padding-bottom: 10px;

    /*
    background-color: rgba(20, 20, 20, 0.6);
    display: inline-block;
    position: fixed;
    left: 10px;
    top: 10px;
    */
    .resp-info {
        text-transform: uppercase;
        text-align: center;
        padding: 5px;
        font-size: 14px;
        font-weight: bold;
        color: black;
        width: 35px;
        height: 35px;
        line-height: 25px;
        margin-right: 3px;
    }

    .resp-help {
        font-size: 12px;
        margin-top: 5px;
    }

    .resp-visible {
        background-color: #70e17b;
    }

    .resp-current {
        background-color: #00bde3;
    }

    .resp-hidden {
        background: #d3d3d3;
        -webkit-box-shadow: inset 0px 0px 5px #707070;
        -moz-box-shadow: inset 0px 0px 5px #707070;
        box-shadow: inset 0px 0px 5px #707070;
        outline: none;
    }
}
</style>
