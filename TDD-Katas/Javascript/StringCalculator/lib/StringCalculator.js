var sum = function(prev, current) {
    return prev + current;
}

var stringToInt = function(input) {
    var int = parseInt(input);
    if (isNaN(int)) 
        throw new Error('Input is not integer');
    return int;
}

var sumOfNumbers = function (numbers, delimiter) {
    return numbers.split(delimiter)
                .map(stringToInt)
                .reduce(sum,0); 
    
}

var getDelimeterAndNumbers = function (arg) {
    var arr = arg.split('\\');
    return {
                numbers : arr[1] || arg,
                delimiter : arr.length == 1 ? ',' : arr[0]
            }
}

var throwIfContainsNegative = function(numbers, delimiter) {
    var negativeNumber = numbers.split(delimiter)
                                .filter(function (x){ return x<0});
    if(negativeNumber.length >0)
        throw 'negative not allowed: ' + negativeNumber.join(',');
}

var addNonEmpty = function(arg) {
    var tuple = getDelimeterAndNumbers(arg);
    throwIfContainsNegative(tuple.numbers, tuple.delimiter);
    return sumOfNumbers(tuple.numbers, tuple.delimiter);
    
}

var add = function(arg){
    if(arg === '') return 0;
    return addNonEmpty(arg);
}
 

// Export 
exports.add = add;