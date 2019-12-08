function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    let arr = [];
    for (var i = 1; i <= angka; i++){
        let temp = "";
        if(angka % i == 0){
            temp += i.toString() + (angka/i).toString();
            arr.push(Number(temp));
        }
    }
    
    // console.log(arr);
    for (var j = 0; j < arr.length; j++){
        for (var k = 0; k < arr.length; k++){
            if (arr[j] < arr[k]){
                let temp = arr[k];
                arr[k] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr[0].toString().length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
