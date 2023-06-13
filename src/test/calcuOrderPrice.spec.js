const {priceOrder} = require('../code/calcuOrderPrice.js')

describe('calculate order price', () => {
  it("happy path", () => {
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
    expect(priceOrder(product, 10, shippingMethod)).toBe(145);
  })
})
