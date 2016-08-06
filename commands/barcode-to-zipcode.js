let {convertBarcodeToZipcode}=require('../main/core/core');

function barcodeToZipcode(barcode) {
    let zipcode=convertBarcodeToZipcode(barcode);

    if(zipcode.startsWith('invalid barcode :')){
        return {
            error:'please give right barcode'
        }
    }

    return {
        text:zipcode,
        reset:true
    }
}

module.exports=barcodeToZipcode;