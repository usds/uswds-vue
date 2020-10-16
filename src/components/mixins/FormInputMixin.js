import _ from 'lodash';

/**
 * This mixin provides all the basic machinary to support the props that an input field
 * of any type woild expect.
 */
const FormInputMixin = {
    props: {
        value: {
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        valid: {
            type: Boolean,
            default: null
        },
        name: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            divId: null,
            isUpdating: false,
            currentValue: '',
            localName: null,
            localValid: null
        };
    },
    watch: {
        value(newVal, oldVal) {
            if (newVal != oldVal) {
                this.init();
            }
        },
        currentValue(val) {
            if (!this.isUpdating) {
                // allows us to use v-model on our input.
                this.$emit('input', val);
            }
        }
    },
    computed:{
        isValid(){
            return this.localValid;
        }
    },
    created() {},
    mounted() {

        const uuid = _.random(100, 1000000);

        // Create a unique div id
        this.divId = `id-${uuid}`;

        this.localValid = this.valid;

        // If the name isn't given, then create (this helps with screen readers)
        // so we can make sure labels are associated with inputs
        this.localName = this.name;
        if (!this.localName) {
            this.localName = `name-${uuid}`;
        }

        this.__onInputChanged();
    },
    methods: {

        setValid(val){
            this.localValid = val;
        },

        /**
         * Respond to the input (v-model) being changed
         */
        __onInputChanged() {
            try {
                // Note that we're updating, so the watcher won't respond
                this.isUpdating = true;

                // Set the internal value to the v-model value (i.e. copy the
                // data passed in from parent component as the v-model prop to
                // a local value so we can mutated it.)
                this.currentValue = this.value;

                this.$nextTick(() => {
                    this.isUpdating = false;
                });
            } catch (err) {
                console.error('Error in FormInputMixin; ', err);
            }
        }

    }
};

export default FormInputMixin;
