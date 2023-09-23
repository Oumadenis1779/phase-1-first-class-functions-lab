// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice (0, 2);  
};
const returnLastTwoDrivers = function (drivers){
    return drivers.slice (-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (integer) {
    return function (fare){
        return fare * integer;
    };
}
const fareQuadrupler = createFareMultiplier(4);{
const fare =10;
const quadrupledFare = fareQuadrupler(fare);
}
const fareDoubler = createFareMultiplier(2);{
const fare = 10;
const doubledFare = fareDoubler(fare);
}
const fareTripler = createFareMultiplier(3);{
const fare = 10
const tripleFare = fareTripler(fare);
}

function selectDifferentDrivers(drivers, driverSelectionFunction){
    return driverSelectionFunction(drivers);
}
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const firstTwo = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
    const lastTwo = selectDifferentDrivers(drivers, returnLastTwoDrivers);

    console.log (firstTwo); //Output : ['Antonia', 'Nuru']
    console.log (lastTwo); //Output : ['Amari', 'Mo']
