<template>
    <div class="usx-component grid-col" :class="colClass">
        <slot></slot>
    </div>
</template>

<script>
import CoreMixin from '../mixins/CoreMixin';

/*
        :class="{
            'grid-container': !fullwidth,
            'grid-container-mobile' : (target == 'mobile' && size != 'lg'),
            'grid-container-mobile-lg' : (target == 'mobile' && size != 'lg'),
            'grid-container-tablet-lg': (size == 'lg' && target = 'tablet'),
            'grid-container-widescreen' size == 'lg':
        }"

Rows: Columns must have a grid-row as a parent.
Columns: grid-col-[1-12] indicates the number of columns the item spans out of a possible 12 per row. So, if you want three equal-width columns across, use grid-col-4 for each item.
Additional functionality
Equal-width columns: With flexbox, grid columns without a specified width will display as equal-width columns. For example, four instances of grid-col will display as one-quarter-width columns across all sizes. See the auto-layout columns section for more examples.
Gutters: Rows and columns don’t have any gutters by default, but they can be added by adding grid-gap-sm, grid-gap, or grid-gap-lg at the row level. See gutters for more info.
Media queries: Grid breakpoints are based on minimum width media queries, meaning they apply to that specific width and all greater widths (e.g., tablet:col-4 applies to tablet, desktop, and widescreen devices, but not at mobile-lg or any width below the tablet breakpoint). See responsive variants for full list.
Sass mixins: You can use predefined grid classes (like grid-col-4) for presentational markup or Sass mixins for more semantic markup.


card
card-lg
mobile
mobile-lg
tablet
tablet-lg
desktop
desktop-lg
widescreen
*/
/**
 * @see https://designsystem.digital.gov/utilities/layout-grid/
 */
export default {
    name: 'us-col',
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

            // Setup so that if only, for example, md width is set then all the sizes bigger than
            // md should inherit md for their size.
            /*
            let sizes = {'sm':this.sm,'md':this.md,'lg':this.lg,'xl':this.xl};
            let lastSz = null;

            for (let i in sizes){
                if (sizes[i]){
                    lastSz = sizes[i];
                }
                sizes[i] = (lastSz) ? lastSz : null;
            }
            */

            const processSz = (size) => {
                
                let propVal = this[size];
                
                if (!propVal || !this.sizeMap[size]){
                    return '';
                }

                if (propVal == 'auto'){
                    return `${this.sizeMap[size]}grid-col-auto `
                }
                else if (propVal == 'fill'){
                    return `${this.sizeMap[size]}grid-col-fill `
                }                
                else {
                    return `${this.sizeMap[size]}grid-col-${propVal} `;
                }

                
            }

            txt += processSz('sm');
            txt += processSz('md');
            txt += processSz('lg');
            txt += processSz('xl');

            /*

            // Supports; fill, auto, [1-12]
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
            */

            return txt;
        }
    }
};
</script>
