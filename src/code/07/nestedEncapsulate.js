
/**
 * 封装
 * 1. 将目标数据封装再一个函数中
 * 2. 创建一个类，将目标数据封装在类中，将记录变量的值作为类的一个示例
 *    在类中定义一访问函数用于返回原始目标数据,修改1.中的函数，使用访问函数
 * 3. 新建一个函数，返回类的示例而非原始数据
 * 4. 修改使用目标数据的地方，由直接获取元数据改为获取类的实例，修改过程中或添加get set等成员方法
 * 5.   移除原始数据的访问函数
 */


// const customerData = {
//   1920: {
//     name: "Martin",
//     id: "1920", 
//     usages: {
//         2016: {
//           1: 50,
//           2: 55,
//           // remaining months of the year
//         },
//         2015: {   
//           1: 70,
//           2: 63,
//           // remaining months of the year
//         }
//       }
//     }
// }

// 2.
class CustomerData {
  constructor (data) {
    this._data = data
  }

  getRawData() {
    return this._data
  }

  getAmount (id, year, month) {
    return this._data[id].usages[year][month]
  }

  setAmount (id, year, month, amount) {
    this._data[id].usages[year][month] = amount
  }

}

const customerData = new CustomerData({
  1920: {
    name: "Martin",
    id: "1920", 
    usages: {
        2016: {
          1: 50,
          2: 55,
          // remaining months of the year
        },
        2015: {   
          1: 70,
          2: 63,
          // remaining months of the year
        }
      }
    }
})


// 1.
// 5.
// function getRawCustomerData () {
//   return customerData._data
// }

// 3.
function getCustomerData () {
  return customerData
}

module.exports = {
  getCustomerData
}