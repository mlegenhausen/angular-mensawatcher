'use strict';

describe('Service: mensa', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var mensa;
  beforeEach(inject(function(_mensa_) {
    mensa = _mensa_;
  }));

  it('should do something', function () {
    expect(!!mensa).toBe(true);
  });

});
