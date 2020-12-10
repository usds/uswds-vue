<template>
    <div class="usx-modal" :class="{'open fade-in-background':isOpen}" id="dialog1" aria-labelledby="dialog1_label" aria-modal="true">
        <us-card class="usx-modal-container" :class="[`modal-${size}`]">
            <us-card-header>
                <i class="close-btn far fa-times-circle float-right" @click="onCancel"></i>
                <slot name="title">{{title}}</slot>
            </us-card-header>
            <us-card-body>
                <slot name="default"/>
            </us-card-body>
            <us-card-footer>
                <slot name="buttons" v-bind="{onAffirmative, onCancel}">
                    <div align="right">
                        <us-button variant="outline-primary" @click="onCancel">{{btnCancel}}</us-button>
                        <us-button variant="primary" @click="onAffirmative">{{btnOk}}</us-button>
                    </div>
                </slot>
            </us-card-footer>
        </us-card>
    </div>
</template>

<script>
import Vue from 'vue';


export default {
    name: 'us-modal',
    props: {
        value: {
            default: false
        },        
        title: {
            type: String,
            default: 'Confirm'
        },
        btnOk: {
            type: String,
            default: 'Ok'
        },
        btnCancel: {
            type: String,
            default: 'Cancel'
        },      
        size: {
            type: String,
            default: 'md'
        }          
    },
    data(){
        return {
            isOpen: true
        }
    },
    watch: {
        value() {
            this.isOpen = this.value;
        }
    },
    mounted() {
        this.isOpen = this.value;
    },
    methods: {
        onAffirmative(){
            this.$emit('ok');
            this.close();
        },
        onCancel(){
            this.$emit('cancel');
            this.close();
        },
        close(){
            this.isOpen = false;
            this.$emit('input', this.isOpen);
        }
    }
};
</script>
<style lang="scss">

.usx-modal {
    
    .close-btn {
        margin-top: -15px;
        margin-right: -12px;
        font-size: 18px;
        color: rgb(156, 156, 156);
        &:hover {
            cursor: pointer;
            color: rgb(95, 95, 95);
        }
    }

    &.fade-in-background {
        opacity: 1;
        animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 0.1s;
    }

    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    z-index: 1050;
    display: none;
    width: 0;
    height: 0;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
        
    &.open {     
        width: 100vw;
        height: 100vh;           
        display: block;
    }

    .usa-card__container {
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.12), 0 15px 12px rgba(0, 0, 0, 0.22);
        overflow-x: hidden;
        overflow-y: auto;        
    }

    .usx-modal-container {    
        width: auto;
        margin-left: auto;
        margin-right: auto;
        max-width: 620px;

        .modal-xl {
            max-width: 1140px;
        }    

    }


    @media (min-width: 992px) {
        .usx-modal-container {
            &.modal-lg, &.modal-xl {
                max-width: 800px;
            }
        }
    }

    @media (min-width: 576px) {

        .usx-modal-container {

            &.modal-sm {
                max-width: 300px;
            }

            max-width: 500px;
            margin-top: 1.75rem;

            &.slide-in {
                animation-name: reveal;
                animation-iteration-count: 1;
                animation-timing-function: ease-in;
                animation-duration: 0.3s;
            }

            &.fade-in {
                opacity: 1;
                animation-name: fadeInOpacity;
                animation-iteration-count: 1;
                animation-timing-function: ease-in;
                animation-duration: 0.5s;
            }


            @keyframes reveal {
                from { margin-top: -100px; }
                to { margin-top: 1.75rem; }
            }        

        }
    }

    @keyframes fadeInOpacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    } 

}
</style>