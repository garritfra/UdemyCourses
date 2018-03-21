function printReverse(array) {

    var reversed = array.reverse();
    reversed.forEach(function(num) {
        console.log(num);
    }, this);
}

function isUniform(arr) {

    var guideline = arr[0];

    for (var i = 1; i < arr.length; arr--) {
        if (arr[i] !== guideline) {
            return false;
        }

    }
    return true;
}

function sumArray(arr) {
    var sum = 0;

    arr.forEach(function(item) {
        sum += item;
    }, this);

    return sum;
}

function max(arr) {
    var max = 0;

    arr.forEach(function(item) {
        if (item > max) {
            max = item;
        }
    }, this);
    return max;
}