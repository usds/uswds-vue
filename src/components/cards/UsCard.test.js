// Import the `mount()` method from Vue Test Utils
import {mount} from '@vue/test-utils';
import UsCardHeader from './UsCardHeader';
import UsCardFooter from './UsCardFooter';
import UsCardBody from './UsCardBody';
import UsCard from './UsCard';

const testData = {
    title: 'Test Title',
    footer: 'Footer test content',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}

test('title prop', () => {

    const wrapper = mount(UsCard, {
        stubs: {
            'us-card-header': UsCardHeader, 
            'us-card-footer': UsCardFooter, 
            'us-card-body': UsCardBody
        },
        propsData: {
            title: testData.title
        }
    })

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain(testData.title)
})


test('title prop with footer child', () => {

    const wrapper = mount(UsCard, {
        stubs: {
            'us-card-header': UsCardHeader, 
            'us-card-footer': UsCardFooter, 
            'us-card-body': UsCardBody
        },
        slots: {
            default: `<us-card-footer>${testData.footer}</us-card-footer>`
        },
        propsData: {
            title: testData.title
        }
    })

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain(testData.title)
    expect(wrapper.text()).toContain(testData.footer)
})