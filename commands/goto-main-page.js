let {stripMargin} = require('stripmargin');
let commandZipcodeToBarcode=require('./goto-zipcode-to-barcode-page');
let commandBarcodeToZipcode=require('./goto-barcode-to-zipcode-page');
let commandExit=require('./exit');
let commandInvalidInput=require('./invalid-input-page');

function mainPage(input) {
    return{
        text:stripMargin(`
        |1.translate zip code to bar code
        |2.translate bar code to zip code
        |3.Quit
        |please input your choices(1~3)`),

        newMapping:{
            "1":commandZipcodeToBarcode,
            "2":commandBarcodeToZipcode,
            "3":commandExit,
            "*":commandInvalidInput
        }
    }
}

module.exports=mainPage;