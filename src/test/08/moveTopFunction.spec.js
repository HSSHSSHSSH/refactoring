const {trackSummary} = require("../../code/08/moveTopFunction.js")

describe("move function", () => {
  it("happy path", () => {
    const points = [
      {lat: 1, lon: 2},
      {lat: 3, lon: 4},
      {lat: 5, lon: 6},
      {lat: 7, lon: 8},
      {lat: 9, lon: 10},
    ]
    const result = trackSummary(points)
    expect(result).toEqual({
      time: 60,
      distance: 779.95,
      pace: 0,
    })
  })
})