<template>
    <div class="usa-step-indicator" aria-label="progress">
        <ol v-if="steps" class="usa-step-indicator__segments" :class="{            
            'usa-step-indicator--counters': showStepNumbers && size != 'sm',
            'usa-step-indicator--counters-sm': showStepNumbers && size == 'sm',
            'usa-step-indicator--center': centerLabels
        }">
            <li 
                v-for="(item, index) in steps" 
                :key="index" 
                class="usa-step-indicator__segment" 
                :aria-current="(step == index) ? true : false"
                :class="{
                    'usa-step-indicator__segment--complete': step <= index,
                    'usa-step-indicator__segment--current': step == index}"
            >
                <span class="usa-step-indicator__segment-label">
                    <span v-if="item.title && showLabels">{{item.title}}</span>
                    <span v-else-if="showLabels">{{item}}</span>
                    <span v-if="step < index" class="usa-sr-only">completed</span>
                    <span v-if="step < index" class="usa-sr-only">not completed</span>
                </span>
            </li>
        </ol>
        <div class="usa-step-indicator__header mt-1">
            <h2 class="usa-step-indicator__heading">
                <span class="usa-step-indicator__heading-counter">
                    <span class="usa-sr-only">Step</span>
                    <span class="usa-step-indicator__current-step">{{step+1}}</span>
                    <span class="usa-step-indicator__total-steps">of {{steps.length}}</span>
                </span>
                <span class="usa-step-indicator__heading-text">{{currentTitle}}</span>
            </h2>
        </div>
    </div>
</template>

<script>

export default {
    name: 'us-step-indicator',
    components: {},
    props: {
        // Show step labels
        showLabels: {
            type: Boolean,
            default: false
        },
        // Center counters and labels in each step
        centerLabels: {
            type: Boolean,
            default: false
        },        
        // Show step counters
        showStepNumbers: {
            type: Boolean,
            default: false
        },
        // Show small step counters
        size: {
            type: String,
            default: 'sm'
        },
        step: {
            type: Number,
            default: 0
        },
        steps: {
            type: Array,
            default: null
        },
        variant: {
            type: String,
            default: 'info'
        }
    },
    computed: {
        currentTitle(){
            if (this.steps && this.steps[this.step]){
                if (this.steps[this.step].title){
                    return this.steps[this.step].title;
                }
                else {
                    return this.steps[this.step];
                }
            }
            return '';
        }
    }
};
</script>
<style lang="scss">

.usa-step-indicator__heading {
    
    font-size: 1em !important;
    font-weight: bold !important;
    margin: 0 !important;

    .usa-step-indicator__current-step {
        margin-right: 0.2em;
        height: 1.5em;
        width: 1.5em;
        padding: 0;
        line-height: 1.5em;
    }




}

</style>
