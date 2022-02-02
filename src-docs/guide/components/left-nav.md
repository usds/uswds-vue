# Side Navigation

<div class="w-50 mt-3 mb-3 usx-component">
    <us-side-nav :links="menu"/>
</div>


```vue
<div class="mt-3 mb-3">
    <us-side-nav :links="menu"/>
</div>
```

```js
export default {
    data() {
        return {
            selected: {},

            menu: [
                {name: 'Build', children: [
                    {name: 'Get Started', icon: 'fal fa-play'},
                    {name: 'Settings', icon: 'fal fa-cogs'},
                    {name: 'Deploy', icon: 'fal fa-chevron-circle-right'}
                ]},
                {name: 'Services', children: [
                    {name: 'API\'s', icon: 'fal fa-rocket-launch'},
                    {name: 'Realtime Database', icon: 'fal fa-database'},
                    {name: 'Storage', icon: 'fal fa-box-open'},
                    {name: 'Functions', icon: 'fal fa-function', children: [
                        {name: 'Sub-Page 1', icon: 'far fa-file-alt'},
                        {name: 'Sub-Page 2', icon: 'far fa-file-alt'},
                        {name: 'Sub-Page 3', icon: 'far fa-file-alt'}
                    ]}
                ]},                
                {name: 'Release & Monitor', children: [
                    {name: 'Crashlytics', icon: 'fal fa-car-crash'},
                    {name: 'Performance', icon: 'fal fa-gauge'},
                ]},
                {name: 'Analytics', children: [
                    {name: 'Dashboard', icon: 'fal fa-chart-line'}
                ]},
                {name: 'Engage', children: [
                    {name: 'A/B Testing', icon: 'fal fa-flask'},
                    {name: 'Remote Config', icon: 'fal fa-code'}
                ]},
                {name: 'Admin', children: [
                    {name: 'Registry', icon: 'fal fa-users'}
                ]},
            ]

        };
    }
}

```

<script>
import Color from "color";
import _ from 'lodash';

export default {
    data() {
        return {
            selected: {},

            menu: [
                {name: 'Build', children: [
                    {name: 'Get Started', icon: 'fal fa-play'},
                    {name: 'Settings', icon: 'fal fa-cogs'},
                    {name: 'Deploy', icon: 'fal fa-chevron-circle-right'}
                ]},
                {name: 'Services', children: [
                    {name: 'API\'s', icon: 'fal fa-rocket-launch'},
                    {name: 'Realtime Database', icon: 'fal fa-database'},
                    {name: 'Storage', icon: 'fal fa-box-open'},
                    {name: 'Functions', icon: 'fal fa-function', children: [
                        {name: 'Sub-Page 1', icon: 'far fa-file-alt'},
                        {name: 'Sub-Page 2', icon: 'far fa-file-alt'},
                        {name: 'Sub-Page 3', icon: 'far fa-file-alt'}
                    ]}
                ]},                
                {name: 'Release & Monitor', children: [
                    {name: 'Crashlytics', icon: 'fal fa-car-crash'},
                    {name: 'Performance', icon: 'fal fa-gauge'},
                ]},
                {name: 'Analytics', children: [
                    {name: 'Dashboard', icon: 'fal fa-chart-line'}
                ]},
                {name: 'Engage', children: [
                    {name: 'A/B Testing', icon: 'fal fa-flask'},
                    {name: 'Remote Config', icon: 'fal fa-code'}
                ]},
                {name: 'Admin', children: [
                    {name: 'Registry', icon: 'fal fa-users'}
                ]},
            ]

        };
    }
}
</script>