<template>
    <span>
        <slot name="heading">
            <h2 class="usa-accordion__heading" :class="`bg-${variant}`">
                <button class="usa-accordion__button" :aria-expanded="expanded" :aria-controls="divId">{{ title }}</button>
            </h2>
        </slot>

        <div :id="divId" class="usa-accordion__content">
            <slot>
                <p>
                    Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the
                    press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
                </p>
            </slot>
        </div>
    </span>
</template>

<script>
import UtilsMixin from '../mixins/UtilsMixin';
/**
 * USWDS accordion item component
 * Supports a default slot for the body content, and a 'header' slot for title.
 * @props
 *    variant (string): info, error|danger, success, warning|warn
 *    bordered (boolean): (defaults to false) gives the content a border
 *    multiSelect (boolean): (defaults to false) allows multiple slots to be open at once
 *    title (string):
 */
export default {
    name: 'us-accordion-item',
    mixins: [UtilsMixin],
    props: {
        variant: {
            type: String,
            default: 'info'
        },
        expanded: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: 'First Amendment'
        }
    }
};
</script>
