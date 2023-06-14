/**
 * 以查询取代临时变量
 * 1. 检查变量在使用之前是否已经计算完毕，检查计算的代码是否会修改变量
 * 2. 尽量将变量改造为已读
 * 3. 将为变量赋值的代码提炼为函数
 * 4  隔离副作用
 * 5. 以查询取代临时变量
 */

// 重构前

// class Order {
//   constructor(quantity, item) {
//     this._quantity = quantity;
//     this._item = item;
//   }

//   get price() {
//     let basePrice = this._quantity * this._item.price;
//     let discountFactor = 0.98;
//     if (basePrice > 1000) discountFactor -= 0.03;
//     return basePrice * discountFactor;
//   }
// }

// 重构后

class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }


  get basePrice () {
    return this._quantity * this._item.price;
  }

  get discountFactor () {
    let discountFactor = 0.98;
    if (this.basePrice > 1000) discountFactor -= 0.03;
    return discountFactor;
  }


  get price () {
    return this.basePrice * this.discountFactor;
  }
}



module.exports = {
  Order
}
