<template>
    <div class="usa-card__body" :class="{'usa-card__body--exdent': cardExdent}">
        <slot name="default"></slot>
    </div>
</template>
<script>
export default {
    name: 'us-card-body',
    computed:{
        cardExdent(){
            if (this.$parent && this.$parent.$options.name == 'us-card'){
                return this.$parent.cardExdent;
            }
            return null;            
        }        
    },    
};
</script>

