
// Taib Islam Dipu - 17July,2020

// Problem 1 : feetToMile //dosomiker por 2 ghor
function feetToMile(feet) {

    var mile = feet / 5280;
    return mile;
}

var result = feetToMile(50000);
console.log(result);



// Problem 2 : woodCalculator
function woodCalculator(chair, table, bed) {
    var chair = chair * 1;
    var table = table * 3;
    var bed = bed * 5;

    var total = chair + table + bed;
    return total;
}

var result = woodCalculator(12, 12, 8);
console.log(result)



// Problem 3: brickCalculator
function brickCalculator(floorNumber) {
    var perFloor = floorNumber * 1000;
    var totalBrick;

    if (floorNumber > 0 && floorNumber <= 10) {
        totalBrick = perFloor * 15;
    }
    else if (floorNumber > 10 && floorNumber <= 20) {
        totalBrick = (perFloor * 12) + 30000;
    }
    else if (floorNumber > 20) {
        totalBrick = (perFloor * 10) + 70000;
    }
    else {
        console.log('Enter a valid number')
    }
    return totalBrick;
}

var result = brickCalculator(100);
console.log(result);



// problem 4 : tinyFriend
function tinyFriend(friend) {

    var shortestName = friend[0];

    for (var i = 0; i < friend.length; i++) {
        if (shortestName.length > friend[i].length) {
            shortestName = friend[i];
        }
    }
    return shortestName;
}

var result = tinyFriend(['Avi Miller', 'Nayan', 'roy', 'denver', 'Bob Dylan']);
console.log(result);
