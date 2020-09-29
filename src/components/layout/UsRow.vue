<template>
    <div class="grid-row" :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>
import CoreMixin from '../mixins/CoreMixin';

/**
 * @see https://designsystem.digital.gov/utilities/layout-grid/
 */
export default {
    name: 'us-row',
    mixins: [CoreMixin],
    props: {
        gutter: {
            type: [Number, String],
            default: 'md'
        }
    },
    computed: {
        rowClass() {
            let txt = '';

            // Gutter: supports; sm, lg, [1-6], md-sm, md-[1-6], etc.

            if (this.gutter) {
                // Get the responsive size target (sm,md,lg,xl)
                let target = this.gutter.slice(0, 3);
                let size = this.gutter;

                switch (target) {
                    case 'sm-':
                        target = this.sizeMap['sm'];
                        size = this.gutter.slice(3);
                        break;
                    case 'md-':
                        target = this.sizeMap['md'];
                        size = this.gutter.slice(3);
                        break;
                    case 'lg-':
                        target = this.sizeMap['lg'];
                        size = this.gutter.slice(3);
                        break;
                    case 'xl-':
                        target = this.sizeMap['xl'];
                        size = this.gutter.slice(3);
                        break;
                    default:
                        target = '';
                }

                txt = `${target}grid-gap-${size}`;
            }

            return txt;
        }
    }
};
</script>
