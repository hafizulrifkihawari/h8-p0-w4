function urutkanAbjad(str) {
    // you can only write your code here!
    str = str.split("")
    for (var i = 0; i < str.length; i++){
        for (var j = 0; j < str.length; j++){
            if (str[i] < str[j]){
                let temp = str[j];
                str[j] = str[i];
                str[i] = temp;
            }
        }
    }
    return str.join("")
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

