const {getOrganization} = require('../../code/07/organization.js')

describe('organization', () => {
  it("get operation", () => {
    expect(getOrganization().name).toBe('Acme Gooseberries')
    expect(getOrganization().country).toBe('GB')
  })

  it("set operation", () => {
    getOrganization().name = '1'
    getOrganization().country = '2'
    expect(getOrganization().name).toBe('1')
    expect(getOrganization().country).toBe('2')
  })
}) 