<template>
    <div>
        <validation-observer class="usx-validated-form" ref="observer" v-slot="{ handleSubmit }">

            <h2 class="page-title" v-if="page.title">{{ page.title }}</h2>

            <us-step-indicator :step="pageIndex" :steps="pages" />

            <us-form @submit="handleSubmit(doSubmit)" v-if="formData" size="lg" class="mt-5 pb-3">

                <!-- SUPPORT FOR A SLOT -->
                <span v-if="page.slotId">
                    <slot :name="page.slotId" v-bind:formData="page" />
                </span>

                <span v-else>
                    <span v-for="(item, index) in page.fields" :key="index">
                        
                        <!-- If this item is just an array of other items -->

                        <us-row v-if="Array.isArray(item)">
                            <us-col
                                v-for="subItem in item"
                                :key="subItem.key"
                                :sm="subItem.col && subItem.col.sm ? subItem.col.sm : null"
                                :md="subItem.col && subItem.col.md ? subItem.col.md : null"
                                :lg="subItem.col && subItem.col.lg ? subItem.col.lg : null"
                                :xl="subItem.col && subItem.col.xl ? subItem.col.xl : null"
                            >
                                <us-validated-input :config="item" v-model="formData[item.key]" />
                            </us-col>
                        </us-row>

                        <!-- If this item is of type row with more col info -->

                        <us-row v-else-if="item.type == 'row'">
                            <us-col
                                v-for="subItem in item.fields"
                                :key="subItem.key"
                                :sm="subItem.col && subItem.col.sm ? subItem.col.sm : null"
                                :md="subItem.col && subItem.col.md ? subItem.col.md : null"
                                :lg="subItem.col && subItem.col.lg ? subItem.col.lg : null"
                                :xl="subItem.col && subItem.col.xl ? subItem.col.xl : null"
                            >
                                <us-validated-input :config="subItem" v-model="formData[subItem.key]" />
                            </us-col>
                        </us-row>

                        <!-- Otherwise, simple case -->

                        <us-validated-input :config="item" v-model="formData[item.key]" />

                    </span>
                </span>

                <!-- FORM BUTTON (IF JUST ONE) -->

                <div class="mt-4" align="left">
                    <us-button type="button" variant="primary" class="mr-2" @click="onBack()" :disabled="pageIndex == 0"><i class="fas fa-arrow-circle-left"></i> Back</us-button>

                    <us-button type="submit" variant="primary" class="mr-2" @click="onNext()" v-if="pageIndex < noSteps - 1">
                        Next <i class="fas fa-arrow-circle-right"></i>
                    </us-button>

                    <us-button type="submit" variant="primary" class="mr-2" v-else>Submit</us-button>

                    <us-button type="button" variant="outline-primary" @click="onNext()">Skip</us-button>                    
                </div>
            </us-form>

            <!--
            <pre class="text-muted">{{ formData }}</pre>
            -->
        </validation-observer>
    </div>
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
            sectionIndex: 0,
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
            if (!this.config || !this.config[this.sectionIndex].pages) {
                return null;
            }
            return this.config[this.sectionIndex].pages;
        },
        page: {
            get() {
                if (!this.config || !this.config[this.sectionIndex].pages) {
                    return null;
                }
                return this.config[this.sectionIndex].pages[this.pageIndex];
            },
            set(val) {
                this.config[this.pageIndex][this.sectionIndex] = val;
            }
        },
        noSteps() {
            if (this.config && this.config.length) {
                return this.config.length;
            }
            return 0;
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
