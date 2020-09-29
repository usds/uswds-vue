# Card

<us-card title="This is the title" class="mb-2">This is a card with some content.</us-card>

```vue
    <us-card title="This is the title" variant="info">
        This is a card with some content.
    </us-card>
```

## Header slot

<us-card class="m-2"><template v-slot:title><h2>A <i>custom</i> html header</h2></template>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</us-card>

```vue
<us-card variant="info">
    <template v-slot:title>
        <h2>A <i>custom</i> html header</h2>
    </template>
    Lorem ipsum dolor sit amet, consectetur...
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

## More docs coming soon....
