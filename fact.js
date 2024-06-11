function factorial(n) { 
    if (n == 0) return 1; 
    return n * factorial(n - 1); 
  } 
  
  //n! = n * (n – 1)!
  //n! = 1 if n = 0 or n = 1