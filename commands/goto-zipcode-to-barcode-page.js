module.exports=function () {
  return {
      text:'please input zipcode :',
      newMapping:{
          "*":require('./zipcode-to-barcode')
      }
  }
};