const { Order, Priority } = require('../code/primitiveObject.js')

describe("replace primitive with object", () => {
  it("happy path", () => {
    let low = new Priority('low')
    let normal = new Priority('normal')
    let high = new Priority('high')
    let rush = new Priority('rush')
    let lowOrder = new Order({
      priority: low
    })
    let normalOrder = new Order({
      priority: normal
    })
    let highOrder = new Order({
      priority: high
    })
    let rushOrder = new Order({
      priority: rush
    })
    let orders = [lowOrder, normalOrder, highOrder, rushOrder]
    let highPriorityCount = orders.filter(o => o.priorityString.higherThan(normal)).length
    expect(highPriorityCount).toBe(2)
  })
})