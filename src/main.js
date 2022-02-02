import Logger from './utils/Logger';
import 'bootstrap';

import UsAlert from './components/UsAlert';
import UsAccordion from './components/accordion/UsAccordion.vue';
import UsAccordionItem from './components/accordion/UsAccordionItem.vue';
import UsCard from './components/cards/UsCard';
import UsForm from './components/form/UsForm';
import UsFormInput from './components/form/UsFormInput';
import UsFormInputMasked from './components/form/UsFormInputMasked';
import UsFormTextarea from './components/form/UsFormTextarea';
import UsFormGroup from './components/form/UsFormGroup';
import UsFormCombobox from './components/form/UsFormCombobox';
import UsFormDate from './components/form/UsFormDate';
//import UsFormDateRange from './components/form/UsFormDateRange';
//import UsFormDatePicker from './components/form/UsFormDatePicker';
import UsFormRadio from './components/form/UsFormRadio';
import UsFormBoolean from './components/form/UsFormBoolean';
import UsFormCheckbox from './components/form/UsFormCheckbox';
import UsStepIndicator from './components/form/UsStepIndicator';
import UsButton from './components/UsButton';
import UsButtonGroup from './components/UsButtonGroup';
//import UsButtonGroup from './components/UsButtonGroup';
import UsBadge from './components/UsBadge';
import UsImg from './components/UsImg';
import UsHeader from './components/header/UsHeader';
import UsFooter from './components/UsFooter';
import UsNavItem from './components/header/UsNavItem';
import UsHeaderNav from './components/header/UsHeaderNav';
import UsSideNavItem from './components/side-nav/UsSideNavItem';
import UsSideNav from './components/side-nav/UsSideNav';
import UsHeaderBrand from './components/header/UsHeaderBrand';
import UsOfficialHeader from './components/header/UsOfficialHeader';
import UsContainer from './components/layout/UsContainer';
import UsRow from './components/layout/UsRow';
import UsCol from './components/layout/UsCol';
import UsTab from './components/tabs/UsTab';
import UsTabs from './components/tabs/UsTabs';
import UsListGroup from './components/lists/UsListGroup';
import UsListGroupItem from './components/lists/UsListGroupItem';
import UsTable from './components/UsTable';
import UsModal from './components/UsModal';
import UsProgress from './components/UsProgress';

// Debug components
import UsResponsiveInfo from './components/debug/UsResponsiveInfo';

export const Components = {
    UsAlert,
    UsAccordion,
    UsAccordionItem,
    UsSideNav,
    UsSideNavItem,
    UsRow,
    UsCol,
    UsTab,
    UsTabs,
    UsBadge,
    'UsTag': UsBadge,
    UsCard,
    UsButton,
    UsButtonGroup,
    UsForm,
    UsFormInput,
    UsFormInputMasked,
    UsFormTextarea,
    UsFormGroup,
    UsFormCombobox,
    UsFormCheckbox,
    UsFormRadio,
    UsFormDate,
    //UsFormDatePicker,
    //UsFormDateRange,
    UsFormBoolean,
    UsImg,
    UsHeader,
    UsNavItem,
    UsHeaderNav,
    UsContainer,
    UsOfficialHeader,
    UsHeaderBrand,
    UsFooter,
	UsResponsiveInfo,
	UsListGroup,
    UsListGroupItem,
    UsStepIndicator,
    UsTable,
    UsModal,
    UsProgress
};

/**
 * Install function to enable global install;
 * import { UswdsVue } from 'uswds-vue';
 * Vue.use(UswdsVue);
 *
 * @param {*} Vue
 * @param {*} config
 */
const UswdsVue = {
    install(Vue, config = {}) {

        Vue.use(Logger);

        Object.keys(Components).forEach((name) => {
            Vue.component(name, Components[name]);
        });

        if (config.bootstrap) {
            // Layer in bootstrap utility styles...
        }
    }
};

export { UswdsVue };

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(UswdsVue);
}

// Export utils
import Validator from './utils/Validator';
export {Validator}

