import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProba_11ГородLForm from './forms/i-i-s-proba-11-город-l';
import IISProba_11НомерДомLForm from './forms/i-i-s-proba-11-номер-дом-l';
import IISProba_11УлицаLForm from './forms/i-i-s-proba-11-улица-l';
import IISProba_11ГородEForm from './forms/i-i-s-proba-11-город-e';
import IISProba_11НомерДомEForm from './forms/i-i-s-proba-11-номер-дом-e';
import IISProba_11УлицаEForm from './forms/i-i-s-proba-11-улица-e';
import IISProba_11ГородModel from './models/i-i-s-proba-11-город';
import IISProba_11НомерДомModel from './models/i-i-s-proba-11-номер-дом';
import IISProba_11УлицаModel from './models/i-i-s-proba-11-улица';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba-11-город': IISProba_11ГородModel,
    'i-i-s-proba-11-номер-дом': IISProba_11НомерДомModel,
    'i-i-s-proba-11-улица': IISProba_11УлицаModel
  },

  'application-name': 'Proba_11',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proba_11',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba_11',
          title: 'Proba_11'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'proba-11': {
          caption: 'Proba_11',
          title: 'Proba_11',
          'i-i-s-proba-11-город-l': {
            caption: 'Город',
            title: ''
          },
          'i-i-s-proba-11-улица-l': {
            caption: 'Улица',
            title: ''
          },
          'i-i-s-proba-11-номер-дом-l': {
            caption: 'НомерДомL',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba-11-город-l': IISProba_11ГородLForm,
    'i-i-s-proba-11-номер-дом-l': IISProba_11НомерДомLForm,
    'i-i-s-proba-11-улица-l': IISProba_11УлицаLForm,
    'i-i-s-proba-11-город-e': IISProba_11ГородEForm,
    'i-i-s-proba-11-номер-дом-e': IISProba_11НомерДомEForm,
    'i-i-s-proba-11-улица-e': IISProba_11УлицаEForm
  },

});

export default translations;
