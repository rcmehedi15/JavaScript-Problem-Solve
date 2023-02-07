// even and odd string value parameter received. and first string value length check
// and then charceter checking condition and then value return

function evenOdd(stringValue) {
    const characterCheck = stringValue.length;
    if (characterCheck % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
return 'Please Enter String Value'

// let findValue = evenOdd("Batch7");
// console.log(findValue);