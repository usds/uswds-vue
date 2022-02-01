# Card

<div class="mt-3 mb-3" style="width: 18rem;">
    <us-card title="This is the title" sub-title="Sub title" class="mb-2">This is a card with some content.</us-card>
</div>

```vue
<us-card title="This is the title" sub-title="Sub title">
    This is a card with some content.
</us-card>
```


## Custom Title & Footer using slots

Add custom html content using the `title`, and  `footer` slots. See the VueJS docs on slots [here](https://vuejs.org/v2/guide/components-slots.html)

<div class="mt-3 mb-3">
    <us-card class="m-2" title="This is a card with a custom footer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <template #footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </template>
    </us-card>
</div>

<div class="mt-3 mb-3">
    <us-card class="m-2">
        <template #title>
            <h2>A <i>custom</i> <i class="fas fa-rocket"></i> html title</h2>
        </template>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <template #footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </template>
    </us-card>
</div>

```vue
<us-card>
    <template #title>
        <h2>A <i>custom</i> <i class="fas fa-rocket"></i> html title</h2>
    </template>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <template #footer>
        <us-button variant="primary" block>Visit Florida Keys</us-button>
    </template>
</us-card>
```

## Images

### Vertical Image Placement

Set the `img-pos` prop to either `top` or `bottom` for vertical image placement.

<div class="mt-3 mb-3">
    <us-card 
        title="Card with media" 
        subTitle="Image Top"
        class="w-50 mb-3"
        img-src="/built-to-grow--alt.jpg"
        img-pos="top"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
        <template #footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </template>
    </us-card> 
    <us-card 
        title="Card with media" 
        subTitle="Image Bottom"
        class="w-50"
        img-src="/built-to-grow--alt.jpg"
        img-pos="bottom"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
        <template #footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </template>
    </us-card>     
</div>

### Horizontal Image Placement

Likewise, set the `img-pos` prop to either `left` or `right` for vertical image placement.

<div class="mt-3 mb-3">
    <us-card 
        title="Card with media" 
        subTitle="Image Left"
        img-src="/built-to-grow--alt.jpg"
        class="mb-3 w-50"
        img-pos="left"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
        <template #footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </template>
    </us-card>     
    <us-card 
        title="Card with media" 
        subTitle="Image Right"
        img-src="/built-to-grow--alt.jpg"
        img-pos="right"
        class="w-50"
    >
        <template #header>
            Flag Card
        </template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
        <template #footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </template>
    </us-card> 
</div>

## Card Groups and Grids

As `uswds-vue` is built on bootstrap now, you can directly use bootstrap to easily group your cards. For example, creating a grid or group is easy and you can see how in the following examples. For more information, see Bootstrap docs on Cards [here](https://getbootstrap.com/docs/5.1/components/card/)

### Card Group

<div class="card-group">
    <us-card 
        title="Card with media" 
        img-src="/built-to-grow--alt.jpg"
        img-pos="top"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
        <template #footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </template>                    
    </us-card>   
    <us-card 
        title="Simple card" 
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
        <template #footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </template>                    
    </us-card>           
    <us-card 
        title="Another Simple card" 
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
        <template #footer>
            <us-button variant="primary" block>Visit Florida Keys</us-button>
        </template>        
    </us-card>  
  </div>
</div>

### Card Grid

Use the Bootstrap grid system and its `.row-cols` classes to control how many grid columns (wrapped around your cards) you show per row. For example, here’s `.row-cols-1` laying out the cards on one column, and `.row-cols-md-2` splitting four cards to equal width across multiple rows, from the medium breakpoint up.

<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <us-card 
        title="Card in a grid" 
        img-src="/built-to-grow--alt.jpg"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
    </us-card> 
  </div>
  <div class="col">
    <us-card 
        title="Card in a grid" 
        img-src="/built-to-grow--alt.jpg"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
    </us-card> 
  </div>
  <div class="col">
    <us-card 
        title="Card in a grid" 
        img-src="/built-to-grow--alt.jpg"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
    </us-card> 
  </div>
  <div class="col">
    <us-card 
        title="Card in a grid" 
        img-src="/built-to-grow--alt.jpg"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
    </us-card> 
  </div>
</div>

```vue
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <us-card 
        title="Card in a grid" 
        img-src="/built-to-grow--alt.jpg"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
    </us-card> 
  </div>
  <div class="col">
    <us-card 
        title="Card in a grid" 
        img-src="/built-to-grow--alt.jpg"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
    </us-card> 
  </div>
  <div class="col">
    <us-card 
        title="Card in a grid" 
        img-src="/built-to-grow--alt.jpg"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
    </us-card> 
  </div>
  <div class="col">
    <us-card 
        title="Card in a grid" 
        img-src="/built-to-grow--alt.jpg"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae. Excepturi nobis dolores molestias! Quas quisquam a officia eos.
    </us-card> 
  </div>
</div>
```




## Contextual variants

<div class="mt-3 mb-3">
    <us-card title="A basic card" class="my-2 " style="width: 18rem;">Default Card with <strong>no</strong> variant</us-card>
    <us-card title="A info card" variant="info" class="my-2 " style="width: 18rem;">Card with <strong>info</strong> variant</us-card>
    <us-card title="A primary card" variant="primary" class="my-2 " style="width: 18rem;">Card with <strong>primary</strong> variant</us-card>
    <us-card title="A secondary card" variant="secondary" class="my-2 " style="width: 18rem;">Card with <strong>secondary</strong> variant</us-card>
    <us-card title="A success card" variant="success" class="my-2 " style="width: 18rem;">Card with <strong>success</strong> variant</us-card>
    <us-card title="A warning card" variant="warning" class="my-2 " style="width: 18rem;">Card with <strong>warning</strong> variant</us-card>
    <us-card title="A danger card" variant="danger" class="my-2 " style="width: 18rem;">Card with <strong>danger</strong> variant</us-card>
    <us-card title="A light card" variant="light" class="my-2 " style="width: 18rem;">Card with <strong>light</strong> variant</us-card>
    <us-card title="A dark card" variant="dark" class="my-2 " style="width: 18rem;">Card with <strong>dark</strong> variant</us-card>
</div>


## Component Reference

### `<us-card>`

### Properties 

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| title  | string | null | The card title, or omit for none |
| variant  | string | info | Applies one of the contextual color variants |
| img-src | string | null | Specify a image source |
| img-alt | string | null | Image alt text | 
| img-pos | string | 'top' | Specify the image position, can be one of; `top`, `left`, `right`, `bottom`|

### Slots

| Slot Name | Arguments | Description |
| -------- | ----- | ------- | ----------- | 
| title  | none | Content for the header slot |
| footer  | none | Content for the footer slot |

### Further Reading

See [Card documentation at USWDS](https://designsystem.digital.gov/components/card/)
See [Card documentation at Bootstrap](https://getbootstrap.com/docs/5.1/components/card/)