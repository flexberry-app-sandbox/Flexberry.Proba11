import { Serializer as НомерДомSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proba-11-номер-дом';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(НомерДомSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
