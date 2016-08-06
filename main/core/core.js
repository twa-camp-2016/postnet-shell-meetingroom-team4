let _ = require('lodash');
let allBarcode = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];

//zipcode change to barcode
function containOnlyDigits(inputZipcode) {
    return _.every(inputZipcode, n=>n >= '0' && n <= '9');
}
function checkZipcode(inputZipcode) {
    let finalZipcode = inputZipcode;
    console.log(finalZipcode.length);
    if (finalZipcode.length === 10 && finalZipcode.charAt(5) === '-') {
        finalZipcode = finalZipcode.substring(0, 5) + finalZipcode.substring(6);
    }
    let isNumber = containOnlyDigits(finalZipcode);
    return isNumber && [5, 9].includes(finalZipcode.length);
}
function getFormattedZipcode(inputZipcode) {
    return [...inputZipcode].filter(n=>n !== '-').map(x=>parseInt(x));
}
function convertToBarcode(formattedZipcode) {
    let zipSum = _(formattedZipcode).sum();
    let CD = (10 - (zipSum % 10)) === 10 ? 0 : (10 - (zipSum % 10));
    formattedZipcode.push(CD);
    let barcode = _(formattedZipcode).map((element)=> {
        return allBarcode[element];
    }).value();
    return '|' + barcode.join('') + '|';
}
function convertZipcodeToBarcode(inputZipcode) {
    if (checkZipcode(inputZipcode)) {
        let formattedZipcode = getFormattedZipcode(inputZipcode);
        return convertToBarcode(formattedZipcode);
    }
    return 'invalid zipcode :' + inputZipcode;

}

//barcode change to zipcode
function checkBarcode(inputBarcode) {
    let illegalElement = inputBarcode.search(/[^|:]/g);
    if (illegalElement === -1) {
        return [32, 52].includes(inputBarcode.length) && _.startsWith(inputBarcode, '|') && _.endsWith(inputBarcode, '|');
    }
    return false;
}
function getFormattedBarcode(inputBarcode) {
    let barcode = inputBarcode.slice(1, inputBarcode.length - 1);
    return _(barcode).chunk(5).map(element =>element.join('')).value();
}
function convertToZipcode(formattedBarcode) {
    let zipcode = _(formattedBarcode).map(element=> {
        return _.indexOf(allBarcode, element);
    }).value();
    let legalCD = _(zipcode).sum() % 10 === 0;
    zipcode.pop();
    return legalCD ? zipcode.join('') : 0;
}
function convertBarcodeToZipcode(inputBarcode) {
    if(checkBarcode(inputBarcode)){
        let formattedBarcode = getFormattedBarcode(inputBarcode);
        return convertToZipcode(formattedBarcode);
    }
    return 'invalid barcode :' +inputBarcode;
}
// let inputZipcode = '12345';
// let inputBarcode = '|:::||:||::::||:|::|::|::||::|:|';

// convertZipcodeToBarcode(inputZipcode);
// convertBarcodeToZipcode(inputBarcode);
module.exports = {
    checkZipcode,
    getFormattedZipcode,
    convertToBarcode,
    convertZipcodeToBarcode,
    checkBarcode,
    getFormattedBarcode,
    convertToZipcode,
    convertBarcodeToZipcode
};