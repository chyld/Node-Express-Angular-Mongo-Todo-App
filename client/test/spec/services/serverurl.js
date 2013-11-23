'use strict';

describe('Service: Serverurl', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var Serverurl;
  beforeEach(inject(function (_Serverurl_) {
    Serverurl = _Serverurl_;
  }));

  it('should do something', function () {
    expect(!!Serverurl).toBe(true);
  });

});
