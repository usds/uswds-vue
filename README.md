# uswds-vue

Vue USWDS component library

> This is in alpha state, and is actively being developed - please do not use in production!!

This is a front end component library whose aim is to develop [Vue.js](https://vuejs.org/) implementations of the design patterns defined by the [United States Web Design System (USWDS)](https://designsystem.digital.gov/). 

The primary goal of this library is to document and provide common UI components that can be included in other projects that adhere to or are based off of the USWDS, removing a significant amount of overhead UI development from such projects.

This library attempts to follow the conventions laid down by [BootstrapVue](https://bootstrap-vue.org/), as these seem entirely sensible!

## Install

```
# With yarn
yarn add uswds-vue uswds

# With npm
npm i uswds-vue uswds
```

You can import globally;

```
import { UswdsVue } from 'uswds-vue';
Vue.use(UswdsVue);
```

Or import individual components, e.g.;

```
import { UsCard } from 'uswds-vue';
Vue.use(UsCard);

```

And make sure you add the USWDS style sheet and JS

```html
<link rel="stylesheet" href="../../dist/css/uswds.min.css">
<!-- or @import "~uswds/dist/css/uswds.min.css" -->
<script src="../../dist/js/uswds.min.js"></script>
```

## TODO

vuepress docs
* see https://www.xiegerts.com/post/creating-vue-component-library-npm/

## Maintainers

- [@thepipster](https://github.com/thepipster)

## Contributing

Interested in contributing? See our [guidelines and dev setup here](./docs/contributing.md).

## License

TBD