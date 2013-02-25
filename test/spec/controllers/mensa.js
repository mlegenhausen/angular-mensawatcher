'use strict';

describe('Controller: MensaCtrl', function() {
  var MensaCtrl;
  var scope;
  var nextMonday;

  // load the controller's module
  beforeEach(module('app'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    nextMonday = new Date();
    scope = {};
    MensaCtrl = $controller('MensaCtrl', {
      $scope: scope,
      mensa: [],
      isClosed: false,
      nextMonday: nextMonday
    });
  }));

  it('should show the injected attributes', function() {
    expect(scope.mensa).toEqual([]);
    expect(scope.isClosed).toBe(false);
    expect(scope.nextMonday).toBe(nextMonday);
  });
});
