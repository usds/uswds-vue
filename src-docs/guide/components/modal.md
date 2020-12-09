# Modal <Badge type="green" text="extension"/>
 
 ## Basic Usage 

<div class="mt-3 mb-3">    
    <us-modal v-model="showModal" title="A simple modal" @ok="" @cancel="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
    </us-modal>
    <us-button v-if="!showModal" variant="primary" @click="showModal = true">Show</us-button>
    <us-button v-else variant="primary" @click="showModal = false">Hide</us-button>
</div>

```vue
<us-modal v-model="showModal" title="A simple modal" @ok="" @cancel="">
    Lorem ipsum dolor sit.....
</us-modal>
<us-button v-if="!showModal" variant="primary" @click="showModal = true">Show</us-button>
<us-button v-else variant="primary" @click="showModal = false">Hide</us-button>
```

## Component Reference

### `<us-modal>`

### Properties 

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| v-model (input) | any | dalse | The v-model prop is used to hide and show the modal |
| title  | string | 'Confirm' | The modal title |
| btn-ok | string | 'Ok' | The affirmative button content |
| btn-cancel | string | 'Cancel' | The cancel button content |

### Events

| Slot Name | Arguments | Description |
| -------- | ----- | ------- | ----------- | 
| input  | none | Updates the input (v-model) value |
| ok  | none | Emitted when the affirmative button is clicked |
| cancel  | none | Emitted when the cancel button is clicked |


### Slots

| Slot Name | Arguments | Description |
| -------- | ----- | ------- | ----------- | 
| title  | none | Content for the header slot |
| buttons  | onAffirmative, onCancel | Replace the standard buttons, passed the `onAffirmative` and `onCancel` functions|

<script>
export default {
    data() {
        return {
            showModal: false
        };
    },
    methods: {
        onToggleModal(){
            this.showModal = !this.showModal;
            //this.$usxModal.show('#test-modal');
        }
    }
};
</script>
