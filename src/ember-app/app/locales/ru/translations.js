import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProba_11ГородLForm from './forms/i-i-s-proba-11-город-l';
import IISProba_11КвартираLForm from './forms/i-i-s-proba-11-квартира-l';
import IISProba_11НомерДомLForm from './forms/i-i-s-proba-11-номер-дом-l';
import IISProba_11УлицаLForm from './forms/i-i-s-proba-11-улица-l';
import IISProba_11ЭтажLForm from './forms/i-i-s-proba-11-этаж-l';
import IISProba_11ГородEForm from './forms/i-i-s-proba-11-город-e';
import IISProba_11КвартираEForm from './forms/i-i-s-proba-11-квартира-e';
import IISProba_11НомерДомEForm from './forms/i-i-s-proba-11-номер-дом-e';
import IISProba_11УлицаEForm from './forms/i-i-s-proba-11-улица-e';
import IISProba_11ЭтажEForm from './forms/i-i-s-proba-11-этаж-e';
import IISProba_11ГородModel from './models/i-i-s-proba-11-город';
import IISProba_11КвартираModel from './models/i-i-s-proba-11-квартира';
import IISProba_11НомерДомModel from './models/i-i-s-proba-11-номер-дом';
import IISProba_11УлицаModel from './models/i-i-s-proba-11-улица';
import IISProba_11ЭтажModel from './models/i-i-s-proba-11-этаж';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba-11-город': IISProba_11ГородModel,
    'i-i-s-proba-11-квартира': IISProba_11КвартираModel,
    'i-i-s-proba-11-номер-дом': IISProba_11НомерДомModel,
    'i-i-s-proba-11-улица': IISProba_11УлицаModel,
    'i-i-s-proba-11-этаж': IISProba_11ЭтажModel
  },

  'application-name': 'Proba_11',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proba_11',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba_11',
          title: 'Proba_11'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
          },
          'i-i-s-proba-11-этаж-l': {
            caption: 'ЭтажL',
            title: ''
          },
          'i-i-s-proba-11-квартира-l': {
            caption: 'Квартира',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proba-11-город-l': IISProba_11ГородLForm,
    'i-i-s-proba-11-квартира-l': IISProba_11КвартираLForm,
    'i-i-s-proba-11-номер-дом-l': IISProba_11НомерДомLForm,
    'i-i-s-proba-11-улица-l': IISProba_11УлицаLForm,
    'i-i-s-proba-11-этаж-l': IISProba_11ЭтажLForm,
    'i-i-s-proba-11-город-e': IISProba_11ГородEForm,
    'i-i-s-proba-11-квартира-e': IISProba_11КвартираEForm,
    'i-i-s-proba-11-номер-дом-e': IISProba_11НомерДомEForm,
    'i-i-s-proba-11-улица-e': IISProba_11УлицаEForm,
    'i-i-s-proba-11-этаж-e': IISProba_11ЭтажEForm
  },

});

export default translations;
