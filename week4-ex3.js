function cariMedian(arr) {
    // you can only write your code here!
    //sort
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length; j++){
            if(arr[i] < arr[j]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    
    // console.log(arr);
    let res = 0    
    if (arr.length % 2 == 0){
        res = (arr[arr.length/2 - 1]) + (arr[arr.length/2]);
        return res/2;
    } else {
        res = arr[Math.floor(arr.length/2)]
        return res;
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5