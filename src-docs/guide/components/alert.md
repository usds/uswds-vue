# Alert

An alert keeps users informed of important and sometimes time-sensitive changes.

## Overview

<us-alert variant="info" title="Info">This is a info message</us-alert>

``` vue
<us-alert variant="info" title="Info">
    This is a info message
</us-alert>
```

## Alert Size

<us-alert variant="info" size="sm">This is a small alert</us-alert>
<us-alert variant="info" >This is a normal size alert</us-alert>

``` vue
<us-alert variant="info" size="sm">
    This is a small alert
</us-alert>

<us-alert variant="info">
    This is a normal size alert
</us-alert>
```

## No Icon

<us-alert variant="info" no-icon>This is a alert with no icon</us-alert>

``` vue
<us-alert variant="info" no-icon>
    This is a alert with no icon
</us-alert>
```

## Contextual variants

For proper styling of `<us-alert>`, use one of the contextual variants by setting the variant prop to one of the following: info, success, warning or danger. The default is info.

<span v-for="(variant,index) in ['info','success','danger','warning','light','dark', 'primary','secondary']" :key="index">
    <us-alert :variant="variant">This is a <strong>{{variant}}</strong> message</us-alert><br/>
</span>

## Component Reference

### `<us-alert>`

### Properties 

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| variant  | string | info | Applies one of the contextual color variants |
| no-icon | boolean | false | When set, do not display a icon |
| no-border | boolean | false | When set, no border is rendered | 
| size | string | lg | Specify the size, can be 'lg' or 'sm' |
| title | string | none | Set a title for the alert |

### Slots

| Slot Name | Arguments | Description |
| -------- | ----- | ------- | ----------- | 
| title  | none | Content for the header slot |

### Further Reading

See [Alert documentation at USWDS](https://designsystem.digital.gov/components/alert/)