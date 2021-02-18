# Colors and Theming

USWDS has an amazing and extensive system for dealing with colors, which is detailed [here](https://designsystem.digital.gov/design-tokens/color/overview/). USWDS in general is designed to be a super flexible framework, but this can be a overwhelming. Drawing inspiration from [Bootstrap](https://getbootstrap.com/), uswds-vue instead uses a simple color theme which makes it much simpler to manage and keep colors consistent across all of the components. But you can always go deeper and apply the color styles from USWDS manually.

## Variants

The basis for the theming setup in uswds-vue is `variants`. There are {{btnVariants.length}} variants, and these are applied to *every* component to keep a consistent look and make themeing much simpler.

<div class="mt-3 mb-3 usx-color-docs">
    <div v-for="(variant,index) in btnVariants" :key="index" class="usx-block" :class="[`bg-${variant}`, `text-${variant}`, `border-${variant}`]">
        {{variant}}
    </div>
</div>

## Theme Playground

<div class="mt-3 mb-3 usx-color-docs">  
    <us-row>
        <us-col>
            <span v-for="(color, index) in colorMap" :key="index">
                <span v-for="(meta, index) in color" :key="`meta-${index}`">
                    <div class="usxd-color-square" :class="meta.css" :title="meta.token" @click="setSelectedColor(meta)"></div>
                </span>
                <br/>
            </span>    
        </us-col>
        <us-col>
            <div v-if="selectedColor">
                <us-tag variant="light">{{selectedColor.hexColor}}</us-tag>
                <us-tag variant="info">{{selectedColor.grade}}</us-tag>
                <us-tag variant="info">{{selectedColor.token}}</us-tag>
                <us-tag variant="light" v-if="selectedColor.isLight">Light</us-tag>
                <us-tag variant="dark" v-if="!selectedColor.isLight">Dark</us-tag>
                <us-tag variant="success" v-if="selectedColor.vibrant">Vibrant</us-tag>
                <!--
                {{selectedColor.isLight}}
                {{selectedColor.token}}
                {{selectedColor.grade}}
                -->
            </div>
        </us-col>
    </us-row>
    <!--
        <div v-for="grade in colorGrades" :key="`base-${grade}`" class="usxd-color-square" :class="`bg-${color}-${grade}`">
        </div>
    <div v-for="(gcolor, gfIndex) in grayFamilies" :key="`gf-${gfIndex}`">
        <div v-for="(grade3, gIndex) in grayGrades" :key="gIndex" class="usxd-color-square" :class="`bg-${gcolor}-${grade3}`" :title="`${gcolor}-${grade3}`" @click="setSelectedColor(gcolor, grade3, false)">
        </div>
        {{gcolor}}
    </div>    
    -->
    
</div>


<script>
import Color from "color";
import _ from 'lodash';

export default {
    data() {
        return {
            txtShort: 'Lorem ipsum dolor sit amet, consectetur...',
            txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            isLoading: true,
            btnVariants: [
                'primary',
                'secondary',
                'info',
                'success',
                'danger',
                'warning',
                'light',
                'dark',
                'white',
                'black'
            ],
            selectedColor: null,
            colorMap: null,
            families: {    
                'gold': [
                    {variant: '',       vibrant: false}, 
                    {variant: '',       vibrant: true}
                ],
                'yellow': [
                    {variant: '',       vibrant: false}, 
                    {variant: '',       vibrant: true}
                ],
                'green': [
                    {variant: '-warm',   vibrant: false}, 
                    {variant: '-warm',   vibrant: true},
                    {variant: '',       vibrant: false}, 
                    {variant: '',       vibrant: true},
                    {variant: '-cool',   vibrant: false}, 
                    {variant: '-cool',   vibrant: true}
                ],                
                'mint': [
                    {variant: '',       vibrant: false}, 
                    {variant: '',       vibrant: true},
                    {variant: '-cool',   vibrant: false}, 
                    {variant: '-cool',   vibrant: true}                    
                ],
                'cyan': [
                    {variant: '',       vibrant: false}, 
                    {variant: '',       vibrant: true}
                ],
                'blue': [
                    {variant: '-cool',   vibrant: false}, 
                    {variant: '-cool',   vibrant: true},
                    {variant: '',       vibrant: false}, 
                    {variant: '',       vibrant: true},
                    {variant: '-warm',   vibrant: false}, 
                    {variant: '-warm',   vibrant: true}
                ], 
                'indigo': [
                    {variant: '-cool',   vibrant: false}, 
                    {variant: '-cool',   vibrant: true},
                    {variant: '',       vibrant: false}, 
                    {variant: '',       vibrant: true},
                    {variant: '-warm',   vibrant: false}, 
                    {variant: '-warm',   vibrant: true}
                ], 
                'violet': [
                    {variant: '',       vibrant: false}, 
                    {variant: '',       vibrant: true},
                    {variant: '-warm',   vibrant: false}, 
                    {variant: '-warm',   vibrant: true}                    
                ],
                'magenta': [
                    {variant: '',       vibrant: false}, 
                    {variant: '',       vibrant: true}
                ],
                'red': [
                    {variant: '-cool',   vibrant: false}, 
                    {variant: '-cool',   vibrant: true},
                    {variant: '',       vibrant: false}, 
                    {variant: '',       vibrant: true},
                    {variant: '-warm',   vibrant: false}, 
                    {variant: '-warm',   vibrant: true}
                ], 
                'orange': [
                    {variant: '-warm',   vibrant: false}, 
                    {variant: '-warm',   vibrant: true},
                    {variant: '',       vibrant: false}, 
                    {variant: '',       vibrant: true}
                ], 
                
            },
/*
            families: [        
                'gold',
                'yellow',
                'green-warm',
                'green': ['warm', '', 'cool'],
                'green-cool',
                'mint',
                'mint-cool',
                'cyan',
                'blue-cool',
                'blue',
                'blue-warm',
                'indigo-cool',
                'indigo',
                'indigo-warm',
                'violet',
                'violet-warm',
                'magenta',
                'red-cool',
                'red',
                'red-warm',
                'orange-warm',
                'orange',
            ],            
            */
            grayFamilies: [
                'gray', 
                'gray-cool', 
                'gray-warm'
            ],
            vividGrades: [5, 10, 20, 30, 40, 50, 60, 70, 80],
            colorGrades: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90],
            grayGrades: [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90]
        };
    },
    mounted(){
        
        this.colorMap = {};

        const addColor = (name, grade, isVibrant) => {
            let token = `${name}-${grade}`;
            if (isVibrant){
                token += 'v';
            }
            if (!this.colorMap[name]){
                this.colorMap[name] = [];
            }
            this.colorMap[name].push({
                css: `bg-${token}`,
                family: name,
                token: token,
                grade: grade,
                vibrant: isVibrant
            });

        }

        for (let baseColor in this.families){
            
            console.log('baseColor = ', baseColor)
            for (let k=0; k<this.families[baseColor].length; k+=1){
                
                let meta = this.families[baseColor][k];
                let fullName = baseColor + meta.variant;

                if (meta.vibrant){
                    for (let j=0; j<this.vividGrades.length; j+=1){
                        addColor(fullName, this.vividGrades[j], true);
                    }
                }
                else {
                    for (let j=0; j<this.colorGrades.length; j+=1){
                        addColor(fullName, this.colorGrades[j], false);
                    }
                }

            }

        }

    },
    methods: {

        setSelectedColor(colorMeta){
            let el = document.querySelector('.'+colorMeta.css);
            let style = window.getComputedStyle(el);
            const color = Color(style.backgroundColor);
            const hslInfo = color.hsl().object();
            

            if (!color){
                throw new Error(`Could not create color for `, style)
            }

            let hexCol = color.hex();

            console.log('Selected ', hexCol);

            /*
            Magic number
            We call the difference in grade between any two colors the magic number. Magic numbers have important contrast implications:

            A magic number of 40+ results in WCAG 2.0 AA Large Text contrast (example: gray-90 and indigo-warm-50v).
            A magic number of 50+ results in WCAG 2.0 AA contrast or AAA Large Text contrast (example: gray-90 and red-40).
            A magic number of 70+ results in WCAG 2.0 AAA contrast (example: gray-10 and red-80).
            Colors of grade 50 result in Section 508 AA contrast against both pure white (grade 0) and pure black (grade 100).
            Use USWDS magic numbers to choose accessible color combinations from any palette and color family.
            */

            this.selectedColor = {
                hexColor: hexCol,
                rgbCol: color.object(),
                isLight: color.isLight(),
                hsl: hslInfo,
                //luminosity: color2.luminosity(),
                //contrast: color2.contrast(),
                family: colorMeta.name,
                token: colorMeta.token,
                grade: colorMeta.grade,
                vibrant: colorMeta.vibrant
            };

        },


    }
}
</script>
<style lang="scss">
    
    @import "../../../src/styles/all-colors.scss";

    .usxd-color-square {
        display: inline-block;
        width: 25px;
        height: 25px;
    }

    .usx-color-docs {
        .usx-block {
            width: 120px;
            height: 100px;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            line-height: 100px;
            display: inline-block;
            margin-right: 5px;
            margin-bottom: 5px;
        }
    }

</style>