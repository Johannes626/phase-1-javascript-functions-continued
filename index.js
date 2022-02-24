function saturdayFun(fun = "roller-skate") {
    return `This Saturday, I want to ${fun}!`
}
const mondayWork = function (work = "go to the office") {
    return `This Monday, I will ${work}.`
}
function wrapAdjective(outer = "*") {
    return function (inner = "special") {
        return `You are ${outer}${inner}${outer}!`
    }
}
wrapAdjective()();
    
    
