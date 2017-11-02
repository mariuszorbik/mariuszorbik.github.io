'use strict';

function wyrazFibonacciego(n) {
    
  var a = 0;
  var b = 1;
    
  if(n <= 0) {
    return 0;
  } 
  else if(n <= 2) {
    return 1;
  } 
  else {
    for(var i = 2; i < n; i++) {
        
      b += a;
      a = b - a;
        
//        console.log(a+b);
    }
    return(a + b);
  }
}
console.log(wyrazFibonacciego(30));