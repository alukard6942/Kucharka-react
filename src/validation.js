exports.initVal = function(name, desc) {
    let data = {
        name : "unnamed",
        desc  : "empty description",
        ingr  : [],
        inst  : []
    }

    if(name !== "" && name !== undefined) data.name = name;
    if(desc !== "" && desc !== undefined) data.desc = desc;

    return data;
};

exports.validIngr = function(name, amount, unit) {
    let ingrObj = {
        name   : "ingredience",
        amount : 0,
        unit   : "",
    }

    if(name !== "" && name !== undefined) ingrObj.name = name;
    if(amount !== undefined && Number.isInteger(amount)) ingrObj.amount = amount;
    if(unit !== "" && name !== undefined) ingrObj.unit = unit;

    return ingrObj;
};



exports.validInst = function(name, startTime, duration, desc) {
    let instObj = {
        name   	  : "step",
        startTime : 0,
        duration  : 0,
        desc      : "step description"
    }

    if(name !== "" && name !== undefined) instObj.name = name;
    if(startTime !== undefined && Number.isInteger(startTime)) instObj.startTime = startTime;
    if(duration !== undefined && Number.isInteger(duration)) instObj.duration = duration;
    if(desc !== "" && desc !== undefined) instObj.desc = desc;

    return instObj;
};