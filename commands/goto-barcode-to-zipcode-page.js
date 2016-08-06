module.exports=function () {
  return {
      text:'please input barcode :',
      newMapping:{
          "*":require('./barcode-to-zipcode')
      }
  }
};