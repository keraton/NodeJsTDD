/* global describe it before */

var expect = require("chai").expect;
var stringSelfIndex = require("../lib/StringSelfIndex.js");

 
describe("StringSelfIndex", function(){
    
    it('should return an empty array if the input is null', function() {
        expect(stringSelfIndex.index()).to.be.empty();           
    });
    
    it("shoulde return an empty array if the input is empty", function() {
       expect(stringSelfIndex.index("")).to.be.empty();
    });
    
    it('should return non empty array if the input is not empty', function() {
       expect(stringSelfIndex.index("a")).to.be.not.empty();
    });
    
    it('should have the sumber number of elements as the input', function() {
        expect(stringSelfIndex.index("a").length).is.equal(1);
        expect(stringSelfIndex.index("aa").length).is.equal(2);
        expect(stringSelfIndex.index("aaa").length).is.equal(3);
    });
    
    it ('should have -1 for the first value of the index array', function() {
       expect(stringSelfIndex.index("a")).is.eql([-1]); 
    });
    
    it('should have 0 for the second value', function() {
       expect(stringSelfIndex.index("ab")).is.eql([-1,0]);
    });
    
    it('should input[n] = input[n-1] + 1 when input[n-1] == input[output[n-1]]', function() {
        expect(stringSelfIndex.index("aab")).is.eql([-1,0,1]);
        expect(stringSelfIndex.index("abc")).is.eql([-1,0,0]);
        expect(stringSelfIndex.index("babc")).is.eql([-1,0,0,1]);
        expect(stringSelfIndex.index("abcd")).is.eql([-1,0,0,0]);
        expect(stringSelfIndex.index("aaad")).is.eql([-1,0,1,2]);
        expect(stringSelfIndex.index("aaaad")).is.eql([-1,0,1,2,3]);
    });
    
    
});