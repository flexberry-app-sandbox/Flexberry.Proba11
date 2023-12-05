import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  назв: DS.attr('string'),
  этаж: DS.belongsTo('i-i-s-proba-11-этаж', { inverse: null, async: false })
});

export let ValidationRules = {
  назв: {
    descriptionKey: 'models.i-i-s-proba-11-номер-дом.validations.назв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  этаж: {
    descriptionKey: 'models.i-i-s-proba-11-номер-дом.validations.этаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НомерДомE', 'i-i-s-proba-11-номер-дом', {
    назв: attr('', { index: 0 })
  });

  modelClass.defineProjection('НомерДомL', 'i-i-s-proba-11-номер-дом', {
    назв: attr('', { index: 0 }),
    этаж: belongsTo('i-i-s-proba-11-этаж', '', {
      номер: attr('', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
