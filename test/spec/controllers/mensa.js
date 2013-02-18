'use strict';

describe('Controller: MensaCtrl', function() {

  // load the controller's module
  beforeEach(module('app'));

  var MensaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    MensaCtrl = $controller('MensaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
