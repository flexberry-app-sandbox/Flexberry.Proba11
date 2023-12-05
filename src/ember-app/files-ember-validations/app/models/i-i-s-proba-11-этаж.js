import {
  defineNamespace,
  defineProjections,
  Model as ЭтажMixin
} from '../mixins/regenerated/models/i-i-s-proba-11-этаж';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЭтажMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
