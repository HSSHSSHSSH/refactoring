
/**
 * 封装
 * 1. 将目标数据封装再一个函数中
 * 2. 创建一个类，将目标数据封装在类中，将记录变量的值作为类的一个示例
 *    在类中定义一访问函数用于返回原始目标数据,修改1.中的函数，使用访问函数
 * 3. 新建一个函数，返回类的示例而非原始数据
 * 4. 修改使用目标数据的地方，由直接获取元数据改为获取类的实例，修改过程中或添加get set等成员方法
 * 5.   移除原始数据的访问函数
 */

// const organization = {
//   name: 'Acme Gooseberries',
//   country: 'GB'
// }


//2.
class Organization {
  constructor (data) {
    // this._data = data
    this._name = data.name
    this._country = data.country
  }


  set name (aString) {
    this._name = aString
  }

  get name () {
    return this._name
  }

  set country (aCountryCode) {
    this._country = aCountryCode
  }

  get country () {
    return this._country
  }

}

const organization = new Organization({
  name: 'Acme Gooseberries',
  country: 'GB'
})

//1. 
// 5.
// function getRawOrganization () {
//   return organization._data
// } 

// 3. 
function getOrganization () {
  return organization
}





module.exports = {
  getOrganization
}