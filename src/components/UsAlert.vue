<template>
    <div v-if="showAlert" class="usa-alert m-0 usx-alert" :class="[alertClass, { 'usa-alert--slim': size == 'sm', 'usa-alert--no-icon': noIcon, 'no-border': noBorder }]">
        <div class="usa-alert__body">
            <button v-if="dismissible" type="button" aria-label="Close" class="close" @click="showAlert = false">×</button>
            <slot name="header">
                <h3 class="usa-alert__heading" v-if="title">{{ title }}</h3>
            </slot>
            <p class="usa-alert__text">
                <slot name="default">
                    <p class="usa-alert__text">Lorem ipsum dolor sit amet, <a href="javascript:void(0);">consectetur adipiscing</a> elit, sed do eiusmod.</p>
                </slot>
            </p>
        </div>
    </div>
</template>

<script>

import {isNumber} from 'lodash';

/**
 * USWDS alert component
 * Supports a default slot for the body content, and a 'header' slot for title.
 * @props
 *    variant (string): info, error|danger, success, warning|warn
 *    size (string): normal (default), small|slim
 *    noIcon (bool): false (default), true
 *    title (string):
 */
export default {
    name: 'us-alert',
    props: {
        variant: {
            type: String,
            default: 'info'
        },
        noIcon: {
            type: Boolean,
            default: false
        },
        noBorder: {
            type: Boolean,
            default: false
        },
        dismissible: {
            type: Boolean,
            default: false
        },   
        show: {
            type: Number,
            default: null
        },               
        // Size; normal, small (aka slim)
        size: {
            type: String,
            default: 'lg'
        },
        title: {
            type: String,
            default: null
        }
    },
    data(){
        return {
            showAlert: true
        }
    },
    computed: {
        alertClass() {
            let variant = '';

            switch (this.variant) {
                case 'error':
                case 'danger':
                    variant = 'usa-alert--error';
                    break;
                case 'success':
                    variant = 'usa-alert--success';
                    break;
                case 'warn':
                case 'warning':
                    variant = 'usa-alert--warning';
                    break;
                case 'info':
                    variant = 'usa-alert--info';
                    break;
                default:
                    variant = 'usa-alert--info';
                    break;
            }

            if (this.size == 'small' || this.size == 'slim') {
                variant += ' usa-alert--slim';
            }

            if (this.noIcon) {
                variant += ' usa-alert--no-icon';
            }

            return variant;
        }
    },
    mounted(){
        console.log('mounted')
        if (this.show && isNumber(this.show)){
            setTimeout(()=>{
                this.showAlert = false;
            }, this.show*1000)
        }
    },
    updated(){
        console.log('updated')
        //this.showAlert = true;
    }
};
</script>
<style lang="scss">

@import "../styles/uswds-vue.scss";

$svg-info-icon: '<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126" viewBox="0 0 126 126"><path fill="rgb(200,200,200)" d="M117.18,31.592 C111.585,22.006 103.995,14.416 94.409,8.821 C84.821,3.226 74.354,0.429 63.001,0.429 C51.649,0.429 41.179,3.226 31.593,8.821 C22.006,14.415 14.416,22.005 8.821,31.592 C3.225,41.179 0.428,51.649 0.428,63 C0.428,74.352 3.226,84.82 8.82,94.408 C14.415,103.993 22.005,111.584 31.592,117.179 C41.179,122.774 51.648,125.571 63,125.571 C74.352,125.571 84.822,122.774 94.408,117.179 C103.994,111.585 111.584,103.994 117.179,94.408 C122.773,84.821 125.57,74.351 125.57,63 C125.57,51.648 122.773,41.178 117.18,31.592 Z M52.572,16.071 C52.572,15.31 52.816,14.686 53.305,14.197 C53.794,13.709 54.419,13.464 55.179,13.464 L70.823,13.464 C71.583,13.464 72.208,13.709 72.695,14.197 C73.183,14.686 73.429,15.31 73.429,16.071 L73.429,29.107 C73.429,29.867 73.183,30.492 72.695,30.98 C72.208,31.469 71.583,31.713 70.823,31.713 L55.179,31.713 C54.419,31.713 53.794,31.469 53.305,30.98 C52.816,30.492 52.572,29.867 52.572,29.107 L52.572,16.071 Z M83.857,102.107 C83.857,102.867 83.611,103.492 83.124,103.979 C82.637,104.468 82.012,104.712 81.25,104.712 L44.75,104.712 C43.989,104.712 43.365,104.468 42.876,103.979 C42.387,103.491 42.143,102.866 42.143,102.106 L42.143,89.07 C42.143,88.308 42.387,87.685 42.876,87.196 C43.365,86.708 43.99,86.463 44.75,86.463 L52.572,86.463 L52.572,60.392 L44.75,60.392 C43.989,60.392 43.365,60.148 42.876,59.659 C42.387,59.171 42.143,58.546 42.143,57.785 L42.143,44.75 C42.143,43.989 42.387,43.365 42.876,42.876 C43.365,42.387 43.99,42.143 44.75,42.143 L70.823,42.143 C71.583,42.143 72.208,42.387 72.695,42.876 C73.183,43.365 73.429,43.989 73.429,44.75 L73.429,86.464 L81.249,86.464 C82.01,86.464 82.635,86.709 83.123,87.197 C83.61,87.685 83.856,88.31 83.856,89.071 L83.856,102.107 L83.857,102.107 Z"/></svg>';

.usx-alert {
    
    .usa-alert__body {
        width: 100%;
        display: block;
    }

    &.no-border::before {
        background-color: transparent;
    }

    &.bg-dark {
        &.usa-alert--info {
            background-image: url('data:image/svg+xml,#{$svg-info-icon}'), linear-gradient(transparent, transparent) !important;
            &::before {
                background-color: gray;
            }
        }
    }

    &.bg-light {
        &.usa-alert--info {
            &::before {
                background-color: usx-variant-bg('light');
            }
        }
    }

    &.bg-primary {
        &.usa-alert--info {
            background-image: url('data:image/svg+xml,#{$svg-info-icon}'), linear-gradient(transparent, transparent) !important;
            &::before {
                background-color: usx-variant-bg('primary');
            }
        }
    }

    &.bg-secondary {
        &.usa-alert--info {
            &::before {
                background-color: usx-variant-bg('secondary');
            }
        }
    }

    button.close {
        cursor: pointer;
        padding: 0;
        background-color: transparent;
        border: 0;
        float: right;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1;
        color: #000;
        text-shadow: 0 1px 0 #fff;
        opacity: .5;
    }

}
</style>
