// first 3 paramenter declare and then number type check condition and then value multipication 
// value summation and used nested if condition then use return value

function gemsToDiamond(firstNumber, secondNumber, thirdNumber) {
    if (typeof firstNumber === 'number' && typeof secondNumber === 'number' && typeof thirdNumber === 'number') {
        const firstFriend = firstNumber * 21;
        const secondFriend = secondNumber * 32;
        const thirdFriend = thirdNumber * 43;
        const total = (firstFriend + secondFriend + thirdFriend)
        if (total >= 1000 * 2) {
            return (total - 2000);
        }
        else {
            return total;
        }
    }
    else {
        return 'Plase Input Number not String'
    }
}

// const gegmsValue =  gemsToDiamond(1,1,1);
// console.log(gegmsValue)