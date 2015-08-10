import Ember from 'ember';

import startApp from '../../tests/helpers/start-app';
import { module, test } from 'qunit';

var App;

module('Acceptance - Parallax', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Load the demo page', function(assert) {
  visit('/parallax');

  andThen(function () {
    assert.ok(true, 'If this is passing, this page has no deprecation warnings');
  });
});