// Import the `mount()` method from Vue Test Utils
import { mount } from '@vue/test-utils'
import { wrap } from 'lodash';
import UsFormCombobox from '../../../src/components/form/UsFormCombobox';


// https://vue-test-utils.vuejs.org/

const options2 = [
	{value: 'sojourner-truth', label: 'Sojourner Truth', default:true},
	{value: 'frederick-douglass', label: 'Frederick Douglass'},
	{value: 'booker-washington', label: 'Booker T. Washington'},
	{value: 'george-washington-carver', label: 'George Washington Carver', disabled:true}
];

test('displays message', async () => {
	
	// mount() returns a wrapped Vue component we can interact with
	const wrapper = mount(UsFormCombobox, {
		propsData: {
			options: ['Sojourner Truth', 'Frederick Douglass', 'Booker T. Washington', 'George Washington Carver'],
			value: 'Sojourner Truth'
		}
	});

	//await wrapper.setData('input', 'Sojourner Truth');
	//await wrapper.trigger('input', 'Sojourner Truth');

	//await Vue.nextTick()

	// Should emit input envent (v-model changed)
	//expect(wrapper.emitted().input).toBeTruthy()
	expect(wrapper.vm.currentValueLabel).toEqual('Sojourner Truth');

	// Assert the rendered text of the component
	
	//expect(wrapper.text()).toContain('Hello world')
})