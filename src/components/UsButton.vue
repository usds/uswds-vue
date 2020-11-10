<template>
    <button
        class="usa-button "
        @click="onClick()"
        :type="type"
        :aria-label="ariaLabel"
        :aria-expanded="ariaExpanded"
        :aria-controls="ariaControls"
        :title="title"
        :disabled="disabled || isLoading"
        :class="[
            buttonClass,
            {
                'link': variant == 'link',                
                'no-focus': noFocus,
                'usa-button--big': size == 'lg',
                'display-block': block
            }
        ]"
    >
        <slot name="default"> Button </slot>
        <i class="fas fa-spinner fa-spin ml-1" v-if="isLoading"></i>
    </button>
</template>

<script>
/**
 * USWDS button component
 * Supports a default slot for the body content, and a 'header' slot for title.
 * @props
 *    variant (string): info, error|danger, success, warning|warn
 *    size (string): normal (default), small|slim
 *    noIcon (bool): false (default), true
 *    title (string):
 */
export default {
    name: 'us-button',
    props: {
        variant: {
            type: String,
            default: 'info'
        },
        block: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: 'button'
        },
        title: {
            type: String,
            default: ''
        },
        // Size; lg
        size: {
            type: String,
            default: ''
        },
        ariaExpanded: {
            type: Boolean,
            default: false
        },
        ariaControls: {
            type: String,
            default: ''
        },
        ariaLabel: {
            type: String,
            default: ''
        },
        href: {
            type: String,
            default: null
        },
        target: {
            type: String,
            default: '_self'
        },
        to: {
            type: [String, Object],
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        noFocus: {
            type: Boolean,
            default: true
        },        
        isLoading: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        buttonClass() {
            let txt = '';

            // Deal with block sizing (setting as full width)
            if (this.block == 'sm') {
                txt += `width-full tablet:width-auto desktop:width-auto desktop-lg:width-auto `;
            } else if (this.block == 'md') {
                txt += `width-auto tablet:width-full `;
            } else if (this.block == 'lg') {
                txt += `width-auto desktop:width-full `;
            } else if (this.block == 'xl') {
                txt += `width-auto desktop-lg:width-full `;
            } else if (this.block) {
                txt += 'width-full ';
            }

            /*
            'usa-button--default': variant == 'primary',
            'usa-button--secondary': variant == 'danger',
            'usa-button--accent': variant == 'info',
            'usa-button--base': variant == 'secondary',
            'usa-button--outline': variant == 'outline',
            'usa-button--inverse': variant == 'inverse',
            'usa-button--unstyled': variant == 'link'

            */

           if (this.variant.search('outline') !== -1){
               //txt += `usx-outline-bg border-${this.variant} text-${this.variant} `;
               txt += `usa-button--outline usx-btn-${this.variant}`;
           }
           else if (this.variant != 'link') {
               txt += `bg-${this.variant} usx-btn-${this.variant}`;
           }
           else if (this.variant == 'link'){
                txt += 'usa-button--unstyled ';
           }
           
                /*
            switch (this.variant) {

                case 'link':
                    break;

                case 'primary':
                    txt += 'usa-button--default ';
                    break;
                case 'secondary':
                    txt += 'usa-button--base ';
                    break;
                case 'error':
                case 'danger':
                    txt += 'usa-button--secondary ';
                    break;
                case 'success':
                    txt += 'usx-btn-success ';
                    break;
                case 'warn':
                case 'warning':
                    txt += 'usx-btn-warning ';
                    break;
                case 'info':
                    txt += 'usa-button--accent-cool ';
                    break;

                case 'inverse':
                    txt += 'usa-button--outline usa-button--inverse';
                    break;

                case 'outline-primary':
                    txt += 'usa-button--outline usx-btn-outline-primary ';
                    break;
                case 'outline-secondary':
                    txt += 'usx-btn-outline usx-btn-outline-secondary ';
                    break;
                case 'outline-error':
                case 'outline-danger':
                    txt += 'usx-btn-outline usx-btn-outline-danger ';
                    break;
                case 'outline-success':
                    txt += 'usx-btn-outline usx-btn-outline-success ';
                    break;
                case 'outline-warn':
                case 'outline-warning':
                    txt += 'usx-btn-outline usx-btn-outline-warning ';
                    break;
                case 'outline-info':
                    txt += 'usx-btn-outline usx-btn-outline-info ';
                    break;

                default:
                    txt += 'usa-button--base ';
            }
                */

            return txt;
        }
    },
    methods: {
        onClick() {
            // If this is a link, go to that link
            if (this.href) {
                if (this.target == '_self') {
                    window.location.replace(this.href);
                } else {
                    window.open(this.href, this.target);
                }
            }
            // if there is a 'to' prop, and vue-router is being used, go to the route
            else if (this.to && this.$router) {
                this.$router.push(this.to);
            } else {
                // Bubble up the button click
                this.$emit('click');
            }
        }
    }
};
</script>
<style lang="scss">
@import "../styles/uswds-vue.scss";

.usa-button {

    /*
    &.usx-btn-success {
        font-weight: bold;
        border-color: usx-variant-border('success');
        background-color: usx-variant-bg('warning');
        color: white;
        &:hover {
            background-color: darken(usx-variant-color('success'), 10%);
        }
    }

    &.usx-btn-warning {
        font-weight: bold;
        border-color: usx-variant-border('warning');
        background-color: usx-variant-bg('warning');
        color: white;
        &:hover {
            background-color: darken(usx-variant-color('warning'), 10%);
        }
    }

    &.usx-btn-outline {
        -moz-osx-font-smoothing: auto;
        -webkit-font-smoothing: subpixel-antialiased;
        background-color: transparent;
        //box-shadow: inset 0 0 0 2px #005ea2;
        //color: #005ea2;
    }
*/

    @each $variant, $token in $theme-colors {
        $color: usx-get-color-from-variant($variant);
        $colorDark:  darken($color, 15%);
        &.usx-btn-#{$variant} {
            &:hover {
                background-color: $color !important;
                color: choose-contrast-color($color) !important;                
            }
        }
        &.usx-btn-outline-#{$variant} {
            color: $color;
            box-shadow: inset 0 0 0 2px $color!important;
            &:hover {
                color: $colorDark;
                box-shadow: inset 0 0 0 2px $colorDark !important;
            }
        }
    }

    &.no-focus {
        outline: none !important;
    }
}
</style>
