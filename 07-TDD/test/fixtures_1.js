var should = require('should')
var fixtures = require('node-fixtures')
var updateOBJ = require('../src/updateOBJ')

describe('fixtures', function() {
    it('should read name of object 1 in objects fixture', function(){
        //fixtures.objects.object1.name; returns ("Hammer")
        fixtures.objects.object1.name.should.equal("Hammer")
    })

    it('should read name of object 2 in objects fixture', function(){
        fixtures.objects.object2.name.should.equal('Nagel')
    })

    it('should read description of object 1 in objects fixture', function(){
        fixtures.objects.object1.description.should.equal('Ein roter Hammer')
    })

    it('should update description of object 1 in objects fixture', function(){
        var result = updateOBJ(fixtures.objects.object1, 'description', 'Ein blauer Hammer')
        result.should.equal('Ein blauer Hammer')
    })

    it('should update name of object 2 in objects fixture', function(){
        var result = updateOBJ(fixtures.objects.object2, 'name', 'Nägel')
        result.should.equal('Nägel')
    })

})
