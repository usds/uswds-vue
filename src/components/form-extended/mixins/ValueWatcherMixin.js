/**
 * This mixin provides basic machinary to set, watch and emit changes
 * made to the value (v-model) prop.
 *
 * You can use this on any component that is being passed in a value as
 * the v-model from the parent component.
 *
 * For example, if you create a custom input field, you could use this to
 * provide basic functionality for the v-model directive.
 */
export default {
    props: {
        value: {
            default: ''
        }
    },
    data() {
        return {
            isUpdating: false,
            currentValue: null
        };
    },
    watch: {
        value(newVal, oldVal) {
            if (newVal != oldVal) {
                this.__onValueChanged();
            }
        },
        currentValue(val) {
            if (!this.isUpdating) {
                // allows us to use v-model on our input.
                this.$emit('input', val);
            }
        }
    },
    mounted() {
        this.__onValueChanged();
    },
    methods: {
        __onValueChanged() {
            this.isUpdating = true;
            this.currentValue = this.value;
            this.$nextTick(() => {
                this.isUpdating = false;
            });
        }
    }
};
