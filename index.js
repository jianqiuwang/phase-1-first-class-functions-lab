// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers){
    const newArry = [arrayOfDrivers[0], arrayOfDrivers[1]]
    return newArry
}


const returnLastTwoDrivers = (arrayOfDrivers1)=> {
    const newArry1 = [arrayOfDrivers1[2],arrayOfDrivers1[3]]
    return newArry1
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]





function createFareMultiplier(fare){
    const number= function(num){
        return num*fare
    }
    return number
}

const fareDoubler = function(number){
    return number*2
}

const fareTripler = function(number){
    return number*3
}

function selectDifferentDrivers(drivers,driversName ){
    return driversName(drivers)
}