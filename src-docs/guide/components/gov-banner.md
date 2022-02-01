# Official Banner

## The “official government website” banner

We recommend that all federal government sites include the “official government website” banner and a logo or site name. The banner clearly identifies your site as part of the United States government, while a logo or site name helps visitors understand who you are and what you do.

### Light Variant

<div>    
    <us-official-header variant="light" class="mt-2"/>
</div>

```vue
<us-official-header variant="light" class="mt-2"/>
```

### Dark Variant

<div>    
    <us-official-header variant="dark" class="mt-2"/>
</div>

```vue
<us-official-header variant="dark" class="mt-2"/>
```

### Locale

<div>    
    <us-official-header variant="light" :locale="locale" class="mt-2 mb-2"/>
    <us-button v-if="locale == 'en'" variant="primary" @click="locale = 'es'">Change to Spanish</us-button>
    <us-button v-else variant="primary" @click="locale = 'en'">Change to English</us-button>
</div>

```vue
<us-official-header variant="dark" :locale="locale" class="mt-2"/>
```


## Guidance

## When to use the banner component

To identify as an official government site. Most government sites should use the banner.
When to consider something else

If you don’t use a .gov/.mil domain and HTTPS. The banner text identifies .gov/.mil domains and HTTPS as indicators that a website is an official government website. Use the banner only if your site uses both the proper TLD and HTTPS.
Any time it would be misleading. The banner should be used to reduce confusion. Avoid using the banner on any site meant only for testing or otherwise not meant to be identified as an official government website.

## Usability guidance

Use the provided text without customization. The banner is most effective as an identifier and a learning tool when its message is consistent across government websites. With only a few exceptions (see Implementation guidance), sites should use the TLD-appropriate text provided, unaltered. Use the Spanish version of the banner for Spanish-language websites.

Use the version appropriate to your website’s TLD. If your project uses a .mil top-level domain, use the .mil banner text.
Show the banner on every page. Use the banner at the top of every page of a site. It can be confusing or misleading if it appears on some pages and not others.

## Avoid distraction. 

The banner appears on every page of your site. Choose background colors that fit with your site theme and avoid color combinations that draw excessive attention to the banner.
Keep the text up-to-date. Use the most current version of the banner.

## Accessibility

Use `aria-label` to give the banner a useful name. Our default markup uses `aria-label="official government website"` to distinguish the banner header from the main header.

The banner’s accordion uses javascript to set the `aria-hidden` value of its content area. To ensure that your content is accessible in the event that the JavaScript does not load or is disabled, you should not set `aria-hidden="true"`.

## Using the banner component

Some .mil websites do not belong to an official U.S. Department of Defense organization. These sites should adapt the Official websites use .mil section to use more technically accurate language: “A .mil website operates under the approval authority of the U.S. Department of Defense.”.
The banner should directly follow the skipnav component.
Set the banner background color with $theme-banner-background-color. Banner text will update automatically.

<script>
export default {
    data() {
        return {
            locale: 'en'
        };
    }
}
</script>