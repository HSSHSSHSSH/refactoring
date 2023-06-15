const { Shipment } = require("../../code/07/inlineClass.js");

describe("inline class", () => {
  it("happy path", () => {
    let shipment = new Shipment("shippingCompany", "trackingNumber");
    let request = {
      vendor: "vendor",
    }
    // shipment.trackingInformation.shippingCompany = request.vendor;
    shipment.shippingCompany = request.vendor;
    expect(shipment.shippingCompany).toBe("vendor");
  })
})