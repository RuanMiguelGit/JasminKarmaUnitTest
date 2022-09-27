import { UnideServiceId } from "./unique-id.service"

let service :UnideServiceId = null
beforeEach(() => {
  service = new UnideServiceId();
})


 describe(UnideServiceId.name, () => {
  it(`${UnideServiceId.prototype.generateUniqueIdWithPrefix.name} should generate if when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue()
  })

  it(`${UnideServiceId.prototype.generateUniqueIdWithPrefix.name} should  not generate duplicated ids when called multiple times`, () => {
    const ids = new Set();
    for(let i = 0; i < 50; i++){
      ids.add(service.generateUniqueIdWithPrefix('app'))
    }
    expect(ids.size).toBe(50);
  })

  it(`${UnideServiceId.prototype.getNumberOfGeneratedUniqueIds.name} should return  the numbers of generated Ids when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app')
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2)
  })


  it(`${UnideServiceId.prototype.generateUniqueIdWithPrefix.name} should throw exception when called with empty`, () => {
    const emptyValue = [null, undefined, '', '0']
    emptyValue.forEach(value =>{
      expect(()=> service.generateUniqueIdWithPrefix(value))
      .withContext(`value:${value}`)
      .toThrow()
    })
  })


 })
