import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЭтажMixin
} from '../mixins/regenerated/models/i-i-s-proba-11-этаж';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЭтажMixin, Validations, {
});

defineProjections(Model);

export default Model;
