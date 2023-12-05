import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('string'),
  квартира: DS.belongsTo('i-i-s-proba-11-квартира', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-proba-11-этаж.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  квартира: {
    descriptionKey: 'models.i-i-s-proba-11-этаж.validations.квартира.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЭтажE', 'i-i-s-proba-11-этаж', {
    номер: attr('Назв', { index: 0 }),
    квартира: belongsTo('i-i-s-proba-11-квартира', 'Квартира', {
      номерКв: attr('Назв', { index: 2 })
    }, { index: 1 })
  });

  modelClass.defineProjection('ЭтажL', 'i-i-s-proba-11-этаж', {
    номер: attr('Назв', { index: 0 }),
    квартира: belongsTo('i-i-s-proba-11-квартира', 'Назв', {
      номерКв: attr('Назв', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
