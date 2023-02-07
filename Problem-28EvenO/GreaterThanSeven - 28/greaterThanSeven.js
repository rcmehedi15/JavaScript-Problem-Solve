// function delcare and parameter pass, input value minus 
// and if condition use then value return
// then 2nd condition  pass then value return

function isLGSeven(valueInput) {
    const subtractionResult = valueInput - 7;
    if (subtractionResult < 7) {
        return subtractionResult;
    }
    else if (subtractionResult > 7) {
        return valueInput * 2;
    }

}
return 'Please Input Number Value'


// let greaterResult = isLGSeven(6);
// console.log(greaterResult)