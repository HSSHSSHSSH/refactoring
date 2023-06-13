const {Producer, Province} = require('../code/province.js')

function sampleProvince() {
  return new Province({
    name: "Asia",
    producers: [
      {name: "Byzantium", cost: 10, production: 9},
      {name: "Attalia", cost: 12, production: 10},
      {name: "Sinope", cost: 10, production: 6},
    ],
    demand: 30,
    price: 20
  });
}

describe('province', () => {
  let asia;
  beforeEach(() => { // 每个测试用例之前都会执行
    asia = sampleProvince();
  });
  it('shortfall', () => { // 缺口
    expect(asia.shortfall).toBe(5);
  });
  it('profit', () => { // 利润
    expect(asia.profit).toBe(230);
  });
  it('change production', () => { // 改变产量
    asia.producers[0].production = 20;
    expect(asia.shortfall).toBe(-6);
    expect(asia.profit).toBe(292);
  });
  it('zero demand', () => { // 需求量为0
    asia.demand = 0;
    expect(asia.shortfall).toBe(-25);
    expect(asia.profit).toBe(0);
  });
  it('negative demand', () => { // 需求量为负数
    asia.demand = -1;
    expect(asia.shortfall).toBe(-26);
    expect(asia.profit).toBe(-10);
  });
  it('empty string demand', () => { // 需求量为空字符串
    asia.demand = "";
    expect(asia.shortfall).NaN;
    expect(asia.profit).NaN;
  });
});
