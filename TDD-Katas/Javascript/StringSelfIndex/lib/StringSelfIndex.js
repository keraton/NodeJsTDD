var index = function(input) {
    if (!input) {
        return [];
    }
    
    var output = [];
    for (var i=0; i<input.length; i++) {
        if (i === 0) {
            output[0] = -1;        
        }
        else if (i >= 2 && input[i-1] === input[output[i-1]]) {
            output[i]=output[i-1]+1;
        }
        else {
            output[i]=0;
        }
    }    
    
    return output;
}

// Export this to the public
exports.index = index;
