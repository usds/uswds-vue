# Progress

`USWDS` does not provide a progess bar, so here we extend and provide a simple progress bar. For accesability, the relevant aria values are automatically set for screen reader support. These are `aria-valuemin`, `aria-valuemax` and `aria-valuenow`. The role is also set as `role="progressbar"`.

<div class="mt-3 mb-3">
    <us-progress :value="val" show-progress striped animated :max="100"/>
    <us-button class="mt-1" variant="primary" @click="reset()">Randomize</us-button>
</div>

```vue
    <us-progress :value="val" show-progress striped animated :max="100"/>
```

## Labels

Add labels to your progress bars by either enabling `show-progress` (percentage of max) or `show-value` for the current absolute value. You can also make use of the default slot to add any content into the bar you want. The default slot is also passed the `max`, `min`, `value` and `percent` values for convenience. For example;

<div class="mt-3 mb-3">
    <us-progress :value="val" show-progress striped animated :max="100" height="25px">
        <us-tag variant="info">See my Progress!</us-tag>
    </us-progress>
    <us-progress :value="val" show-progress striped animated :max="100" height="25px" class="mt-2">
        <template #default="{max, min, value, percent}">
            <div>
                <us-tag variant="info">{{percent}}%</us-tag>
                <span class="text-small text-white">Max: {{max}}, Min: {{min}}, Value: {{value}}</span>
            </div>
        </template>    
    </us-progress>
</div>

```vue
<div class="mt-3 mb-3">
    <!-- Example using the default slot -->
    <us-progress :value="val" show-progress striped animated :max="100" height="25px">
        <us-tag variant="info">See my Progress!</us-tag>
    </us-progress>
    <!-- Example getting the internal props -->
    <us-progress :value="val" show-progress striped animated :max="100" height="25px" class="mt-2">
        <template #default="{max, min, value, percent}">
            <div>
                <us-tag variant="info">{{percent}}%</us-tag>
                <span class="text-small text-white">Max: {{max}}, Min: {{min}}, Value: {{value}}</span>
            </div>
        </template>    
    </us-progress>
</div>
```

## Maximum and minimium

The default max is 100 and min is 0.

<div class="mt-3 mb-3">
    <us-progress :value="-50" class="mb-2" show-progress :max="100" :min="-100">
        Max: 100, Min: 100, Value: -50
    </us-progress>
    <us-progress :value="0" class="mb-2" show-progress :max="100" :min="-100">
        Max: 100, Min: -100, Value: 0
    </us-progress>
    <us-progress :value="50" show-progress :max="100" :min="-100">
        Max: 100, Min: -100, Value: 50
    </us-progress>
</div>

<div class="mt-3 mb-3">
    <us-progress :value="460" class="mb-2" show-progress :max="500" :min="250">
        <template #default="{max, min, value, percent}">
            {{percent}}% (Max: {{max}}, Min: {{min}}, Value: {{value}})
        </template>
    </us-progress>
</div>

```vue
<div class="mt-3 mb-3">
    <us-progress :value="-50" class="mb-2" show-progress :max="100" :min="-100">
        Max: 100, Min: 100, Value: -50
    </us-progress>
    <us-progress :value="0" class="mb-2" show-progress :max="100" :min="-100">
        Max: 100, Min: -100, Value: 0
    </us-progress>
    <us-progress :value="50" show-progress :max="100" :min="-100">
        Max: 100, Min: -100, Value: 50
    </us-progress>
</div>

<div class="mt-3 mb-3">
    <us-progress :value="460" class="mb-2" show-progress :max="500" :min="250">
        <template #default="{max, min, value, percent}">
            {{percent}}% (Max: {{max}}, Min: {{min}}, Value: {{value}})
        </template>
    </us-progress>
</div>
```

## Width and height

`<us-progress>` will always expand to the maximum with of its parent container. To change the width, place `<us-progress>` in a standard Bootstrap column or apply one of the standard Bootstrap width classes.

<div class="mt-3 mb-3">
    <h5 class="mb-1">Default width</h5>
    <us-progress :value="randomVal()" class="mb-3"></us-progress>
    <h5 class="mb-1">Custom widths</h5>
    <us-progress :value="randomVal()" class="w-75 mb-2"></us-progress>
    <us-progress :value="randomVal()" class="w-50 mb-2"></us-progress>
    <us-progress :value="randomVal()" class="w-25"></us-progress>
</div>

The height of the progress bar can be controlled with the `height` prop. The height value should be a standard CSS dimension (px, rem, em, etc.). The default height is `1rem`.

<div>
    <h5 class="mb-1">Default height</h5>
    <us-progress :value="randomVal()" show-progress class="mb-3"></us-progress>
    <h5 class="mb-1">Custom heights</h5>
    <us-progress height="2rem" :value="randomVal()" show-progress class="mb-2"></us-progress>
    <us-progress height="20px" :value="randomVal()" show-progress class="mb-2"></us-progress>
    <us-progress :height="2" :value="randomVal()"></us-progress>
</div>
  
## Variants

The usual variants are supported, and also allow for `striped` and `animated`.

<div class="mt-3 mb-3">
    <us-row 
        v-for="(variant,index) in [
                'primary',
                'secondary',
                'info',
                'success',
                'danger',
                'warning',
                'light',
                'dark',
                'white',
                'black'
            ]" 
        :key="index"
    >
        <us-col md="1">
            {{variant}}
        </us-col>
        <us-col>
            <us-progress :value="randomVal()" class="mb-3" show-progress striped :variant="variant"/>
        </us-col>
    </us-row>
</div>

```vue
<div class="mt-3 mb-3">
    <us-row 
        v-for="(variant,index) in [
                'primary',
                'secondary',
                'info',
                'success',
                'danger',
                'warning',
                'light',
                'dark',
                'white',
                'black'
            ]" 
        :key="index"
    >
        <us-col md="1">
            {{variant}}
        </us-col>
        <us-col>
            <us-progress :value="randomVal()" class="mb-3" show-progress :variant="variant"/>
        </us-col>
    </us-row>
</div>
```

## Component Reference

### `<us-progress>`

### Properties 

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| variant  | string | primary | Applies one of the contextual color variants |
| value | number | 0 | The progress bar value, must be between min and max |
| min | number | 0 | The min value for the bar |
| max | number | 100 | The max value for the bar |
| striped | boolean | false | Render as a striped bar |
| animated | boolean | false | Animate the stripes |
| show-percent | boolean | false | Show the percentage value in the bar |
| show-value | boolean | false |Show the raw value in the bar |
| height | string|number | 1rem |The bar height, if this is a number then assumed to be a pixel height |

### Slots

| Slot Name | Props | Description |
| -------- | ----- | ------- | ----------- | 
| default  | value | The current raw value |
|   | max | The max value set |
|   | min | The min value set |
|   | percent | The computed percentage value of the bar |



<script>
export default {
    data() {
        return {
            val: 46,
            max: 100,        
        };
    },
    methods: {
        reset(){
            this.val = this.randomVal();
        },
        randomVal(){
            return Math.ceil(Math.random() * 100);
        }
    }
};
</script>
