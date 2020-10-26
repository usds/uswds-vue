<template>

    <us-form @submit="handleSubmit(doSubmit)" v-if="formData" size="lg" class="mt-5 pb-3">

        <h2 class="page-title" v-if="title">{{ title }}</h2>

        <span v-for="(item, index) in config" :key="index">
            
            <!-- If this item is just an array of other items -->

            <us-row v-if="Array.isArray(item)" gutter="6">
                <us-col                            
                    v-for="subItem in item"
                    :key="subItem.key"
                    :sm="subItem.col && subItem.col.sm ? subItem.col.sm : null"
                    :md="subItem.col && subItem.col.md ? subItem.col.md : null"
                    :lg="subItem.col && subItem.col.lg ? subItem.col.lg : null"
                    :xl="subItem.col && subItem.col.xl ? subItem.col.xl : null"
                >
                    <us-validated-input :config="subItem" v-model="formData[subItem.key]" />
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

            <us-validated-input v-else :config="item" v-model="formData[item.key]" />

        </span>

        <!-- FORM BUTTON (IF JUST ONE) -->

        <div class="mt-4" align="left">
            
            <!--
            <us-button 
                type="button" 
                variant="primary" 
                class="mr-2" 
                @click="onBack()" 
                :disabled="pageIndex == 0">
                <i class="fas fa-arrow-circle-left"></i> Back
            </us-button>

            <us-button type="submit" variant="primary" class="mr-2" @click="onNext()" v-if="pageIndex < noSteps - 1">
                Next <i class="fas fa-arrow-circle-right"></i>
            </us-button>

            <us-button type="button" variant="outline-primary" @click="onNext()">Skip</us-button>                    
            -->

            <slot>
                <us-button type="submit" variant="primary" class="mr-2">Submit</us-button>
            </slot>

        </div>
    </us-form>

</template>

<script>
import UsValidatedInput from './UsValidatedInput';

export default {
    name: 'us-validated-form',
    components: { UsValidatedInput },
    props: {
        value: {
            default: null
        },
        title: {
            type: String,
            default: null
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
    methods: {

        init() {
            this.formData = this.value;
            if (!this.formData) {
                this.formData = {};
            }
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
.usx-validated-form {
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
