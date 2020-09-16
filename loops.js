function forLoop(array){
  var iValue = ""
  for(let i = 0; i < 25; i++) {
    if(i === 1) {
        iValue = `"I am ${i} strange loop."`
         this.array[i].push(iValue)
    }else {
      iValue = `"I am ${i} strange loops."`
      this.array[i].push(iValue)
    }
  }  
    return array
  }
  
//TypeError: Cannot read property '0' of undefined
