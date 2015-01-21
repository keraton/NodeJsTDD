var fizzbuzz = function(number) {
    var fizzBuzz = "";
    if (isDivisibleBy3(number))
        fizzBuzz += "Fizz";
    if (isDivisibleBy5(number))
        fizzBuzz += "Buzz";
        
    return is(fizzBuzz) ? fizzBuzz : getNumber(number);
}

var isDivisibleBy3 = function (number) {
    return number % 3 == 0;
}

var isDivisibleBy5 = function(number) {
    return number % 5 == 0;
}

var getNumber = function (number) {
    return number +"";
}

var is = function (fizzBuzz) {
    return fizzBuzz != "";
} 

// Export 
exports.fizzbuzz = fizzbuzz;