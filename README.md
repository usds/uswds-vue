# uswds-vue

## Introduction

[Vue USWDS component library](https://usds.github.io/uswds-vue/)

> This is in very "alpha" state, and is actively being developed. It is very much a work in progress - please do not use in production!!

This is a front end component library whose aim is to develop [Vue.js](https://vuejs.org/) implementations of the design patterns defined by the [United States Web Design System (USWDS)](https://designsystem.digital.gov/). 

The primary goal of this library is to document and provide common UI components that can be included in other projects that adhere to or are based off of the USWDS, removing a significant amount of overhead UI development from such projects.

This library attempts to follow the conventions laid down by [BootstrapVue](https://bootstrap-vue.org/), as these seem entirely sensible!

## Vue 3 support

Support for Vue 3 is on the roadmap, but too many 3rd party libraries don't yet support Vue 3 so for now we're sticking with Vue 2. Please submit an issue if you want to push vor Vue 3 support sooner!

## Documentation

Full docs can be found [here](https://usds.github.io/uswds-vue/)

## Install

``` bash
# With yarn
yarn add uswds-vue uswds

# With npm
npm i uswds-vue uswds
```

You can import globally;

``` js
// Import USWDS itself
import 'uswds/dist/js/uswds.min.js';

// And then import the vue component library
import { UswdsVue } from 'uswds-vue';
Vue.use(UswdsVue);

// Or import individual components, e.g.;
import { UsCard } from 'uswds-vue';
Vue.use(UsCard);

```

You will also need to import the USWDS styles;

```html
<link rel="stylesheet" href="~uswds/dist/css/uswds.min.css">
```

Or in your sass files;

```scss
@import "~uswds/dist/css/uswds.css";
```

