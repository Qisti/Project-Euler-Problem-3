function isPrime(numb) { 
  if (numb === 2) {
    return true;
  } else if (numb % 2 === 0) {
    return false;
  }
 
 var s = Math.ceil(Math.sqrt(numb));
  for (var i = 3; i <= s; i += 2) {
    if (numb % i === 0) {
      return false;
    }
  }
  return true;
}

function maxPrime(x) {
  var maxNumber = Math.max.apply(null, x);
  return maxNumber;
}

function largestPrimeNumber(numb) {
  var primeNumbers=[];
  var bool, maxNumber;
  for (i = 2; i < numb; i++){
    if (numb % i === 0){
      bool = isPrime(i);
      
      if (bool === true){
        primeNumbers.push(i);
      }
    }
  }
  var maxPrime = Math.max.apply(null, primeNumbers);
  return maxPrime;
  }

module.exports = largestPrimeNumber;