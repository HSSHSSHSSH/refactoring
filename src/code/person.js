/**
 * 封装集合
 * 1. 若引用的集合未被封装，则进行封装变量操作
 * 2. 若引用的集合已被封装，则在集合类中添加添加、删除、获取等操作
 * 3. 若存在对该集合的设值函数，则尽可能先进行移除设值函数，若不能移除，则至少返回集合的数据副本、
 * 4. 查找集合的引用点，将对集合修改的地方改为调用集合类的添加、删除、获取等操作
 * 5. 修改获取函数，返回只读数据，可使用只读代理或数据副本
 */


class Person {
  constructor (name) {
    this._name = name
    this._courses = []
  }

  get name () {
    return this._name
  }

  get courses () {
    return this._courses
  }

  set courses (aList) {
    this._courses = aList
  }
}

class Course {
  constructor (name, isAdvanced) {
    this._name = name
    this._isAdvanced = isAdvanced
  }

  get name () {
    return this._name
  }

  get isAdvanced () {
    return this._isAdvanced
  }
}