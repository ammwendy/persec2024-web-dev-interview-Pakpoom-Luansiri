function autocomplete(word,inputs,maxresult){

    let ret = [];

    for(let value in inputs){
        let lowerWord = inputs[value].toLowerCase();
        
        if(lowerWord.includes(word.toLowerCase())){
            ret.push(inputs[value]);
        }
    }

    ret.sort((a, b) => {
        let lowerA = a.toLowerCase();
        let lowerB = b.toLowerCase();

        let startsWithA = lowerA.startsWith(word.toLowerCase());
        let startsWithB = lowerB.startsWith(word.toLowerCase());

        if (startsWithA && !startsWithB) return -1;
        if (!startsWithA && startsWithB) return 1;

        return lowerA.localeCompare(lowerB);
    });

    ret = ret.slice(0, maxresult);

    return ret;
}

function main(){

    let arrayData = ["Mother","Think","Worthy","Apple","Android"];

    console.log(autocomplete("th", arrayData, 2));
}

main();