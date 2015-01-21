/* global describe it before */

var expect = require("chai").expect;
var fb = require("../lib/FizzBuzz.js");


describe("FizzBuzz", function() {
   
   it("should return numbers in string ", function () {
       expect(fb.fizzbuzz(1)).is.equal("1");
       expect(fb.fizzbuzz(2)).is.equal("2");
   });
   
   it("should return Fizz instead number which is divisible by 3", function(){
      expect(fb.fizzbuzz(3)).is.equal("Fizz"); 
      expect(fb.fizzbuzz(6)).is.equal("Fizz"); 
      expect(fb.fizzbuzz(9)).is.equal("Fizz"); 
      expect(fb.fizzbuzz(12)).is.equal("Fizz"); 
   });
   
   it ("should return Buzz instead number which is divisible by 5", function() {
       expect(fb.fizzbuzz(5)).is.equal("Buzz"); 
       expect(fb.fizzbuzz(10)).is.equal("Buzz"); 
       expect(fb.fizzbuzz(20)).is.equal("Buzz"); 
   });
   
   it("should return FizzBuzz instead of number which is divisible by both 3 and 5", function() {
       expect(fb.fizzbuzz(3*5)).is.equal("FizzBuzz"); 
       expect(fb.fizzbuzz(6*5)).is.equal("FizzBuzz"); 
       expect(fb.fizzbuzz(9*5)).is.equal("FizzBuzz"); 
   });
   
    
});