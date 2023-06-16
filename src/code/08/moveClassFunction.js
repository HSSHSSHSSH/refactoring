

// 将 overdraftCharge 函数搬移到 AccountType 类中

class Account {

  constructor(number, type, daysOverdrawn) {
    this._number = number;
    this._type = type;
    this._daysOverdrawn = daysOverdrawn;
  }

  get type () {
    return this._type;
  }

  get daysOverdrawn () {
    return this._daysOverdrawn;
  }

  get bankCharge () {
    let result = 4.5;
    if (this._daysOverdrawn > 0) {
      result += this.overdraftCharge;
    }
    return result;
  }

  get overdraftCharge () { // target
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (this.daysOverdrawn <= 7) {
        return baseCharge;
      } else {
        return baseCharge + (this.daysOverdrawn - 7) * 0.85;
      }
    } else {
      return this.daysOverdrawn * 1.75;
    }
  }
}


class AccountType {
  constructor(isPremium) {
    this._isPremium = isPremium;
  }

  get isPremium () {
    return this._isPremium;
  }

  overdraftCharge (daysOverdrawn) { // target
    if (this.isPremium) {
      const baseCharge = 10;
      if (daysOverdrawn <= 7) {
        return baseCharge;
      } else {
        return baseCharge + (daysOverdrawn - 7) * 0.85;
      }
    } else {
      return daysOverdrawn * 1.75;
    }
  }
}

module.exports = {
  Account,
  AccountType
}