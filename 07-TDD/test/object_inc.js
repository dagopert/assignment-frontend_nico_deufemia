'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var setup = require('../src/setup');
    var teardown = require('../src/teardown');

    before(setup);
    after(teardown);
    it('setup should have created array', function () {
        should.exist(objects_draft);
    });
    it('should create a valid object', function () {
        var object1 = new myObject('Hammer', 'Ein roter Hammer', '10,00');
        object1.should.have.property('id', 'name', 'description', 'price');
        object1.id.should.be.a.String();
        isUUID(object1.id).should.be.true();
    });
    it('should create a nullobject', function () {
        var nullobject = new myObject();
        nullobject.should.have.property('id', 'name', 'description', 'price');
        nullobject.id.not.be.ok();
    });
    it('toString() shoud return a String', function () {
        var test = new myObject("Name", "Description", "1,99");
        test.toString().should.be.a.String();
    });
};