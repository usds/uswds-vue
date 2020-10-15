# Step Indicator

## Basic Usage 

A step indicator updates users on their progress through a multi-step process.

<div class="mb-3 mt-3">
    <us-step-indicator :step="step" :steps="steps"/>
    <div>
        <p>Test it!</p>
        <us-button variant="primary" size="sm" @click="onPrev()"><i class="fas fa-chevron-circle-left"></i> Prev</us-button>
        <us-button variant="primary" size="sm" @click="onNext()"><i class="fas fa-chevron-circle-right"></i> Next</us-button>
    </div>
</div>

```vue
<us-step-indicator 
    :step="step" 
    :steps="[
        'Personal information', 
        'Household status', 
        'Supporting documents', 
        'Signature', 
        'Review and submit']"
/>
```

## Labels

You can opt to display the page labels.

<us-step-indicator class="mb-3 mt-3" :step="step" :steps="steps" :show-labels="true"/>

```vue
<us-step-indicator :step="step" :steps="steps" :show-labels="true"/>
```

## Step Numbers

Display the the step numbers.

<us-step-indicator class="mb-3 mt-3" :step="step" :steps="steps" :show-labels="true" :show-step-numbers="true"/>
<us-step-indicator class="mb-3 mt-3" :step="step" :steps="steps" :show-labels="false" :show-step-numbers="true"/>

```vue
<us-step-indicator :step="step" :steps="steps" :show-labels="true" :show-step-numbers="true"/>
<us-step-indicator :step="step" :steps="steps" :show-labels="false" :show-step-numbers="true"/>
```

### Sizes

Change the step number sizes with the `size` prop.

<us-step-indicator class="mb-3 mt-3" size="sm" :step="step" :steps="steps" :show-step-numbers="true" :show-labels="false"/>
<us-step-indicator class="mb-3 mt-3" size="lg" :step="step" :steps="steps" :show-step-numbers="true" :show-labels="false"/>

```vue
<us-step-indicator size="sm" :step="step" :steps="steps" :show-step-numbers="true" :show-labels="false"/>
<us-step-indicator size="lg" :step="step" :steps="steps" :show-step-numbers="true" :show-labels="false"/>
```

## Center Labels

Center the step labels with a `center-labels` prop.

<us-step-indicator class="mb-3 mt-3" :step="step" :steps="steps" :center-labels="true" :show-labels="true" />

```vue
<us-step-indicator :step="step" :steps="steps" :center-labels="true" :show-labels="true" />
```

## Component Reference

### `<us-step-indicator>`

### Properties 

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| show-labels  | boolean | false | Show page title labels |
| center-labels | boolean | false | Center page title labels |
| show-step-numbers | false | 'button' | Show the page step numbers
| size | string | 'sm' | The size of the page step numbers, can be 'sm' or 'lg' |
| step | number | 0 | The current step (0 referenced) |
| steps | array | null | An array of step titles, can be a simple array of strings or array of objects with a title key |

<script>
export default {
    data() {
        return {
            isLoading: true,
            step: 1,
            steps: [
                'Personal information', 'Household status', 'Supporting documents', 'Signature', 'Review and submit'
            ]
        };
    },
    methods: {
        onNext(){
            if (this.step < this.steps.length-1){
                this.step += 1;
            }
            else {
                this.step = 0;
            }
        },
        onPrev(){
            if (this.step > 0){
                this.step -= 1;
            }
            else {
                this.step = this.steps.length-1;
            }
        }
    }
}
</script>
