function cariModus(arr) {
    // you can only write your code here!
    let res = [];
    for (var i = 0; i < arr.length; i++){
        let found = false;
        for (var j = 0; j < res.length; j++){
            if (arr[i] === res[j][0]){
                found = true;
                res[j][1] += 1;
            }
        }

        if (!found){
            res.push([arr[i], 1])
        }
    }

    // console.log(res);

    for (var i = 0; i < res.length; i++){
        for (var j = i+1; j < res.length; j++){
            if(res[i][1] < res[j][1]){
                let temp = res[j]
                res[j] = res[i]
                res[i] = temp;
            }
        }
    }

    // console.log(res)

    if (res[0][1] === 1){
        return -1
    } else if (res.length === 1){
        return -1;
    } else {
        return res[0][0]
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1