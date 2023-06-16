const { Account, AccountType } = require("../../code/08/moveClassFunction.js")

describe("move class function", () => {
  it("happy path", () => {
    const account = new Account(1, { isPremium: true }, 10)
    expect(account.bankCharge).toBe(17.05)
  })
})
