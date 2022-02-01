# Accordion

An accordion is a list of headers that hide or reveal additional content when selected.

## Overview

<div class="mt-3 mb-3">
    <us-accordion variant="light">
        <us-accordion-item heading="First Amendment" expanded>
            Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
        </us-accordion-item>    
        <us-accordion-item heading="Second Amendment">
            A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
            <ul>
              <li>This is a list item</li>
              <li>Another list item</li>
            </ul>
        </us-accordion-item>    
        <us-accordion-item heading="Third Amendment">
          No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.
        </us-accordion-item>    
        <us-accordion-item heading="Fourth Amendment">
          The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.
        </us-accordion-item>    
        <us-accordion-item heading="Fifth Amendment">
          The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.
        </us-accordion-item>    
    </us-accordion>
</div>

```vue
<us-accordion variant="light">
    <us-accordion-item heading="First Amendment" expanded>
        Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
    </us-accordion-item>    
    <us-accordion-item heading="Second Amendment">
        A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
        <ul>
          <li>This is a list item</li>
          <li>Another list item</li>
        </ul>
    </us-accordion-item>    
    <us-accordion-item heading="Third Amendment">
      No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.
    </us-accordion-item>    
    <us-accordion-item heading="Fourth Amendment">
      The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.
    </us-accordion-item>    
    <us-accordion-item heading="Fifth Amendment">
      The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.
    </us-accordion-item>    
</us-accordion>
```

## Bordered

Add the `bordered` attribute on the `<us-accordion>` to make accordion items bordered.

<div class="mt-3 mb-3">
    <us-accordion variant="light" bordered>
        <us-accordion-item heading="First Amendment">
            Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
        </us-accordion-item>    
        <us-accordion-item heading="Second Amendment">
            A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
            <ul>
              <li>This is a list item</li>
              <li>Another list item</li>
            </ul>
        </us-accordion-item>    
    </us-accordion>
</div>

```vue
<us-accordion variant="light" bordered>
    <us-accordion-item heading="First Amendment">
        Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
    </us-accordion-item>    
    <us-accordion-item heading="Second Amendment">
        A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
        This is a list item
        Another list item
    </us-accordion-item>    
</us-accordion>
```

## Multi-Select

Add the `multi-select` attribute on the `<us-accordion>` to make accordion items stay open when another item is opened.

<div class="mt-3 mb-3">
    <us-accordion variant="light" bordered multi-select>
        <us-accordion-item heading="First Amendment">
            Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
        </us-accordion-item>    
        <us-accordion-item heading="Second Amendment">
            A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
            This is a list item
            Another list item
        </us-accordion-item>    
    </us-accordion>
</div>

## Variants

All components support the Bootstrap theme variants `info`,`primary`,`success`,`danger`,`warning`.

<span v-for="(variant,index) in ['info','primary','success','danger','warning']" :key="index">
    <h5 class="mt-3 mb-3 text-capitalize">{{variant}}</h5>
    <us-accordion :variant="variant" :bordered="true">
        <us-accordion-item heading="First Amendment">
            Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
        </us-accordion-item>    
        <us-accordion-item heading="Second Amendment">
            A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
            This is a list item
            Another list item
        </us-accordion-item>    
    </us-accordion>
</span>

## Vanilla HTML

<div class="mt-3 mb-3 usx-component accordion light" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

```html
<div class="usx-component accordion light" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
```

## Component Reference

### `<us-accordion>`

### Properties 

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| variant  | string | info | Applies one of the contextual color variants |
| bordered | boolean | false | When set, a border is rendered | 
| multi-select | boolean | false | When set, opened items stay open | 

### `<us-accordion-item>`

### Properties 

| Property | Type  | Default | Description |
| -------- | ----- | ------- | ----------- | 
| expanded  | boolean | false | During initial renders, sets the item as open |

### Slots

| Slot Name | Arguments | Description |
| -------- | ----- | ------- | ----------- | 
| title | none | Content for the header slot |
| default | none | Content for the item body |

### Further Reading

See [Alert documentation at USWDS](https://designsystem.digital.gov/components/alert/)
