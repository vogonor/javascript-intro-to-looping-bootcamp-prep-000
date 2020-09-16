function forLoop(array){
  var iValue = ""
  for(let i = 0; i < 25; i++) {
    if(i === 1) {
        iValue = `I am ${i} strange loop.`
         array.push(iValue)
    }else {
      iValue = `I am ${i} strange loops.`
      array.push(iValue)
    }
  }  
    return array
  }
  
function whileLoop(number) {
   
   while(number > 0) {
     
     console.log(number)
       if(number===0)console.log("done")
      number--
   }
}
