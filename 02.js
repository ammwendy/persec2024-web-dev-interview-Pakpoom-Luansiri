const _ = require('lodash');

function extractAlphabeticalPart(item) {
    return item.match(/[a-zA-Z]+/)[0];
}

function extractNumericalPart(item) {
    return parseInt(item.match(/\d+/));
}

function customSort(array) {
    return _.sortBy(array, [extractAlphabeticalPart, extractNumericalPart]);
}

function main(){

    let ArrayData = ["TH19", "SG20", "TH2"];

    ArrayData = customSort(ArrayData);

    console.log(ArrayData);
}

main();
