const removeFromArray = function(arr, ...theArgs) {
    argLen = theArgs.length;
    arrLen = arr.length;
    for (i = 0; i < argLen; i++){
        for (j = 0; j < arrLen; j++){
            if (theArgs[i] === arr[j]){
                arr.splice(j--, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
