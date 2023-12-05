import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  назв: DS.attr('string'),
  номерДом: DS.belongsTo('i-i-s-proba-11-номер-дом', { inverse: null, async: false })
});

export let ValidationRules = {
  назв: {
    descriptionKey: 'models.i-i-s-proba-11-улица.validations.назв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерДом: {
    descriptionKey: 'models.i-i-s-proba-11-улица.validations.номерДом.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УлицаE', 'i-i-s-proba-11-улица', {
    назв: attr('Назв', { index: 0 }),
    номерДом: belongsTo('i-i-s-proba-11-номер-дом', '', {
      назв: attr('', { index: 1 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('УлицаL', 'i-i-s-proba-11-улица', {
    назв: attr('Назв', { index: 0 }),
    номерДом: belongsTo('i-i-s-proba-11-номер-дом', '', {
      назв: attr('', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
