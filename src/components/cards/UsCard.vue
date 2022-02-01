<template>
    <div class="usx-component usx-card card" :class="[`bg-${variant}`, `text-${variant}-contrast`]">

        <img v-if="imgSrc && imgPos == 'top'" :src="imgSrc" class="card-img-top" :alt="imgAlt"/>
                
        <div class="row g-0" v-if="imgPos=='right' || imgPos=='left'">
            <div class="col-md-8 d-flex flex-column pb-3">
                <div class="card-body">
                    <slot name="title"><h5 class="card-title" v-if="title && !hasHeader">{{title}}</h5></slot>
                    <h6 class="card-subtitle mb-2 text-muted" v-if="subTitle">{{subTitle}}</h6>
                    <p class="card-text"><slot name="default"/></p>
                </div>             
                <div class="card-footer" :class="{'order-1':imgPos=='right'}">
                    <slot name="footer"/>
                </div>                   
            </div>
            <div class="col-md-4">
                <img v-if="imgSrc" :src="imgSrc" class="usx-card-fluid-img rounded-start" :alt="imgAlt"/>
            </div>
        </div>

        <div class="card-body" v-else>
            <slot name="title"><h5 class="card-title" v-if="title && !hasHeader">{{title}}</h5></slot>
            <h6 class="card-subtitle mb-2 text-muted" v-if="subTitle">{{subTitle}}</h6>
            <p class="card-text"><slot name="default"/></p>
        </div>

        <div class="card-footer" v-if="!imgSrc || imgPos=='bottom' || imgPos=='top'">
            <slot name="footer"/>
        </div>          

        <img v-if="imgSrc && imgPos == 'bottom'" :src="imgSrc" class="card-img-bottom" :alt="imgAlt"/>
                
    </div>
<!--
    <div class="usx-component usa-card usx-card" :class="{
            'usa-card--flag':imgSrc && imgPos=='left', 
            'usa-card--flag usa-card--media-right': imgSrc && imgPos=='right',
            'usa-card--header-first': imgSrc && imgPos == 'top-body'
        }">
        <div :class="['usa-card__container', `bg-${variant}`, `border-${variant}`]">

            <header class="usx-component usa-card__header" v-if="title && !hasHeader">
                <h2 class="usa-card__heading">
                    {{ title }}
                </h2>
            </header>
            
            <div v-if="imgSrc" class="usa-card__media" :class="{'usa-card__media--inset': imgInset, 'usa-card__media--exdent': cardExdent}">
                <div class="usa-card__img">
                    <img :src="imgSrc" :alt="imgAlt"/>
                </div>
            </div>
   
            <slot name="default" v-if="hasFooter || hasBody || hasHeader"/>
            <div class="usa-card__body" :class="{'usa-card__body--exdent': cardExdent, 'usx-card-overflow':overflow}" v-else>
                <slot name="default"/>
            </div>

        </div>
    </div>

    -->
</template>

<script>
/**
 * USWDS card component
 * Supports a default slot for the body content, and a 'header' and 'footer' slot
 * @props
 */

import CoreMixin from '../../mixins/CoreMixin';

export default {
    name: 'us-card',
    mixins: [CoreMixin],
    props: {
        title: {
            type: String,
            default: null
        },
        subTitle: {
            type: String,
            default: null
        },        
        variant: {
            type: String,
            default: 'none'
        },
        imgSrc: {
            type: String,
            default: null
        },
        imgAlt: {
            type: String,
            default: null
        },
        imgPos: {
            type: String,
            default: 'top'
        },
        imgInset: {
            type: Boolean,
            default: false
        },     
        overflow: {
            type: Boolean,
            default: false
        },
        cardExdent: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            hasHeader: null,
            hasFooter: null,
            hasBody: null,
        }
    },
    mounted(){
        this.hasHeader = this.hasChild('us-card-header');
        this.hasFooter = this.hasChild('us-card-footer');
        this.hasBody = this.hasChild('us-card-body');
        //this.init();
       //this.kids.defaultSlot = this.hasSlot('body');
    },
    methods: {
        init(){
            /*            
            if (this.$slots.default){
                this.$slots.default.map((child)=>{
                    console.log(Object.keys(child))
                    console.log(child)
                });
            }
            */
        }
    }
};
</script>
<style lang="scss">

.usx-card {
    
    .usx-card-fluid-img {
        display: block;
        height: 100%;
        width: 100%;
        -o-object-fit: cover;
        object-fit: cover;
    }

    .card-footer {
        border: none;
        background: none;
    }
}


</style>
