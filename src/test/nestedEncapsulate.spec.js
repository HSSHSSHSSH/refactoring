const { getCustomerData } = require("../code/nestedEncapsulate.js")

describe("nested encapsulate", () => {
  it("nested get operation", () => {
    // expect(getCustomerData()[1920].usages[2016][1]).toBe(50)
    // expect(getCustomerData()[1920].usages[2016][2]).toBe(55)
    expect(getCustomerData().getAmount(1920, 2016, 1)).toBe(50)
    expect(getCustomerData().getAmount(1920, 2016, 2)).toBe(55)
  })

  it("nested set operation", () => {
    // expect(getCustomerData()[1920].usages[2015][1]).toBe(70)
    // getCustomerData()[1920].usages[2015][1] = 100
    // expect(getCustomerData()[1920].usages[2015][1]).toBe(100)

    // expect(getCustomerData()[1920].usages[2015][2]).toBe(63)
    // getCustomerData()[1920].usages[2015][2] = 200
    // expect(getCustomerData()[1920].usages[2015][2]).toBe(200)

    expect(getCustomerData().getAmount(1920, 2015, 1)).toBe(70)
    getCustomerData().setAmount(1920, 2015, 1, 100)
    expect(getCustomerData().getAmount(1920, 2015, 1)).toBe(100)

    expect(getCustomerData().getAmount(1920, 2015, 2)).toBe(63)
    getCustomerData().setAmount(1920, 2015, 2, 200)
    expect(getCustomerData().getAmount(1920, 2015, 2)).toBe(200)
  })
})