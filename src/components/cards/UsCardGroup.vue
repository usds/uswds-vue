<template>
    <div class="usx-card-group">
        <slot :class="colClass"></slot>
    </div>
</template>

<script>
import CoreMixin from '../mixins/CoreMixin';
/**
 * @see https://designsystem.digital.gov/utilities/layout-grid/
 */
export default {
    name: 'us-card-group',
    mixins: [CoreMixin],
    props: {
        fullwidth: {
            type: Boolean,
            default: false
        },
        gutter: {
            type: [Number, String],
            default: null
        },
        sm: {
            type: [Number, String],
            default: null
        },
        md: {
            type: [Number, String],
            default: null
        },
        lg: {
            type: [Number, String],
            default: null
        },
        xl: {
            type: [Number, String],
            default: null
        }
    },
    computed: {
        colClass() {
            let txt = '';

            // Set the fall back to full-width as the USWDS won't do this for us. So if any breakpoint
            // col width is set, we need to set the default. For example, when you go small than mobile-lg
            // and no other breakpoints are active, you can't target any screen width!
            if (this.sm || this.md || this.lg || this.xl) {
                txt += 'grid-col-12 ';
            }

            if (this.sm && this.sizeMap['md']) {
                txt += `${this.sizeMap['sm']}grid-col-${this.sm} `;
            }
            if (this.md && this.sizeMap['md']) {
                txt += `${this.sizeMap['md']}grid-col-${this.md} `;
            }
            if (this.lg && this.sizeMap['lg']) {
                txt += `${this.sizeMap['lg']}grid-col-${this.lg} `;
            }
            if (this.xl && this.sizeMap['xl']) {
                txt += `${this.sizeMap['xl']}grid-col-${this.xl} `;
            }

            return txt;
        }
    }
};
</script>
<style lang="scss">
.usx-card-group {
    
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    .usx-card {
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 0%;
    }
}
</style>