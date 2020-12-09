<template>
    <div class="usx-modal" :class="{'open':isOpen}" id="dialog1" aria-labelledby="dialog1_label" aria-modal="true">
        <us-card class="usx-modal-container" :class="{'fade-in':isOpen}">
            <us-card-header>
                <slot name="title">{{title}}</slot>
                <i class="close-btn far fa-times-circle float-right" @click="onCancel"></i>
            </us-card-header>
            <us-card-body>
                <slot name="default"/>
            </us-card-body>
            <us-card-footer align="right">
                <slot name="buttons" v-bind="{onAffirmative, onCancel}">
                    <us-button variant="outline-primary" @click="onCancel">Cancel</us-button>
                    <us-button variant="primary" @click="onAffirmative">Ok</us-button>
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
            this.onCancel();
        },
        onCancel(){
            this.isOpen = false;
            this.$emit('cancel');
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

    position: absolute;
    top: 0;
    left: 0;
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

    .usx-modal-container {
        width: 620px;
        margin-left: auto;
        margin-right: auto;
        max-width: 620px;

        &.fade-in {
            opacity: 1;
            animation-name: fadeInOpacity;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
            animation-duration: 0.5s;
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

    .usa-card__container {
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.12), 0 15px 12px rgba(0, 0, 0, 0.22);
        overflow-x: hidden;
        overflow-y: auto;        
    }

}

@media (min-width: 576px) {
    .usx-modal-container {
        max-width: 500px;
        margin: 1.75rem auto;
    }
}


/*
@media screen and (min-width: 640px) {
    .usx-modal {
        position: absolute;
        top: 2rem;
        left: 50vw;  
        transform: translateX(-50%);  
        min-width: calc(640px - (15px * 2));
        min-height: auto;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.12), 0 15px 12px rgba(0, 0, 0, 0.22);
    }
}

.hidden {
  display: none;
}

[role="alertdialog"],
[role="dialog"] {
  box-sizing: border-box;
  padding: 15px;
  border: 1px solid #000;
  background-color: #fff;
  min-height: 100vh;
}
*/



/*
.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
}
.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;
}
.fade {
    transition: opacity .15s linear;
}
.modal.show .modal-dialog {
    transform: none;
}
.modal.fade .modal-dialog {
    transition: transform .3s ease-out;
    transform: translate(0,-50px);
}


@media (min-width: 576px) {
    .modal-dialog {
        max-width: 500px;
        margin: 1.75rem auto;
    }
}

.modal-dialog {
    position: relative;
    width: auto;
    margin: .5rem;
    pointer-events: none;
}
.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
}
*/
</style>