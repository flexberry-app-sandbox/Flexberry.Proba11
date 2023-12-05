import { Serializer as ЭтажSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proba-11-этаж';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЭтажSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
