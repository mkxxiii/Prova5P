exports.generatePromotionalNumber = function(min, max, endOfCode, min2, max2){
    let randomNumber1 = Math.floor(Math.random() * (max - min + 1) + min);
    let randomNumber2 = Math.floor(Math.random() * (max2 - min2 + 1) + min2);

    return randomNumber1.toString() + endOfCode.toString() + randomNumber2.toString();
}