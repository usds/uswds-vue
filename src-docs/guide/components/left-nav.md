# Side Navigation


<div class="w-50 mt-3 mb-3 usx-component">
    <us-side-nav :links="menu"/>
</div>



```
<div class="mt-3 mb-3">
    <b-nav vertical class="w-50">
        <us-side-nav-item 
            :class="{'active':selected.name == page.name}" 
            @click="selected = page" 
            :disabled="page.disabled"
            v-for="page in menu" :key="page.name">
            {{page.name}}
            <us-side-nav-item 
                :class="{'active':selected.name == kid.name}" 
                v-if="page.children"
                @click="selected = kid" 
                v-for="kid in page.children" :key="kid.name">
                {{kid.name}}
                <us-side-nav-item 
                    :class="{'active':selected.name == grandkid.name}" 
                    v-if="kid.children"
                    @click="selected = kid" 
                    v-for="grandkid in kid.children" :key="grandkid.name">
                    {{grandkid.name}}
                </us-side-nav-item>                
            </us-side-nav-item>
        </us-side-nav-item>
    </b-nav>
    {{selected}}
</div>

<div class="mt-3 mb-3">
    <us-side-nav class="w-50">
        <us-side-nav-item 
            :class="{'active':selected.name == page.name}" 
            @click="selected = page" 
            :disabled="page.disabled"
            v-for="page in menu" :key="page.name">
            {{page.name}}
            <us-side-nav-item 
                :class="{'active':selected.name == kid.name}" 
                v-if="page.children"
                @click="selected = kid" 
                v-for="kid in page.children" :key="kid.name">
                {{kid.name}}
                <us-side-nav-item 
                    :class="{'active':selected.name == grandkid.name}" 
                    v-if="kid.children"
                    @click="selected = kid" 
                    v-for="grandkid in kid.children" :key="grandkid.name">
                    {{grandkid.name}}
                </us-side-nav-item>                
            </us-side-nav-item>
        </us-side-nav-item>
    </us-side-nav>
    {{selected}}
</div>
```



This library doesn't provide an actual component for side-nav, instead provides style over-rideds so you can use the bootstrap side-nav as-is.

```vue
<b-nav vertical>
    <us-side-nav-item active>Active</us-side-nav-item>
    <us-side-nav-item>Link</us-side-nav-item>
    <us-side-nav-item>Another Link</us-side-nav-item>
    <us-side-nav-item disabled>Disabled</us-side-nav-item>
</b-nav>    
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
    },
    methods: {

        select(colorMeta){

        },


    }
}
</script>