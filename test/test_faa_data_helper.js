'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var FAADataHelper = require('../faa_data_helper');
chai.config.includeStack = true;

describe('FAADataHelper', function() {
  var subject = new FAADataHelper();
  var dbcity;
  describe('#getdbcityStatus', function() {
    context('with an invalid dbcity', function() {
  it('returns an error', function() {
    dbcity = 'Berlin';
    return expect(subject.getdbcityStatus(dbcity)).to.be.rejectedWith(Error);
  });
});
    context('with a valid dbcity code', function() {
      it('returns matching dbcity code', function() {
        dbcity = 'Berlin';
        var value = subject.getdbcityStatus(dbcity).then(function(obj) {
          return obj.IATA;
        });
        return expect(value).to.eventually.eq(dbcity);
      });
    });
  });
});
