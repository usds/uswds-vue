# Card

<us-card title="This is the title" class="mb-2">This is a card with some content.</us-card>

```vue
    <us-card title="This is the title" variant="info">
        This is a card with some content.
    </us-card>
```

## Header & Footer slots

Add custom html content to the header or footer using slots;

<us-card class="m-2"><template v-slot:title><h2>A <i>custom</i> html header</h2></template>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<template v-slot:footer><h2>A <i>custom</i> html footer</h2></template></us-card>

```vue
<us-card variant="info">
    <template v-slot:title>
        <h2>A <i>custom</i> html header</h2>
    </template>
    Lorem ipsum dolor sit amet, consectetur...
    <template v-slot:footer>
        <h2>A <i>custom</i> html footer</h2>
    </template>
</us-card>
```

## Contextual variants

<div>
    <us-card title="A basic card" class="my-2">Default Card with <strong>no</strong> variant</us-card>
    <us-card title="A info card" variant="info" class="my-2">Card with <strong>info</strong> variant</us-card>
    <us-card title="A primary card" variant="primary" class="my-2">Card with <strong>primary</strong> variant</us-card>
    <us-card title="A secondary card" variant="secondary" class="my-2">Card with <strong>secondary</strong> variant</us-card>
    <us-card title="A success card" variant="success" class="my-2">Card with <strong>success</strong> variant</us-card>
    <us-card title="A warning card" variant="warning" class="my-2">Card with <strong>warning</strong> variant</us-card>
    <us-card title="A danger card" variant="danger" class="my-2">Card with <strong>danger</strong> variant</us-card>
    <us-card title="A light card" variant="light" class="my-2">Card with <strong>light</strong> variant</us-card>
    <us-card title="A dark card" variant="dark" class="my-2">Card with <strong>dark</strong> variant</us-card>
</div>

## Card Groups

You can use a `<us-card-group>` to support multiple cards in a row with consistent height.

<div>
    <us-card-group>
        <us-card 
            title="Card with media" 
            style="width:400px"
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="top"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.                
            <template v-slot:footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </template>
        </us-card>   
        <us-card 
            title="Simple card" 
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.        
            <template v-slot:footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </template>
        </us-card>             
    </us-card-group>
</div>

## Images

<div class="mt-3">
    <us-card-group>
        <us-card 
            title="Card with media" 
            style="width:400px"
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="top"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.        
            <template v-slot:footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </template>
        </us-card>   
        <us-card 
            title="Media and header first" 
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="top-body"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.        
            <template v-slot:footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </template>
        </us-card>             
    </us-card-group>
    <us-card-group>
        <us-card 
            title="Inset Media" 
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="top"
            img-inset
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.        
            <template v-slot:footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </template>
        </us-card>     
        <us-card 
            title="Extant Card" 
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="top"
            card-extant
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.        
            <template v-slot:footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </template>
        </us-card>          
    </us-card-group>
    <us-card-group>
        <us-card 
            title="Media Left (flag)" 
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="left"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.        
            <template v-slot:footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </template>
        </us-card>        
        <us-card 
            title="Media Right (flag)" 
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="right"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.        
            <template v-slot:footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </template>
        </us-card>        
    </us-card-group>      
</div>


```vue
    <us-card-group>

        <us-card 
            title="Card with media" 
            style="width:400px"
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="top"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.... 
            <template v-slot:footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </template>
        </us-card>   

        <us-card 
            title="Media and header first" 
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="top-body"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.... 
            <template v-slot:footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </template>
        </us-card>             

    </us-card-group>

    <us-card-group>

        <us-card 
            title="Inset Media" 
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="top"
            img-inset
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.... 
            <template v-slot:footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </template>
        </us-card>     

        <us-card 
            title="Extant Card" 
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="top"
            card-extant
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.... 
            <template v-slot:footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </template>
        </us-card>          

    </us-card-group>

    <us-card-group>

        <us-card 
            title="Media Left (flag)" 
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="left"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.... 
            <template v-slot:footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </template>
        </us-card>     

        <us-card 
            title="Media Right (flag)" 
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="right"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.... 
            <template v-slot:footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </template>
        </us-card>        

    </us-card-group>      
```

## Component Reference

### `<us-card>`

### Properties 

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| title  | string | null | The card title, or omit for none |
| variant  | string | info | Applies one of the contextual color variants |
| img-src | string | null | Specify a image source |
| img-alt | string | null | Image alt text | 
| img-pos | string | 'top' | Specify the image position, can be one of; `top`, `left`, `right`, `top-body` (puts title above image) |
| img-inset | boolean | false | Indents the media element so it doesn't extend to the edge of the card. |
| card-exdent | boolean | false | Extends the card elements out over the card border. Useful for light-bordered cards. |

### Slots

| Slot Name | Arguments | Description |
| -------- | ----- | ------- | ----------- | 
| title  | none | Content for the header slot |
| header  | none | Content for the footer slot |

### Further Reading

See [Card documentation at USWDS](https://designsystem.digital.gov/components/card/)