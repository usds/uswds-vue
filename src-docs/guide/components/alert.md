# Alert

An alert keeps users informed of important and sometimes time-sensitive changes.

## Overview

<us-alert show dismissible title="Info">This is a info message</us-alert>

```vue
<us-alert show variant="info" title="Info">
    This is a info message
</us-alert>
```

## Alert Size

<us-alert show variant="info" size="sm" class="mb-3">This is a small alert</us-alert>
<us-alert show variant="info" class="mb-3">This is a normal size alert</us-alert>

```vue
<us-alert show variant="info" size="sm">
    This is a small alert
</us-alert>

<us-alert show variant="info">
    This is a normal size alert
</us-alert>
```

## No Icon

<us-alert show variant="info" no-icon>This is a alert with no icon</us-alert>

```vue
<us-alert variant="info" no-icon>
    This is a alert with no icon
</us-alert>
```

## Contextual variants

For proper styling of `<us-alert>`, use one of the contextual variants by setting the variant prop to one of the following: info, success, warning or danger. The default is info.

<span v-for="(variant,index) in ['info','primary','success','danger','warning']" :key="index">
    <us-alert show :variant="variant" class="mb-0 mt-0">This is a <strong>{{variant}}</strong> message</us-alert><br/>
</span>

## Dismissible alerts

Using the `dismissible` prop it's possible to dismiss any `<us-alert>` inline. This will add a close X button. Use the dismiss-label prop to change the hidden label text associated with the dismiss button.

<div class="mt-3 mb-3">
    <us-alert :show="showAlert1" variant="danger" dismissible @onDismissed="onDismissed(1)">You can dismiss this alert</us-alert>
    <b-button class="mt-1" variant="primary" @click="showAlert1 = true" v-if="!showAlert1">Show</b-button>
</div>

```vue
<template>
    <us-alert :show="showAlert" variant="danger" dismissible @onDismissed="onDismissed(1)">You can dismiss this alert</us-alert>
    <b-button class="mt-1" variant="primary" @click="variant = true" v-if="!variant">Show</b-button>
</template>
<script>
export default {
    data() {
        return {
            showAlert: true
        };
    },
    methods: {
        onDismissed(){
            this.showAlert = false;
        }        
    } 
};
</script>
```


## When to use the alert component <Badge text="uswds"/>

**System status messages.** As a notification that keeps people informed of the status of the system and which may or may not require the user to respond. This includes errors, warnings, and general updates.

**Validation messages.** As a validation message that alerts someone that they just did something that needs to be corrected or as confirmation that a task was completed successfully.

## When to consider something else <Badge text="uswds"/>

**Long forms.** On long forms, always include in-line validation in addition to any error messages that appear at the top of the form.

**Destructive actions.** If an action will result in destroying a user’s work (for example, deleting an application) use a more intrusive pattern, such as a confirmation modal dialogue, to allow the user to confirm that this is what they want.

## Usability guidance <Badge text="uswds"/>

**Consider next steps.** When the user is required to do something in response to an alert, let them know what they need to do and make that task as easy as possible. Think about how much context to provide with your message. For example, a notification of a system change may require more contextual information than a validation message. Write the message in concise, human readable language; avoid jargon and computer code.

**Be polite.** Be polite in error messages — don’t blame the user.

**Alerts are an opportunity.** Users will read a message that helps them resolve an error even if they generally won’t read documentation; include some educational material in your error message.

**Don’t overdo it**. Too many notifications will either overwhelm or annoy the user and are likely to be ignored.

**Allow a user to dismiss a notification wherever approp+iate.**

**<strong>**Understand the user’s context.** </strong>** Don’t include notifications that aren’t related to the user’s current goal.

## Vanilla HTML

And of course, as this component is built from Bootstrap you can just use vanilla html if you like.

<div class="usx-component alert alert-info" role="alert">
  A simple primary alert—check it out!
</div>

<div class="usx-component alert alert-info d-flex align-items-center" role="alert">
    <i class="fas fa-exclamation-triangle" ></i>
    <div>A simple primary alert—check it out!</div>
</div>

<div class="usx-component alert alert-info d-flex align-items-start" role="alert">
    <h4><i class="fas fa-exclamation-triangle"></i></h4>
    <div>
        <h4 class="p-0 m-0">Example Title</h4>
        An example alert with an icon
    </div>
</div>


```html
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>

<div class="alert alert-primary d-flex align-items-start" role="alert">
    <i class="fas fa-exclamation-triangle"></i>
    <div>
        An example alert with an icon
    </div>
</div>

<div class="usx-component alert alert-info d-flex align-items-start" role="alert">
    <h4><i class="fas fa-exclamation-triangle"></i></h4>
    <div>
        <h4 class="p-0 m-0">Example Title</h4>
        An example alert with an icon
    </div>
</div>
```

## Component Reference

### `<us-alert>`

### Properties 

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| variant  | string | info | Applies one of the contextual color variants |
| no-icon | boolean | false | When set, do not display a icon |
| no-border | boolean | false | When set, no border is rendered | 
| dismissible | boolean | false | When set, the modal will display a `x` button for dismissig the modal | 
| size | string | lg | Specify the size, can be 'lg' or 'sm' |
| title | string | none | Set a title for the alert |
| show | boolean | true | Use to dynamically hide or show the alert |
| time | number | null | If set, the alert will auto-dismiss after this many seconds |
| show-countdown | boolean | false | If `time` is set, this will turn on a progress bar to show the countdown |

### Events 

| Name | Arguments | Description |
| -------- | ----- | ------- | ----------- | 
| is-dismissed  | none | Called when the alert is dismissed. |

### Slots

| Slot Name | Arguments | Description |
| -------- | ----- | ------- | ----------- | 
| title  | none | Content for the header slot |

### Further Reading

See [Alert documentation at USWDS](https://designsystem.digital.gov/components/alert/)

<script>
export default {
    data() {
        return {
            showAlert1: true,
            showAlert2: true
        };
    },
    methods: {
        onDismissed(val){
            if (val == 2){
                this.showAlert2 = false;
            }
            else {
                this.showAlert1 = false;
            }
        }        
    }    
};
</script>