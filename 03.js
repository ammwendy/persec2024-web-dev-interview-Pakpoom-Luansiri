class reverseEncoder {

    constructor() {
        this.charAtoZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.charZtoA = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';
    }

    encodeCharacter(char){
        
        let LowerCase = false;
        if(char === char.toLowerCase()){
            LowerCase = true;
        }

        let upperChar = char.toUpperCase();

        let index = this.charAtoZ.indexOf(upperChar);

        if (index === -1) {
            return char;
        }
        
        let encodedChar = this.charZtoA[index];

        if(LowerCase == true){
            return encodedChar.toLowerCase();

        }else{
            return encodedChar;
        }
    }

    encode(text){
        let encodedText = '';

        for (let i = 0; i < text.length; i++) {
            encodedText += this.encodeCharacter(text[i]);
        }

        return encodedText.split(' ').reverse().join(' ');
    };

    decode(text) {
        let decodedText = '';

        for (let i = 0; i < text.length; i++) {
            decodedText += this.encodeCharacter(text[i]);
        }

        return decodedText.split(' ').reverse().join(' ');
    }
}

function main(){

    let chars = "hello world";

    reverseEncoder = new reverseEncoder();

    let encoded = reverseEncoder.encode(chars);
    let decoded = reverseEncoder.decode(encoded);

    console.log("Encoded:", encoded);
    console.log("Decoded:", decoded);
}

main();
