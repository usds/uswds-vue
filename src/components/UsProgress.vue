<template>

    <div class="usx-progress">
        <div role="progressbar" 
            :aria-valuemin="min" 
            :aria-valuemax="max" 
            :aria-valuenow="value" 
            class="progress-bar"             
            :class="[`bg-${variant}`,{'progress-bar-striped': striped, 'progress-bar-animated': animated}]"
            :style="widthStyle()"
        >
            <slot v-bind="{value, max, min, percent}">
                <span v-if="showProgress">{{percent}}%</span>
                <span v-if="showValue">{{value}}</span>
            </slot>
        </div>
    </div>

</template>

<script>
export default {
    name: 'us-progress',
    props: {
        value: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        min: {
            type: Number,
            default: 0
        },                  
        variant: {
            type: String,
            default: 'primary'
        },
        striped: {
            type: Boolean,
            default: false
        },        
        animated: {
            type: Boolean,
            default: false
        },
        showValue: {
            type: Boolean,
            default: false
        },              
        showProgress: {
            type: Boolean,
            default: false
        },            
        height: {
            type: [Number, String],
            default: '1rem'
        }               
    },
    data(){
        return {
            percent: null
        }
    },
    methods: {
        widthStyle(){

            this.percent = Math.ceil(100 * (this.value - this.min) / (this.max - this.min));

            let txt = `width: ${this.percent}%;`;
            if (this.height && typeof this.height == 'string'){
                txt += `height: ${this.height};`;
            }
            else if (this.height && typeof this.height == 'number'){
                txt += `height: ${this.height}px;`;
            }
            return txt;
        }
    }
};
</script>
<style lang="scss">

.usx-progress {

    line-height: 0;
    font-size: .75rem;
    background-color: #e9ecef;
    border-radius: .25rem;
    display: flex;
    overflow: hidden;

    .progress-bar {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        white-space: nowrap;
        transition: width .6s ease;        
        display: flex;
        overflow: hidden;
    }

    .progress-bar-animated {
        -webkit-animation: progress-bar-stripes 1s linear infinite;
        animation: progress-bar-stripes 1s linear infinite;
    }   
        
    .progress-bar-striped {
        background-image: linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);
        background-size: 1rem 1rem;
    }    
        
    @-webkit-keyframes progress-bar-stripes {
        from {
            background-position: 1rem 0;
        }
        to {
            background-position: 0 0;
        }
    }

    @keyframes progress-bar-stripes {
        from {
            background-position: 1rem 0;
        }
        to {
            background-position: 0 0;
        }
    }

}
</style>