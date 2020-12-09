# Card

<div class="mt-3 mb-3">
    <us-card title="This is the title" class="mb-2">This is a card with some content.</us-card>
</div>

```vue
<us-card title="This is the title" variant="info">
    This is a card with some content.
</us-card>
```

## Header & Footer using child components

Add custom html content using the child components `us-card-footer`, `us-card-header` and  `us-card-body`

<div class="mt-3 mb-3">
    <us-card class="m-2" title="This is a card with a custom footer">
        <us-card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </us-card-body>
        <us-card-footer>
            <us-button variant="primary">Footer Button</us-button>
        </us-card-footer>
    </us-card>
</div>

<div class="mt-3 mb-3">
    <us-card class="m-2">
        <us-card-header>
            <h2>A <i>custom</i> card with a custom header and footer</h2>
        </us-card-header>
        <us-card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </us-card-body>
        <us-card-footer>
            <us-button variant="primary">Footer Button</us-button>
        </us-card-footer>
    </us-card>
</div>

```vue
<us-card variant="info">
    <us-card-header>
        <h2>A <i>custom</i> html header</h2>
    </us-card-header>
    Lorem ipsum dolor sit amet, consectetur...
    <us-card-footer>
        <h2>A <i>custom</i> html footer</h2>
    </us-card-footer>
</us-card>
```

## Contextual variants

<div class="mt-3 mb-3">
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

<div class="mt-3 mb-3">
    <us-card-group>
        <us-card 
            title="Card with media" 
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="top"
        >
            <us-card-body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
            </us-card-body>
            <us-card-footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </us-card-footer>
        </us-card>   
        <us-card 
            title="Simple card" 
        >
            <us-card-body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
            </us-card-body>
            <us-card-footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </us-card-footer>
        </us-card>             
    </us-card-group>
</div>

```vue
<us-card-group>
    <us-card 
        title="Card with media" 
        img-src="http://www.fillmurray.com/g/200/200"
        img-pos="top"
    >
        <us-card-body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum...
        </us-card-body>
        <us-card-footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </us-card-footer>
    </us-card>   
    <us-card title="Simple card">
        <us-card-body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum...
        </us-card-body>
        <us-card-footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </us-card-footer>
    </us-card>             
</us-card-group>
```

## Images

<div class="mt-3 mb-3">
    <us-card-group>
        <us-card 
            title="Card with media" 
            style="width:400px"
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="top"
        >
            <us-card-body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
            </us-card-body>
            <us-card-footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </us-card-footer>
        </us-card>   
        <us-card 
            title="Media and header first" 
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="top-body"
        >
            <us-card-body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
            </us-card-body>
            <us-card-footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </us-card-footer>
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
            <us-card-footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </us-card-footer>
        </us-card>     
        <us-card 
            title="Extant Card" 
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="top"
            card-extant
        >
            <us-card-body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
            </us-card-body>
            <us-card-footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </us-card-footer>
        </us-card>          
    </us-card-group>
    <us-card-group>
        <us-card 
            title="Media Left (flag)" 
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="left"
        >
            <us-card-body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
            </us-card-body>
            <us-card-footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </us-card-footer>
        </us-card>        
        <us-card 
            title="Media Right (flag)" 
            img-src="http://www.fillmurray.com/g/200/200"
            img-pos="right"
        >
            <us-card-body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
            </us-card-body>
            <us-card-footer>
                <us-button variant="primary" block>Visit Florida Keys</us-button>
            </us-card-footer>
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
        <us-card-body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
        </us-card-body>
        <us-card-footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </us-card-footer>
    </us-card>   
    <us-card 
        title="Media and header first" 
        img-src="http://www.fillmurray.com/g/200/200"
        img-pos="top-body"
    >
        <us-card-body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
        </us-card-body>
        <us-card-footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </us-card-footer>
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
        <us-card-footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </us-card-footer>
    </us-card>     
    <us-card 
        title="Extant Card" 
        img-src="http://www.fillmurray.com/g/200/200"
        img-pos="top"
        card-extant
    >
        <us-card-body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
        </us-card-body>
        <us-card-footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </us-card-footer>
    </us-card>          
</us-card-group>
<us-card-group>
    <us-card 
        title="Media Left (flag)" 
        img-src="http://www.fillmurray.com/g/200/200"
        img-pos="left"
    >
        <us-card-body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
        </us-card-body>
        <us-card-footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </us-card-footer>
    </us-card>        
    <us-card 
        title="Media Right (flag)" 
        img-src="http://www.fillmurray.com/g/200/200"
        img-pos="right"
    >
        <us-card-body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
        </us-card-body>
        <us-card-footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </us-card-footer>
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


### Further Reading

See [Card documentation at USWDS](https://designsystem.digital.gov/components/card/)