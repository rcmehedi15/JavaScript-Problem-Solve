const rollNumber = [3, 5, 1, 6, 2, 20];
console.log(rollNumber.sort(function(a, b){
    return a - b; // desending b - a
}));