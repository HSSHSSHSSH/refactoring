/**
 * 搬移字段
 */


// 将discountRate字段搬移到CustomerContract类中


class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(new Date());
  }

  get discountRate() {
    return this._discountRate;
  }

  // 1. 封装_discountRate字段
  set discountRate(arg) {
    this._discountRate = arg;
  }

  becomePreferred() {
    this._discountRate += 0.03;
    // other nice things
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this._discountRate));
  }

}



class CustomerContract {
  // 2. 添加对应字段和访问函数
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate; // 添加字段
  }

  // 添加访问函数 get 
  get discountRate() {
    return this._discountRate;
  }
  // 添加访问函数 set
  set discountRate(arg) {
    this._discountRate = arg;
  }
  
}

module.exports = {
  Customer,
  CustomerContract
}