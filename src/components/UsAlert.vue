<template>
    <div 
        class="usx-component alert d-flex"
        :class="['alert-'+variant, 'alert-'+size, (size=='lg') ? 'align-items-start' : 'align-items-center']"
        role="alert" 
        v-if="isShown">

        <slot name="title">
            <h4 v-if="title">
                <i v-if="variant=='warning'" class="fas fa-exclamation-triangle"></i>
                <i v-else-if="variant=='danger'" class="fas fa-exclamation-circle"></i>
                <i v-else-if="variant=='success'" class="fas fa-check-circle"></i>
                <i v-else class="fas fa-info-circle"></i>
            </h4>
            <h4 v-else class="p-0 m-0">{{title}}</h4>
        </slot>


        <div v-if="!title">
            <i v-if="variant=='warning'" class="fas fa-exclamation-triangle"></i>
            <i v-else-if="variant=='danger'" class="fas fa-exclamation-circle"></i>
            <i v-else-if="variant=='success'" class="fas fa-check-circle"></i>
            <i v-else class="fas fa-info-circle"></i>
        </div>

        <div class="flex-grow-1">
            <slot name="default"/>
        </div>

        <div class="btn btn-link p-0 m-0" data-bs-dismiss="alert" aria-label="Close" @click="isShown = false" v-if="dismissible">
            <i class="fas fa-times align-top"></i>
        </div>

    </div>

</template>

<script>


export default {
    name: 'us-alert',
    props: {
        size: {
            type: String,
            default: 'lg'
        },         
        title: {
            type: String,
            default: null
        },        
        variant: {
            type: String,
            default: 'info'
        },
        fade: {
            type: Boolean,
            default: false
        },  
        noIcon: {
            type: Boolean,
            default: false
        },                
        show: {
            type: [Boolean, Number, String],
            default: false
        },
        dismissible: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            isShown: false
        }
    },
    watch: {
        value(newVal) {
            this.isShown = newVal;
        }
    },
    mounted() {
        this.isShown = this.show;
    },    
};
</script>
<style lang="scss">

.usx-component.alert {

    .btn-link {
        text-decoration: none;
        color: rgba(20,20,20,0.5);
        &:hover {
            color: rgba(20,20,20,0.8);
        }
    }

    &.alert-sm {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    .fas, .far, .fal, .fad {
        line-height: 1.1em;
        font-size: 1.1em;
        padding-right: 7px;
        display: block;
    }
    
    border-radius: 0px !important; 
    border-width: 0px !important;
    border-left-width: .5rem  !important;
    border-left-style: solid  !important;
    //border-left-color: red;
    //background-color: rgba($info, .1) !important;

    &.alert-info {
        background-color: #e7f6f8 !important; 
        border-left-color: #00bde3 !important;    
        color: #1b1b1b !important;     
    }

    &.alert-primary {
        border-left-color: #00bde3 !important;    
        color: #1b1b1b !important;     
    }    

    &.alert-warning {
        background-color: #faf3d1 !important; 
        border-left-color: #ffbe2e !important; 
        color: #1b1b1b !important; 
    }

    &.alert-success {
        background-color: #ecf3ec !important; 
        border-left-color: #00a91c !important; 
        color: #1b1b1b !important; 
    }

    &.alert-error, &.alert-danger {
        background-color: #f4e3db !important; 
        border-left-color: #d54309 !important; 
        color: #1b1b1b !important; 
    }

}



</style>
