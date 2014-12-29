/* global describe it before */
var expect = require("chai").expect;
var calculator = require("../lib/StringCalculator.js");

describe("String Calculator", function() {
    
    it("should return 0 when argument is empty string", function () {
        expect(calculator.add("")).to.equal(0);    
    });
    
    it("should return integer x when argument is 'x'", function() {
        expect(calculator.add("1")).to.equal(1);
        expect(calculator.add("100")).to.equal(100);
        expect(calculator.add("1000")).to.equal(1000);
    });
    
    it("should return integer x+y when argument is 'x,y'", function() {
        expect(calculator.add("1,2")).to.equal(1+2); 
    });
    
    it("should return integer x1+x2+..+xn when argument is 'x1,x2,..,xn'", function() {
        expect(calculator.add("1,2,3")).to.equal(1+2+3);
        expect(calculator.add("1,2,3,4")).to.equal(1+2+3+4); 
    });
    
    it("should throw Error when argument is 'x,'", function() {
       expect(calculator.add.bind(calculator,'1,')).to.throw(Error); 
    });
    
    it("should support delimiter [delimiter]\\[numbers...] ex.';\\1;2' == 3", function() {
        expect(calculator.add(";\\1;2")).to.equal(1+2);
    })
    
    it("should throw an exception 'negative not allowed' and the negative", function() {
        expect(calculator.add.bind(calculator,'1,-1')).to.throw('negative not allowed: -1'); 
    });
    
    it("should throw an exception 'negative not allowed' with list of negatives", function() {
        expect(calculator.add.bind(calculator,'1,-1,-2')).to.throw('negative not allowed: -1,-2'); 
    });
    
});