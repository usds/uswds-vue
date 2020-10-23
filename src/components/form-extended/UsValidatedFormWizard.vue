<template>
    <us-validated-form :config="page" :title="page.title" :step="pageIndex" :stepTitles="pageTitles"/>
</template>

<script>
import UsValidatedInput from './UsValidatedInput';

export default {
    name: 'us-validated-form-wizard',
    components: { UsValidatedInput },
    props: {
        value: {
            default: null
        },
        title: {
            type: String,
            default: 'Form Title'
        },
        config: {
            type: [Array, Object],
            default: null
        }
    },
    data() {
        return {
            pageIndex: 0,
            formData: null,
            error: null
        };
    },
    mounted() {
        this.init();
    },
    computed: {
        pages() {
            if (!this.config) {
                return null;
            }
            return this.config;
        },
        page: {
            get() {
                if (!this.config) {
                    return null;
                }
                return this.config[this.pageIndex];
            },
            set(val) {
                this.config[this.pageIndex] = val;
            }
        },
        noSteps() {
            if (this.config && this.config.length) {
                return this.config.length;
            }
            return 0;
        },
        pageTitles(){
            return _.map(this.pages, 'title');
        }
    },
    methods: {

        init() {
            this.formData = this.value;
            if (!this.formData) {
                this.formData = {};
            }
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        onBack() {
            this.pageIndex -= 1;
            this.$emit('onBack');
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        onNext() {
            this.pageIndex += 1;
            this.$emit('onNext');
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        onCancel() {
            this.$emit('onCancel');
        },

        // ///////////////////////////////////////////////////////////////////////////////////////

        async doSubmit() {
            this.$emit('input', this.formData);
            this.$nextTick(() => {
                this.$emit('onSubmit', this.formData);
            });
        }
    }
};
</script>
<style lang="scss">
.validated-form {
    padding-bottom: 40px;

    .page-title {
        font-size: 36px;
        letter-spacing: 0;
        line-height: 44px;
    }

    .page-sub-title {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 0;
        line-height: 25px;
    }
}
</style>
