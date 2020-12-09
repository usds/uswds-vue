<template>
    <div class="usx-component usa-card__footer" :class="{'usa-card__footer--exdent': cardExdent}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'us-card-footer',
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

