function isPrime(number) {
  
  if (number === 2) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  }
 var s = Math.sqrt(number); s = Math.ceil(s);
  for (var i = 3; i <= s; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function maxPrime (x){
  var maxNumber = Math.max.apply (null, x);
  return maxNumber;
}

function LargestPrimeNumber(number) {
  var PrimeNumber=[];
  var boolean, maxNumber;

  for (i=2; i<number; i++){
    if (number % i === 0){
      boolean = isPrime (i);
      
      if (boolean === true){
        PrimeNumber.push(i);
      }
    }
  }
  var numMax = PrimeNumber;
  numMax = maxPrime(numMax);
  return numMax;
  }

module.exports = LargestPrimeNumber;


