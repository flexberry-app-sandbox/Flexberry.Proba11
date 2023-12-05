import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proba-11-город-l');
  this.route('i-i-s-proba-11-город-e',
  { path: 'i-i-s-proba-11-город-e/:id' });
  this.route('i-i-s-proba-11-город-e.new',
  { path: 'i-i-s-proba-11-город-e/new' });
  this.route('i-i-s-proba-11-номер-дом-l');
  this.route('i-i-s-proba-11-номер-дом-e',
  { path: 'i-i-s-proba-11-номер-дом-e/:id' });
  this.route('i-i-s-proba-11-номер-дом-e.new',
  { path: 'i-i-s-proba-11-номер-дом-e/new' });
  this.route('i-i-s-proba-11-улица-l');
  this.route('i-i-s-proba-11-улица-e',
  { path: 'i-i-s-proba-11-улица-e/:id' });
  this.route('i-i-s-proba-11-улица-e.new',
  { path: 'i-i-s-proba-11-улица-e/new' });
  this.route('i-i-s-proba-11-этаж-l');
  this.route('i-i-s-proba-11-этаж-e',
  { path: 'i-i-s-proba-11-этаж-e/:id' });
  this.route('i-i-s-proba-11-этаж-e.new',
  { path: 'i-i-s-proba-11-этаж-e/new' });
});

export default Router;
