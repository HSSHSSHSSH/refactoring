
class Province { // 省份类
  constructor (doc) {
    this._name = doc.name; // 省份名称
    this._producers = []; // 生产者
    this._totalProduction = 0; // 总产量
    this._demand = doc.demand; // 需求量
    this._price = doc.price; // 价格
    doc.producers.forEach(d => this.addProducer(new Producer(this, d))); // 添加生产者
  }

  addProducer (arg) { // 添加生产者
    this._producers.push(arg);
    this._totalProduction += arg.production;
  }

  get name () { // 省份名称
    return this._name;
  }

  get producers () { // 生产者
    return this._producers.slice();
  }

  get totalProduction () { // 总产量
    return this._totalProduction;
  }

  set totalProduction (arg) { // 总产量
    this._totalProduction = arg;
  }

  get demand () { // 需求量
    return this._demand;
  }

  set demand (arg) { // 需求量
    this._demand = parseInt(arg);
  }

  get price () { // 价格
    return this._price;
  }

  set price (arg) { // 价格
    this._price = parseInt(arg);
  }

  get shortfall () { // 缺口
    return this._demand - this.totalProduction; // 需求量 - 总产量
  }

  get profit () { // 利润
    return this.demandValue - this.demandCost; // 需求价值 - 需求成本
  }

  get demandValue () { // 需求价值
    return this.satisfiedDemand * this.price; // 满足需求量 * 价格
  }

  get satisfiedDemand () { // 满足需求量
    return Math.min(this._demand, this.totalProduction); // 需求量与总产量的最小值
  }

  get demandCost () { // 需求成本
    let remainingDemand = this.demand; // 剩余需求量
    let result = 0; // 结果
    this.producers // 生产者
      .sort((a, b) => a.cost - b.cost) // 按成本排序
      .forEach(p => { // 遍历生产者
        const contribution = Math.min(remainingDemand, p.production); // 产量
        remainingDemand -= contribution; // 剩余需求量 - 产量
        result += contribution * p.cost; // 结果 + 产量 * 成本
      });
    return result;
  }

  
}


class Producer { // 生产者类
  constructor (aProvince, data) {
    this._province = aProvince; // 省份
    this._cost = data.cost; // 成本
    this._name = data.name; // 名称
    this._production = data.production || 0; // 产量
  }

  get name () { // 名称
    return this._name;
  }

  get cost () { // 成本
    return this._cost;
  }

  set cost (arg) { // 成本
    this._cost = parseInt(arg);
  }

  get production () { // 产量
    return this._production;
  }

  set production (amountStr) { // 产量
    const amount = parseInt(amountStr);
    const newProduction = Number.isNaN(amount) ? 0 : amount;
    this._province._totalProduction += newProduction - this._production;
    this._production = newProduction;
  }
}


module.exports = {
  Province,
  Producer
}