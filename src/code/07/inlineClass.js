/**
 * 内联类
 * 一个类没有单独存在的必要
 * 1. 对于待内联类中的所有public函数，在目标类中创建一个对应的函数，新函数直接委托待内联类
 * 2. 修改所有待内联类的public函数的引用点，令其引用目标类的对应函数
 * 3. 将待内联类的函数与数据全部搬移到目标类中
 */

// 将TrackingInformation类内联到Shipment类中



// class TrackingInformation {
//   constructor (shippingCompany, trackingNumber) {
//     this._shippingCompany = shippingCompany;
//     this._trackingNumber = trackingNumber;
//   }
//   get shippingCompany() {return this._shippingCompany;}
//   set shippingCompany(arg) {this._shippingCompany = arg;}
//   get trackingNumber() {return this._trackingNumber;}
//   set trackingNumber(arg) {this._trackingNumber = arg;}
//   get display() {
//     return `${this.shippingCompany}: ${this.trackingNumber}`;
//   }
// }


class Shipment {
  constructor (trackingInformation) {
    // this._trackingInformation. = trackingInformation;
    this._shippingCompany = trackingInformation.shippingCompany;
    this._trackingNumber = trackingInformation.trackingNumber;
  }
  get trackingInfo() {
    return `${this._shippingCompany}: ${this._trackingNumber}}`;
  }

  get shippingCompany() {
    return this._shippingCompany;
  }

  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }

  get trackingNumber() {
    return this._trackingNumber;
  }

  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }

}

module.exports = {
  Shipment,
  // TrackingInformation
}