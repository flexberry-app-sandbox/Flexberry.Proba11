import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba-11-номер-дом', 'Unit | Serializer | i-i-s-proba-11-номер-дом', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proba-11-номер-дом',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-proba-11-город',
    'model:i-i-s-proba-11-квартира',
    'model:i-i-s-proba-11-номер-дом',
    'model:i-i-s-proba-11-улица',
    'model:i-i-s-proba-11-этаж',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
