import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as НомерДомMixin
} from '../mixins/regenerated/models/i-i-s-proba-11-номер-дом';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НомерДомMixin, Validations, {
});

defineProjections(Model);

export default Model;
