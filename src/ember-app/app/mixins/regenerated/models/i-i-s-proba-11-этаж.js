import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('string')
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-proba-11-этаж.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЭтажE', 'i-i-s-proba-11-этаж', {
    номер: attr('', { index: 0 })
  });

  modelClass.defineProjection('ЭтажL', 'i-i-s-proba-11-этаж', {
    номер: attr('', { index: 0 })
  });
};
