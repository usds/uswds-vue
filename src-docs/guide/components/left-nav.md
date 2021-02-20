# Left Navigation

<div class="mt-3 mb-3">
    <us-row>
        <us-col>
            <us-side-nav>
                <us-side-nav-item @click="link = 'Link 1'">Link 1</us-side-nav-item>
                <us-side-nav-item @click="link = 'Link 2'">Link 2</us-side-nav-item>
                <us-side-nav @click="link = 'Link 3'" title="Link 3 with children">
                    <us-side-nav-item @click="link = 'Child 1'">Child link 1</us-side-nav-item>
                    <us-side-nav-item @click="link = 'Child 2'">Child link 2</us-side-nav-item>
                    <us-side-nav @click="link = 'Link 4'" title="Link 4 with grand-children">
                        <us-side-nav-item @click="link = 'Grandchild 1'">Grandchild link 1</us-side-nav-item>
                        <us-side-nav-item @click="link = 'Grandchild 2'">Grandchild link 2</us-side-nav-item>
                    </us-side-nav>
                </us-side-nav>
                <us-side-nav-item @click="link = 'Link 5'">Link 5</us-side-nav-item>
                <us-side-nav-item @click="link = 'Link 6'">Link 6</us-side-nav-item>
            </us-side-nav>        
        </us-col>
        <us-col>
            <h3 class="ml-3">
                Selected:
                <span class="text-primary" v-if="link">{{link}}</span>
            </h3>
        </us-col>
    </us-row>
</div>

```vue
<us-side-nav>
    <us-side-nav-item @click="link = 'Link 1'">Link 1</us-side-nav-item>
    <us-side-nav-item @click="link = 'Link 2'">Link 2</us-side-nav-item>
    <us-side-nav @click="link = 'Link 3'" title="Link 3 with children">
        <us-side-nav-item @click="link = 'Child 1'">Child link 1</us-side-nav-item>
        <us-side-nav-item @click="link = 'Child 2'">Child link 2</us-side-nav-item>
        <us-side-nav @click="link = 'Link 4'" title="Link 4 with grand-children">
            <us-side-nav-item @click="link = 'Grandchild 1'">Grandchild link 1</us-side-nav-item>
            <us-side-nav-item @click="link = 'Grandchild 2'">Grandchild link 2</us-side-nav-item>
        </us-side-nav>
    </us-side-nav>
    <us-side-nav-item @click="link = 'Link 5'">Link 5</us-side-nav-item>
    <us-side-nav-item @click="link = 'Link 6'">Link 6</us-side-nav-item>
</us-side-nav>       
```

<script>
import Color from "color";
import _ from 'lodash';

export default {
    data() {
        return {
            link: null
        };
    },
    methods: {

        select(colorMeta){

        },


    }
}
</script>