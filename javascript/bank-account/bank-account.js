//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {

  constructor() {
    this._balance = 0;
    this.isOpen = false;
  }

  open() {
    if(this.isOpen) {
      throw new ValueError()
    } else {
   this.isOpen = true
    }
  }

  close() {
    this.throwIfClosed()
    this.isOpen = false
    this._balance = 0
    
  }

  deposit(funds) {
    this.throwIfNegativeFunds(funds)
    this.throwIfClosed()
    this._balance += funds
  }

  withdraw(funds) {
    this.throwIfNegativeFunds(funds)
    this.throwIfClosed()
    if(this._balance >= funds) {
    this._balance -= funds
    } else {
      throw new ValueError()
    }
    
  }

  get balance() {
    this.throwIfClosed()
    return this._balance
  }

  throwIfClosed() {
    if(this.isOpen === false) { 
      throw new ValueError()
    }
  }

  throwIfNegativeFunds(funds) {
    if(funds <= 0) {
      throw new ValueError()
    }
  }

}

export class ValueError extends Error {

  constructor() {
    super('Bank account error');
  }

}
