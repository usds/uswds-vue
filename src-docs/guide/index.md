# Introduction

Vue USWDS component library

This is a front end component library whose aim is to develop [Vue.js](https://vuejs.org/) implementations of the design patterns defined by the [United States Web Design System (USWDS)](https://designsystem.digital.gov/). 

The primary goal of this library is to document and provide common UI components that can be included in other projects that adhere to or are based off of the USWDS, removing a significant amount of overhead UI development from such projects.

This library attempts to follow the conventions laid down by [Bootstrap](https://getbootstrap.org/), as these seem entirely sensible!

## Install

To install, you need to add `uswds-vue` itself and addiationally you'll need the `uswds` styles (but not the `uswds` javascript).

``` bash
# With yarn
yarn add uswds-vue uswds

# With npm
npm i uswds-vue uswds
```

Then you can import globally (for example in your `main.js` file);

``` js

// Import the vue component library
import { UswdsVue } from 'uswds-vue';
Vue.use(UswdsVue);

// Or import individual components, e.g.;
import { UsCard } from 'uswds-vue';
Vue.use(UsCard);

```

To impoprt the `uswds` styles, you can add this to you `index.html` file;

```html
<link rel="stylesheet" href="~uswds/dist/css/uswds-vue.min.css">
```

Or in your sass files;

```scss
@import "~uswds-vue/dist/uswds-vue.css";
```

## Customize with SASS

Support for SASS is baked in. To use, import the scss style sheets from `USWDS` and `uswds-vue`;

```scss
@import "~uswds-vue/src/styles/uswds-vue.scss";
```

## Fontawesome

`uswds-vue` makes use of, and includes, the free version of [fontawesome](https://fontawesome.com/), future versions will include the ability to decouple to decrease the build size.
