const { Order } = require('../../code/07/queryTemp.js')



describe("replace temp with query", () => {
  it("happy path", () => {
    let order = new Order(10, { price: 100 });
    expect(order.price).toBe(980);
  })
})