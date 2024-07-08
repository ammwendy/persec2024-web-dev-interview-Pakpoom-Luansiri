const hexRgb = require("hex-to-rgb");

function ConvertColor(input){

    const result = hexRgb(input);

    let ret = {
        'r': result[0],
        'g': result[1],
        'b': result[2],
    };

    return ret;
}

function main(){

    let colorCode = ConvertColor("#FFFFFF");

    console.log(colorCode);
}

main();