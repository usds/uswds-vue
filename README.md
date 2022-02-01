# uswds-vue

## **NEW** Getting Help & Contributing

Apologies for lack of support lately, if you need help you can find me on Twitter at @MikeJPritchard. Please just ping me to let me know you're using this. If I know people are using this, then I'll be more active building and supporting it! 

And even better, if you want to contribute let me know!

### **NEW** Slack Community

Come talk to me and others, [join our Slack community](https://join.slack.com/t/uswds-vue/shared_invite/zt-12y2dore9-YB8~OwFlOhpepubbgp8aPw).

## Introduction

[Vue USWDS component library](https://usds.github.io/uswds-vue/)

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

```js
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
<link rel="stylesheet" href="~uswds/dist/css/uswds-vue.min.css">
```

Or in your css files;

```css
@import "~uswds/dist/css/uswds.min.css";
@import "~uswds-vue/dist/uswds-vue.css";
```

Or in your sass files;

```scss
@import "~uswds/dist/css/uswds.css";
@import "~uswds-vue/src/styles/uswds-vue.scss";
```

## Building & Contributing

To get started locally just run `yarn install`, you can develop components in your own projects by pulling in the local copy of `usdws-vue` (using `yarn link` or just manually import).

Personally, I find it easiest to develop both the component and the docs at the same time. [VuePress](https://vuepress.vuejs.org/) has hot reloading, so you can develop the component and also create the docs at the same time. You can spin up the VuePress locally by running `yarn docs:dev`.

## Documentation

The project uses [VuePress](https://vuepress.vuejs.org/), all the docs are found under `/src-docs/guide`. It's fairly easy to add a new component;

Create a new page by adding an entry to the side-nav, this is done by editing `themeConfig.sidebar` in `/src-docs/.vuepress/config.js`. The entry you add is the file path to the markdown doc itself. 

For example, you can see the documentation for the alert component is in the `children` array in the object with a title `Component` in `themeConfig.sidebar`. The entry is `components/alert`, which corresponds to the markdown file
in the directory `/src-docs/guide/components/alert.md`.

## Contributing & Versioning

We follow the semantic versioning convention, when you commit do so in the following manner;

```
git commit -m "fix: JIRA-1234 Fixed bug on foo"
git commit -m "feat: JIRA-2345 Adds new Widget"
git commit -m "chore: JIRA-3456 Updated README"
git commit -m 'feat: JIRA-4567 Added new theme
```

We use [standard_version](https://github.com/conventional-changelog/standard-version) to automate versioning and release notes.

Simply run `yarn run release` to bump the version number appropriately and generate release notes. Run `git push --follow-tags origin master` to publish.
