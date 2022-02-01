<template>
        
       
        <header class="usx-component usx-banner" aria-label="Official government website" :class="`bg-${variant}`">
            
            <us-container>

                <p class="usx-banner-text">
                    <icon-flag class="usx-flag"/>
                    An official website of the United States government
                    <span class="usx-banner-toggle" @click="isOpen = !isOpen">
                        Here’s how you know
                        <i v-if="!isOpen" class="fas fa-chevron-down"></i>
                        <i v-else class="fas fa-chevron-up"></i>
                    </span>
                </p>
                

                <div class="mt-2" v-if="isOpen">

                    <us-row fluid class="usx-banner-info-container">
                        <us-col>
                            <icon-dot-gov class="usx-banner-icon" />
                            <p class="usx-banner-info-text">
                                <strong>Official websites use {{domain}}</strong><br />
                                A <strong>{{domain}}</strong> website belongs to an official government organization in the United States.
                            </p>
                        </us-col>
                        <us-col>
                            <icon-https class="usx-banner-icon"/>
                            <p class="usx-banner-info-text">
                                <strong>Secure {{domain}} websites use HTTPS</strong><br />
                                A <strong>lock</strong> (<i class="fas fa-lock"></i>) or <strong>https://</strong> means you’ve safely connected to the {{domain}} website. 
                                Share sensitive information only on official, secure websites.
                            </p>
                        </us-col>
                    </us-row>
                </div>
            
            </us-container>

        </header>



</template>

<script>
import IconFlag from '../icons/IconFlag.vue';
import IconDotGov from '../icons/IconDotGov';
import IconHttps from '../icons/IconHttps';
import TranslateMixin from '../../mixins/translation/TranslateMixin';

/**
 * USWDS component for official US government website header
 */
export default {
    name: 'us-official-header',
    components: {
        IconFlag,
        IconDotGov,
        IconHttps
    },
    mixins: [TranslateMixin],        
    props: {
        variant: {
            type: String,
            default: 'dark'
        },
        fluid: {
            type: String,
            default: 'none'
        },
        domain: {
            type: String,
            default: '.gov'
        },
        locale: {
            type: String,
            default: 'en' // 'es', 'es-XX'
        },        
        translations: {
            type: Object,
            default(){
                return {
                    en: {
                        title: 'An official website of the United States government',
                        subTitle: 'Official websites use',
                        home_1: 'website belongs to an official government organization in the United States',
                        link: 'Here’s how you know',
                    },
                    es: {
                        title: 'Un sitio oficial del Gobierno de Estados Unidos',
                        subTitle: 'Los sitios web oficiales usan',
                        home_1: 'pertenece a una organización oficial del Gobierno de Estados Unidos',
                        link: 'Así es como usted puede verificarlo',
                    }  
                }
            }                          
        }
    },
    mounted(){

    },
    data(){
        return {
            isOpen: false
        }
    },
    watch: {
        locale(newVal){
            this.$log('Locale changed to ', newVal);
            this.updateLocale(newVal);
        }
    }   
};
</script>
<style lang="scss">

.usx-banner {

    padding-top: 3px;
    padding-bottom: 3px;

    .usx-banner-icon {
        margin-top: 4px;
        width: 40px;
        height: 40px;
        float: left;
    }

    .fa-lock {
        font-size: 0.9em;
        margin-left: 2px;
        margin-right: 2px;
    }

    .usx-banner-text {
        
        margin-bottom: 0;
        margin-top: 0;
        font-size: .75rem;
        line-height: 1.2rem;

        .usx-flag {
            margin-bottom: 0.1rem;
            margin-right: 0.2rem;
            line-height: inherit;
            height: inherit;
        }

        .usx-banner-toggle {
            color: #adadad;
            text-decoration: underline;
            padding: 0px;
            padding-left: 8px;
            &:hover {
                color: #ccc
            }
        }
    }

    &.bg-dark {
        color: white;
    }

    .usx-banner-info-text {
        padding-left: 50px;
        font-size: .94rem;
    }
}


/*
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

*/
</style>
