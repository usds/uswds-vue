import UsAlert from './components/UsAlert';
import UsCard from './components/cards/UsCard';
import UsCardGroup from './components/cards/UsCardGroup';
import UsForm from './components/form/UsForm';
import UsFormInput from './components/form/UsFormInput';
import UsFormTextarea from './components/form/UsFormTextarea';
import UsFormGroup from './components/form/UsFormGroup';
import UsFormCombobox from './components/form/UsFormCombobox';
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

// Extended components
import UsValidatedForm from './components/form-extended/UsValidatedForm';
//import UsValidatedFormWizard from './components/form-extended/UsValidatedFormWizard';

import UsValidatedInput from './components/form-extended/UsValidatedInput';
import UsValidatedText from './components/form-extended/inputs/UsValidatedText';
import UsValidatedCombobox from './components/form-extended/inputs/UsValidatedCombobox';
import UsValidatedCheckbox from './components/form-extended/inputs/UsValidatedCheckbox';
import UsValidatedRadio from './components/form-extended/inputs/UsValidatedRadio';
import UsValidatedBoolean from './components/form-extended/inputs/UsValidatedBoolean';
import UsValidatedMaskedText from './components/form-extended/inputs/UsValidatedMaskedText';
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
    UsFormTextarea,
    UsFormGroup,
    UsFormCombobox,
    UsFormCheckbox,
    UsFormRadio,
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

    UsValidatedInput,
    UsValidatedText,
    UsValidatedCombobox,
    UsValidatedCheckbox,
    UsValidatedRadio,
    UsValidatedBoolean,
    UsValidatedMaskedText,
    UsValidatedForm,
    //UsValidatedFormWizard
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
