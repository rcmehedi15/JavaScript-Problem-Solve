// ------------------- solve no 1  --------------
function mindGame(number) {
    //--------- parameters numbers?---------//
    if (typeof number === 'number' && number > 0) {
        //-------calculation the multiply , sum , divided and sub with  the input value------//
        const output = (number * 3 + 10) / 2 - 5;
        //------return the value after calculation--------//
        return output;
    }
    //--------return error handle-------//
    return 'Oh No! Please enter a positive number.';
}

// ------------------- solve no 2  --------------
function evenOdd(stringValue) {
    // ----- this is a parameters numbers?------//
    if (typeof stringValue === 'string') {
        // --------check the input length---------//
        if (stringValue.length % 2 === 0) {
            // ---------return even Number--------//
            return 'even';
        }
        else {
            // ------return odd Number-------//
            return 'odd';
        }
    }
    // --------error handle-------//
    return 'Please give the valid string';
}


// ----------------------- solve no 3  ---------------
// functin declare 
function isLGSeven(number) {
    // type check
    let lgDataType = typeof (number);
    if (lgDataType === 'number') {
        // value substraction 
        let lgNumber = number - 7;
        if (lgNumber < 7) {
            return lgNumber;
        }
        // value chekcing condition 
        else if (lgNumber > 7) {
            // return value 
            return number * 2;
        }
    }
    // error handle
    else {
        return "Please, Enter a number!";
    }
}


// ----------------------- solve no 4 ---------------

function findingBadData(badData) {
    // ------ conditions-----//
    if (Array.isArray(badData)) {
        let negativeNum = 0;
        // -------- for loop---------//
        for (let i = 0; i < badData.length; i++) {
            const data = badData[i];
            if (data < 0) {
                negativeNum++;
            }
        }
        // ----------Return the negative value----------//
        return negativeNum;
    }
    // --------Error handling--------//
    return 'Please provide the Array input';
}


// ----------------------- solve no 5 ---------------

// first 3 paramenter declare and then number type check condition and then value multipication
// value summation and used nested if condition then use return value
function gemsToDiamond(firstNumber, secondNumber, thirdNumber) {

    // type check
    if ((firstNumber && secondNumber && thirdNumber != null) && typeof firstNumber === 'number' && typeof secondNumber === 'number' && typeof thirdNumber === 'number') {
        // value multipication
        const firstFriend = firstNumber * 21;
        const secondFriend = secondNumber * 32;
        const thirdFriend = thirdNumber * 43;
        // value summation 
        const total = (firstFriend + secondFriend + thirdFriend)
        // condition
        if (total >= 1000 * 2) {
            return total - 2000;
        }
        else {
            return total;
        }
    }
    // error handle
    else {
        return 'Plase Input Number , & 3 parameter with comma'
    }
}
