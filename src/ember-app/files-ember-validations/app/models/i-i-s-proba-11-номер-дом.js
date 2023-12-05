import {
  defineNamespace,
  defineProjections,
  Model as НомерДомMixin
} from '../mixins/regenerated/models/i-i-s-proba-11-номер-дом';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НомерДомMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
