<template>
    <section class="usx-component usa-banner" aria-label="Official government website" :class="`bg-${variant}`">
        
        <div class="usa-accordion">

            <header class="usa-banner__header" :class="{'usa-banner__header--expanded':isOpen}">
                <div class="usa-banner__inner" :class="`bg-${variant} fluid-${this.fluid}`">
                    <slot>
                        <div class="grid-col-auto">
                            <icon-flag class="mr-1 mt-1" />
                        </div>
                        <div class="grid-col-fill tablet:grid-col-auto">
                            <p class="usa-banner__header-text">An official website of the United States government</p>
                            <p class="usa-banner__header-action" :aria-hidden="!isOpen" @click="isOpen = !isOpen">Here’s how you know</p>
                        </div>
                    </slot>
                    <us-button variant="link" class="usa-banner__button" :aria-expanded="isOpen" aria-controls="gov-banner" @click="isOpen = !isOpen">
                        <span class="usa-banner__button-text">Here’s how you know</span>
                    </us-button>
                </div>
            </header>

            <div class="usa-banner__content usa-accordion__content" id="gov-banner" :class="`bg-${variant}`" v-if="isOpen">
                <div class="grid-row grid-gap-lg">
                    <div class="usa-banner__guidance tablet:grid-col-6">
                        <icon-dot-gov class="mr-1" />
                        <div class="usa-media-block__body">
                            <p>
                                <strong>Official websites use .gov</strong><br />
                                A <strong>.gov</strong>website belongs to an official government organization in the United States.
                            </p>
                        </div>
                    </div>
                    <div class="usa-banner__guidance tablet:grid-col-6">
                        <icon-https class="mr-1" />
                        <div class="usa-media-block__body">
                            <p>
                                <strong>Secure .gov websites use HTTPS</strong><br />
                                A <strong>lock</strong> (<icon-lock />) or <strong>https://</strong> means you’ve safely connected to the .gov website. 
                                Share sensitive information only on official, secure websites.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import IconFlag from '../icons/IconFlag.vue';
import IconDotGov from '../icons/IconDotGov';
import IconHttps from '../icons/IconHttps';
import IconLock from '../icons/IconLock';

/**
 * USWDS component for official US government website header
 */
export default {
    name: 'us-official-header',
    components: {
        IconFlag,
        IconDotGov,
        IconHttps,
        IconLock
    },
    props: {
        variant: {
            type: String,
            default: 'dark'
        },
        fluid: {
            type: String,
            default: 'none'
        }          
    },
    data(){
        return {
            isOpen: false
        }
    },
};
</script>
<style lang="scss">

@import '../../styles/variables.scss';

.usa-banner {
    .usa-banner__button-text,
    .usa-banner__button,
    .usa-banner__button-text {
        color: inherit !important;
        &::after {
            background-color: gray !important;
        }
    }

}

.usa-banner__inner {

    &.fluid-full {
        max-width: 100% !important;
    }

    &.fluid-sm {
        max-width: map-get($grid-breakpoints, 'sm');
    }

    &.fluid-md {
        max-width: map-get($grid-breakpoints, 'md');
    }

    &.fluid-lg {
        max-width: map-get($grid-breakpoints, 'lg');
    }

    &.fluid-xl {
        max-width: map-get($grid-breakpoints, 'xl');
    }
}


</style>