function removeDuplicates(arr) {
    var newArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9, 9]));
