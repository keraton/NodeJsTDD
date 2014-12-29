var expect = require("chai").expect;
var tag = require("../lib/tag.js");

 
describe("Tag", function(){
    
    it('should be equals to "tag"', function() {
        expect(tag.parse()).to.equal('tag');            
    });
    
});
