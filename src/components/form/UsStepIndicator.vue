<template>
    <div class="usa-step-indicator" aria-label="progress">
        <ol class="usa-step-indicator__segments">

            <li 
                v-for="(title, index) in steps" 
                :key="index" 
                class="usa-step-indicator__segment" 
                :aria-current="(step == index) ? true : false"
                :class="{
                    'usa-step-indicator__segment--complete': step <= index,
                    'usa-step-indicator__segment--current': step == index}"
            >
                <span class="usa-step-indicator__segment-label">
                    {{title}} 
                    <span v-if="step < index" class="usa-sr-only">completed</span>
                    <span v-if="step < index" class="usa-sr-only">not completed</span>
                </span>
            </li>


<!--
            <li class="usa-step-indicator__segment usa-step-indicator__segment--complete">
                <span class="usa-step-indicator__segment-label">Household status <span class="usa-sr-only">completed</span></span>
            </li>
            <li class="usa-step-indicator__segment usa-step-indicator__segment--current" aria-current="true">
                <span class="usa-step-indicator__segment-label">Supporting documents </span>
            </li>
            <li class="usa-step-indicator__segment">
                <span class="usa-step-indicator__segment-label">Signature <span class="usa-sr-only">not completed</span></span>
            </li>
            <li class="usa-step-indicator__segment">
                <span class="usa-step-indicator__segment-label">Review and submit <span class="usa-sr-only">not completed</span></span>
            </li>

            -->
        </ol>
        <div class="usa-step-indicator__header">
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
/*
 .usa-step-indicator--no-labels

Don’t show step labels

.usa-step-indicator--counters

Show step counters

.usa-step-indicator--counters-sm

Show small step counters

.usa-step-indicator--center

Center counters and labels in each step

 
 */
export default {
    name: 'us-step-indicator',
    components: {},
    props: {
        step: {
            type: Number,
            default: 0
        },
        steps: {
            type: Array,
            default: ['Step 1', 'Step 2', 'Step 3']
        },
        variant: {
            type: String,
            default: 'info'
        },
        fluid: {
            type: String,
            default: 'none'
        }
    },
    computed: {
        currentTitle(){
            return this.steps[this.step];
        }
    }
};
</script>
<style lang="scss">

.usa-step-indicator__heading {
    font-size: 1.13rem !important;
    font-weight: bold !important;
    margin: 1rem 0 0 !important;
}

</style>
