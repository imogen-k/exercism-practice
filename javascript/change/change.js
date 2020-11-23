//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
  calculate(coinArray, target) {
    var coins = []
    var moneyLeft = target
    var message = 'The total 3 cannot be represented in the given currency.';
    var messageNeg = 'Negative totals are not allowed.';
    var reversedCoins = coinArray.reverse()

    if(target >= 0) {
    
    for (var i=0; i<reversedCoins.length; i++) {
      while((moneyLeft - reversedCoins[i]) >= 0) {
      if((moneyLeft - reversedCoins[i]) >= 0) {
        moneyLeft -= reversedCoins[i]
        coins.push(reversedCoins[i])
      }  else {
        continue
      }
    }
    }
    console.log(moneyLeft)

    if (moneyLeft > 0) {
      throw message
    }
    else {
      return coins.reverse();
    }

  } else {
    throw messageNeg;
  }
    
  }
}
