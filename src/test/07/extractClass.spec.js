const {Person} = require("../../code/07/extractClass.js")

describe("extract class", () => {
  it("happy path", () => {
    const person = new Person("H", "1", "2")
    // 测试get
    expect(person.name).toBe("H")
    expect(person.officeAreaCode).toBe("1")
    expect(person.officeNumber).toBe("2")
    expect(person.telephoneNumber).toBe("(1) 2")

    // 测试set
    person.name = "HH"
    person.officeAreaCode = "11"
    person.officeNumber = "22"
    expect(person.name).toBe("HH")
    expect(person.officeAreaCode).toBe("11")
    expect(person.officeNumber).toBe("22")
    expect(person.telephoneNumber).toBe("(11) 22")
  })
})