// Soal No.1

function rand(min = null, max = null) {
    if (min === null && max === null) {
      return 0;
    } else if (max === null) {
      max = min;
      min = 0;
    }
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(rand(20, 1)); // Output: 4
  console.log(rand(1, 10)); // Output: 1
  console.log(rand(6)); // Output: 2
  console.log(rand()); // Output: 0

//   Soal No.2

function chooseDecimals(n, d) {
    if (typeof n !== 'number' || typeof d !== 'number') {
      return 'Error: Input harus berupa angka';
    }
    
    const numberString = n.toString();
    const decimalIndex = numberString.indexOf('.');
    
    if (decimalIndex === -1) {
      return `${numberString}.${'0'.repeat(d)}`;
    }
    
    const integerPart = numberString.substring(0, decimalIndex);
    const decimalPart = numberString.substring(decimalIndex + 1, decimalIndex + 1 + d);
    
    if (decimalPart.length < d) {
      return `${integerPart}.${decimalPart}${'0'.repeat(d - decimalPart.length)}`;
    }
    
    return `${integerPart}.${decimalPart}`;
  }
  console.log(chooseDecimals(2.100212, 2)); // Output: 2.10
  console.log(chooseDecimals(2.100212, 3)); // Output: 2.100
  console.log(chooseDecimals(2100, 2)); // Output: 2100.00

//   Soal No.3

function isItNumeric(input) {
    if (typeof input === 'number') {
      return true;
    } else if (typeof input === 'string' && input.trim() !== '') {
      return !isNaN(Number(input));
    } else {
      return false;
    }
  }
  console.log(isItNumeric(12)); // Output: true
  console.log(isItNumeric('abcd')); // Output: false
  console.log(isItNumeric('12')); // Output: true
  console.log(isItNumeric(' ')); // Output: false
  console.log(isItNumeric(1.20)); // Output: true
  console.log(isItNumeric(-200)); // Output: true

//   Soal No.4

function roundUpToFive(number) {
    return Math.ceil(number / 5) * 5;
  }
  console.log(roundUpToFive(32)); // Output: 35
  console.log(roundUpToFive(137)); // Output: 140
  console.log(roundUpToFive(142)); // Output: 145