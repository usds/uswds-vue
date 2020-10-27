# Form Validation <Badge text="extension"/>

## Basic Usage 

Docs coming soon.....



<script>
export default {
    data() {
        return {
            formData1: {},
            formData2: {},
            formData3: {},
            config0: [
                {label: 'Enter some text', type:'text', name: 'textField', description: 'This is a validated text input', key:'text-1', required: true},
            ],
            config1: [
                {label: 'Enter some text', type:'text', name: 'textField', description: 'This is a validated text input', key:'text-1', required: true},
                {label: 'What is your Phone number', type:'phone-us', name: 'phoneField', description: 'This is a US phone number, and uses a mask to enforce it', key:'phone-1', required: true},
                {label: 'What is your SSN?', type:'ssn', name: 'ssnField', description: 'This is a US social security number, and uses a mask to enforce it', key:'ssn-1', required: true},
                {label: 'What is your zip code?', type:'zip', name: 'zipField', description: 'This is a validated zip code input', key:'zip-1', required: true},
                {label: 'Pick one', type:'combobox', options: ['option 1', 'option 2', 'option 3'], name: 'comboboxField', description: 'This is a validated combobox, you must pick one', key:'combo-1', required: true},
                {label: 'Pick one', type:'radio', options: ['option 1', 'option 2', 'option 3'], name: 'radioField', description: 'This is a validated radio, you must pick one', key:'radio-1', required: true},
                {label: 'Yes or no?', type:'boolean', name: 'booleanField', description: 'This is a validated boolean field', key:'bool-1', required: true}
            ],
            config2: [
                [
                    {
                        label: 'Enter some text', 
                        type: 'text', 
                        name: 'textField', 
                        description: 'This is a validated text input', 
                        key:'text-1', 
                        required: true, 
                        col: {md: 6}
                    },
                    {
                        label: 'What is your Phone number', 
                        type: 'phone-us', 
                        name: 'phoneField', 
                        description: 'This is a US phone number, and uses a mask to enforce it', 
                        key:'phone-1', 
                        required: true, 
                        col: {md: 6}
                    }
                ]
            ]
        };
    },
    computed: {
        pages() {
            return [
                {title: 'Page 1', fields: this.config1},
                {title: 'Page 2', fields: this.config2}
            ];
        }
    },
    methods: {
        onSubmit(){

        }
    }
}
</script>