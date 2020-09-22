<template>
    <div class="usa-alert m-0" :class="[alertClass, { 'usa-alert--slim': size == 'sm', 'usa-alert--no-icon': noIcon, 'no-border': noBorder }]">
        <div class="usa-alert__body">
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
                case 'primary':
                    variant = 'usa-alert--info bg-light text-dark';
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
    }
};
</script>
<style lang="scss">
.usa-alert {
    &.no-border::before {
        background-color: transparent;
    }
}

/*

@import "../styles/core.scss";
@import "../styles/functions.scss";
@import "../styles/colors.scss";

.usa-alert {

    &.bg-primary::before {
        background-color: map-get($theme-border-colors, 'primary');
    }

    &.bg-secondary::before {
        background-color: map-get($theme-border-colors, 'secondary');
    }

    &.bg-success::before {
        background-color: map-get($theme-border-colors, 'secondary');
    }

    &.bg-info::before {
        background-color: map-get($theme-border-colors, 'info');
    }

    &.bg-warning::before {
        background-color: map-get($theme-border-colors, 'warning');
    }

}
*/
</style>
