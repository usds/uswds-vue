<template>

<div class="usx-component usx-modal" v-if="divId">
    <!--
    <button :id="`btn_${divId}`" type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#modal_${divId}`">Open</button>
    -->
    <div :id="`modal_${divId}`" class="modal" tabindex="-1" :class="[`modal-${size}`]" >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <slot name="footer">Modal title</slot>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </h5>
                </div>
                <div class="modal-body">
                    <slot>
                        <p>Modal body text goes here.</p>
                    </slot>
                </div>
                <div class="modal-footer">
                    
                    <slot name="buttons" v-bind="{onAffirmative, onCancel}">
                        <div align="right">
                            <us-button variant="outline-primary" @click="onCancel" data-bs-dismiss="modal">{{btnCancel}}</us-button>
                            <us-button variant="primary" @click="onAffirmative">{{btnOk}}</us-button>
                        </div>
                    </slot>

                </div>
            </div>
        </div>
    </div>
</div>



</template>

<script>
import Vue from 'vue';
 import { Modal } from 'bootstrap';

export default {
    name: 'us-modal',
    props: {
        value: {
            type: Boolean,
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
            isOpen: true,
            divId: null,
            modalRef: null
        }
    },
    watch: {
        value() {
            
            // Grab a reference to the modal if we don't already have it
            if (!this.modalRef){
                this.modalRef = new Modal(window.document.getElementById(`modal_${this.divId}`), {})
            }

            if (this.value && this.modalRef){
                this.modalRef.show();
                this.isOpen = true;
            }
            else if (this.modalRef){
                this.modalRef.hide();
                this.isOpen = false;
            }      
            
             this.$emit('input', this.isOpen);
        }
    },
    mounted() {
        this.divId = this.uuid();
        this.isOpen = false;
    },
    methods: {
        uuid() {
            var S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            return S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4();
        },                
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

</style>