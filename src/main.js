import UsAlert from './components/UsAlert';
import UsCard from './components/cards/UsCard';
import UsCardGroup from './components/cards/UsCardGroup';
import UsForm from './components/form/UsForm';
import UsFormInput from './components/form/UsFormInput';
import UsFormInputMasked from './components/form/UsFormInputMasked';
import UsFormTextarea from './components/form/UsFormTextarea';
import UsFormGroup from './components/form/UsFormGroup';
import UsFormCombobox from './components/form/UsFormCombobox';
import UsFormDate from './components/form/UsFormDate';
import UsFormDateRange from './components/form/UsFormDateRange';
import UsFormDatePicker from './components/form/UsFormDatePicker';
import UsFormRadio from './components/form/UsFormRadio';
import UsFormBoolean from './components/form/UsFormBoolean';
import UsFormCheckbox from './components/form/UsFormCheckbox';
import UsStepIndicator from './components/form/UsStepIndicator';
import UsButton from './components/UsButton';
import UsButtonGroup from './components/UsButtonGroup';
import UsTag from './components/UsTag';
import UsPill from './components/UsPill';
import UsImg from './components/UsImg';
import UsHeader from './components/header/UsHeader';
import UsFooter from './components/UsFooter';
import UsNavItem from './components/header/UsNavItem';
import UsHeaderNav from './components/header/UsHeaderNav';
import UsHeaderBrand from './components/header/UsHeaderBrand';
import UsOfficialHeader from './components/header/UsOfficialHeader';
import UsContainer from './components/layout/UsContainer';
import UsRow from './components/layout/UsRow';
import UsCol from './components/layout/UsCol';
import UsTab from './components/tabs/UsTab';
import UsTabs from './components/tabs/UsTabs';
import UsListGroup from './components/lists/UsListGroup';
import UsListGroupItem from './components/lists/UsListGroupItem';

// Utils
import Validator from './utils/Validator';

// Debug components
import UsResponsiveInfo from './components/debug/UsResponsiveInfo';

const Components = {
    UsPill,
    UsTag,
    UsRow,
    UsCol,
    UsTab,
    UsTabs,
    UsAlert,
    UsCard,
    UsCardGroup,
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
    UsFormDatePicker,
    UsFormDateRange,
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
    Validator
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

/**
 * Export components individually as an alternative
 */
//Object.keys(Components).forEach(name => {
//	export Components[name];
//});
