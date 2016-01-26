'use strict';

var _object_inc = require('./object_inc');

var _object_inc2 = _interopRequireDefault(_object_inc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var should = require('should');

describe('MyObject', function () {
    var setup = require('../src/setup');
    var teardown = require('../src/teardown');
    before(setup);
    after(teardown);

    it('should create a valid object', function () {
        var object1 = new _object_inc2.default('Hammer', 'Ein roter Hammer', '10,00');
        object1.should.have.property('id');
        object1.should.have.property('name');
        object1.should.have.property('price');
        object1.should.have.property('id');
        object1.id.should.be.a.Number();
        //isUUID(object1.id).should.be.true();
    });
    it('should create a nullobject', function () {
        var nullobject = new _object_inc2.default();
        nullobject.should.have.property('id', 'name', 'description', 'price');
        nullobject.id.not.be.ok();
    });
    it('toString() shoud return a String', function () {
        var test = new _object_inc2.default("Name", "Description", "1,99");
        test.toString().should.be.a.String();
    });
});