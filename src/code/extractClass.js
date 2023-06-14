/**
 * 提炼类
 * 类过大，属性与方法与类关联性小
 * 1. 
 */

class TelephoneNumber {
  constructor (officeAreaCode, officeNumber) {
    this._officeAreaCode = officeAreaCode
    this._officeNumber = officeNumber
  }

  get officeAreaCode () {
    return this._officeAreaCode
  }

  set officeAreaCode (value) {
    this._officeAreaCode = value
  }

  get officeNumber () {
    return this._officeNumber
  }

  set officeNumber (value) {
    this._officeNumber = value
  }
}



class Person {

  constructor (name, officeAreaCode, officeNumber) {
    this._name = name
    this._telephoneNumber = new TelephoneNumber(officeAreaCode, officeNumber)
  }

  get name () {
    return this._name
  }

  set name (value) {
    this._name = value
  }

  get telephoneNumber () {
    return `(${this._telephoneNumber.officeAreaCode}) ${this._telephoneNumber.officeNumber}`
  }

  get officeAreaCode () {
    return this._telephoneNumber.officeAreaCode
  }

  set officeAreaCode (value) {
    this._telephoneNumber.officeAreaCode = value
  }

  get officeNumber () {
    return this._telephoneNumber.officeNumber
  }

  set officeNumber (value) {
    this._telephoneNumber.officeNumber = value
  }

}


module.exports = {
  Person
}