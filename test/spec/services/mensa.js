'use strict';

describe('Service: Mensa', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var Mensa;
  beforeEach(inject(function(_Mensa_) {
    Mensa = _Mensa_;
  }));

  it('should do something', function () {
    expect(!!Mensa).toBe(true);
  });

});
