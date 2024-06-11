function reverseString(str) {
    if (typeof str !== 'string') {
      return;
    }
  
    let str2 = '';
    for (let i = str.length - 1; i >= 0; i--) {
      str2 += str[i];
    }
    return str2;
  }