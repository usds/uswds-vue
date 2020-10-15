# Step Indicator

<div>
    <us-step-indicator :step="step" :steps="steps"/>
    <div>
        <us-button variant="primary" size="sm" @click="onPrev()">Previous</us-button>
        <us-button variant="primary" size="sm" @click="onNext()">Next</us-button>
        <us-button variant="primary" size="sm" @click="onPrev()">red</us-button>
    </div>
</div>


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
