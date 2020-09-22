<template>
    <button
        class="usa-button"
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
                txt += `width-full tablet:width-auto desktop:width-auto desktop-lg:width-auto`;
            } else if (this.block == 'md') {
                txt += `width-auto tablet:width-full`;
            } else if (this.block == 'lg') {
                txt += `width-auto desktop:width-full`;
            } else if (this.block == 'xl') {
                txt += `width-auto desktop-lg:width-full`;
            } else if (this.block) {
                txt += 'width-full';
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

            switch (this.variant) {
                case 'link':
                    txt += 'usa-button--unstyled';
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
@import '../styles/core.scss';
@import '../styles/variables.scss';
@import '../styles/functions.scss';
@import '../styles/colors.scss';

.usa-button {
    &.usx-btn-success {
        font-weight: bold;
        border-color: map-get($theme-border-colors, 'success');
        background-color: map-get($theme-colors, 'success');
        color: white;
        &:hover {
            background-color: darken(map-get($theme-colors, 'success'), 10%);
        }
    }

    &.usx-btn-warning {
        font-weight: bold;
        border-color: map-get($theme-border-colors, 'warning');
        background-color: map-get($theme-colors, 'warning');
        color: white;
        &:hover {
            background-color: darken(map-get($theme-colors, 'warning'), 10%);
        }
    }

    &.usx-btn-outline {
        -moz-osx-font-smoothing: auto;
        -webkit-font-smoothing: subpixel-antialiased;
        background-color: transparent;
        //box-shadow: inset 0 0 0 2px #005ea2;
        //color: #005ea2;
    }

    &.usx-btn-outline-info {
        color: map-get($theme-colors, 'info');
        box-shadow: inset 0 0 0 2px map-get($theme-colors, 'info') !important;
    }

    &.usx-btn-outline-secondary {
        color: map-get($theme-colors, 'secondary');
        box-shadow: inset 0 0 0 2px map-get($theme-colors, 'secondary') !important;
    }

    &.usx-btn-outline-primary {
        color: map-get($theme-colors, 'primary');
        box-shadow: inset 0 0 0 2px map-get($theme-colors, 'primary') !important;
    }

    &.usx-btn-outline-danger {
        color: map-get($theme-colors, 'danger');
        box-shadow: inset 0 0 0 2px map-get($theme-colors, 'indangerfo') !important;
    }

    &.usx-btn-outline-warning {
        color: map-get($theme-colors, 'warning');
        box-shadow: inset 0 0 0 2px map-get($theme-colors, 'warning') !important;
    }

    &.usx-btn-outline-success {
        color: map-get($theme-colors, 'success');
        box-shadow: inset 0 0 0 2px map-get($theme-colors, 'success') !important;
    }
}
</style>
