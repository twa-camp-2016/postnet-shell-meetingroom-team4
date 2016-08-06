let {convertZipcodeToBarcode} = require('../main/core/core.js');

function zipcodeToBarcode(zipcode) {
    let barcode = convertZipcodeToBarcode(zipcode);

    if (barcode.startsWith('invalid zipcode :')) {
        return {
            error: 'please give right input'
        }
    }
    return {
        text: barcode,
        reset: true
    };
}

module.exports = zipcodeToBarcode;