// finding bad data so used function and if-else condition used
// first array type check and for loop use number length check value incrase 
// find data and bad data push --> findData variable then return findData
function findingBadData(number) {
    if (Array.isArray(number) == true) {
        let badData = [];
        for (let i = 0; i < number.length; i++) {
            let findData = number[i];
            if (findData < 0) {
                badData.push(findData);
            }
        }
        return badData.length;
    }
    else {
        return "Please Input Finding Number";
    }
}

// const findValue =  findingBadData([1,2,5,-4,-6]);
// console.log(findValue)