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
        amount : 1,
        unit   : "",
    }

    if(name !== "" && name !== undefined) ingrObj.name = name;
    if(amount !== undefined && !isNaN(parseInt(amount))) ingrObj.amount = parseInt(amount);
    if(unit !== "" && name !== undefined) ingrObj.unit = unit;

    return ingrObj;
};



exports.validInst = function(name, duration, desc) {
    let instObj = {
        name   	  : "",
        duration  : 0,
        desc      : "umyjeme si ruce"
    }

    if(name !== "" && name !== undefined) instObj.name = name;
    if(duration !== undefined && !isNaN(parseInt(duration))) instObj.duration = parseInt(duration);
    if(desc !== "" && desc !== undefined) instObj.desc = desc;

    return instObj;
};
