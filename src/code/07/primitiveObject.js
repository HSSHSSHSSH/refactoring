/**
 * 1. 若变量未被封装，则进行封装变量操作
 * 2. 为这个数据值创建一个简单的类，类的构造函数保存这个数据值，并提供一个取值函数
 * 3. 
 */

 class Priority {
  constructor(value) {
    if (value instanceof Priority) return
    this._value = value 
  }

  static legalValues () {
    return ['low', 'normal', 'high', 'rush']
  }

  toString () {
    return this._value
  }

  get _index () {
    return Priority.legalValues().findIndex(s => s === this._value)
  }

  equals (other) {
    return this._index === other._index
  }

  higherThan (other) {
    return this._index > other._index
  }

  lowerThan (other) {
    return this._index < other._index
  }


}


class Order {
  constructor(data) {
    this._priority = data.priority
  }

  get priorityString () {
    return this._priority
  }

  set priority (aString) {
    this._priority = new Priority(aString) 
  }
}



module.exports = {
  Order,
  Priority
}