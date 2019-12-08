function changeMe(arr) {
    // you can only write your code here!

    // console.log(arr[0][0]) ??
    if (arr.length === 0){
        console.log('""')
    }

    for (var i = 0; i < arr.length; i++){
        obj = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: 2019 - arr[i][3] || "Invalid Birth Year",

        }
    console.log(i+1+". " + obj.firstName);
    console.log(obj);
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""