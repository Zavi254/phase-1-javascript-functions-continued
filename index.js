// code your solution here
function saturdayFun(roller = `roller-skate`){
    return `This Saturday, I want to ${roller}!`;
}
saturdayFun(`bathe my dog`);

const mondayWork = function(whatToBeDone = `go to the office`){
    return `This Monday, I will ${whatToBeDone}.`
}
mondayWork(`work from home`);


function wrapAdjective(defaultOne = "*"){

    function innerFunction(word = "special"){
        return `You are ${defaultOne}${word}${defaultOne}!`
    }

    return innerFunction;
}

const final = wrapAdjective("%")("a dedicated programmer");

