// Code your solution in this file!
//returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(returnFirstTwoDrivers(drivers));

//returnLastTwoDrivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

//selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//createFareMultiplier
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

//fareDoubler
const fareDoubler = createFareMultiplier (2)

//fareTripler
const fareTripler = createFareMultiplier (3)

//selectDifferentDrivers
function selectDifferentDrivers(arrayOfDrivers, func){
    if (typeof func === 'function'){
        return func(arrayOfDrivers);
    } else {
        //handling case where func is not a function
        throw new Error('Second argument must be a function');
    }
}
