function shoppingTime(memberId, money) {
    // you can only write your code here!

    if (memberId == undefined || memberId.length == 0){
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    } else if(money < 50000){
        return "Mohon maaf, uang tidak cukup"
    }

    item = ["Sepatu Staccattu", "Baju Zoro", "Baju brand H&N", "Sweater Uniklooh", "Casing Handphone"]
    order = [];

    changeMoney = money;
    for (var i = 0; i < changeMoney; i++){
        if (changeMoney >= 1500000){
            order.push(item[0]);
            changeMoney -= 1500000;
        } else if (changeMoney >= 500000){
            order.push(item[1]);
            changeMoney -= 500000;
        } else if (changeMoney >= 250000){
            order.push(item[2]);
            changeMoney -= 250000;
        } else if (changeMoney >= 175000){
            order.push(item[3]);
            changeMoney -= 175000;
        } else if (changeMoney >= 50000){
            order.push(item[4]);
            changeMoney -= 50000;
            break;
        }
    }

    data = {
        memberId: memberId,
        money: money,
        listPurchased: order,
        changeMoney: changeMoney,
    }

    return data;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja