
/**
 * 
 * @param {*} product 
 * @param {*} quantity 
 * @param {*} shippingMethod 
 * @returns 
 * 商品总价与折扣通过商品信息计算
 * 成本通过运费信息计算
 * 
 * 目的将成本计算从priceOrder函数中分离出来， 使priceOrder函数只负责计算订单总价
 */

function priceOrder (product, quantity, shippingMethod) {
  // const basePrice = product.basePrice * quantity; // 商品总价
  // const discount = Math.max(quantity - product.discountThreshold, 0)
  //   * product.basePrice * product.discountRate; // 折扣
  // const priceData = {
  //   basePrice: basePrice,
  //   quantity: quantity,
  //   discount: discount
  // } // 中转数据结构
  const priceData = calculatePricingData(product, quantity);
  const price = applyShipping(priceData, shippingMethod);
  return price
}

function calculatePricingData (product, quantity) { // 只需商品信息
  const basePrice = product.basePrice * quantity; // 商品总价
  const discount = Math.max(quantity - product.discountThreshold, 0)
    * product.basePrice * product.discountRate; // 折扣
  const priceData = {
    basePrice: basePrice,
    quantity: quantity,
    discount: discount
  } // 中转数据结构
  return priceData
}

function applyShipping (priceData, shippingMethod) { // 只需运费信息
  const {basePrice, discount, quantity} = priceData
  const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
    ? shippingMethod.discountedFee : shippingMethod.feePerCase; // 运费
  const shippingCost = quantity * shippingPerCase; // 运费总价
  const price = basePrice - discount + shippingCost; // 订单总价
  return price;
}

let product = {
  basePrice: 10,
  discountThreshold: 5,
  discountRate: 0.1
};

let shippingMethod = {
  discountThreshold: 10,
  discountedFee: 5,
  feePerCase: 10
};

console.log(priceOrder(product, 10, shippingMethod)); // 110

module.exports = {
  priceOrder
};