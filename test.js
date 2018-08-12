const Map = require('.');
const assert = require('assert');

const src = [1, 2, 3];
const iMap = src => new Map(src.map(i => [i, i]))
const map = iMap(src);

if (typeof describe === 'undefined') {
  test();
  console.log('ok');
} else {
  describe('test', () => it('should pass', test));
}

function test() {
  // throw new Error('test')
  assert(map instanceof Map)
  assert(map instanceof global.Map)

  assert.equal(map.getKey(1), 1)
  assert.equal(map.getKey(0), undefined)
  assert.equal(map.hasValue(1), true)
  assert.equal(map.hasValue(0), false)

  assert.deepEqual(map.map(i => 0), new Map(src.map(i => [i, 0])))
  assert.deepEqual(map.mapKeys(i => 0), new Map(src.map(i => [0, i])))

  assert.deepEqual(map.mapArray(i => i), src)

  assert.deepEqual(map.filter(i => i !== 2), iMap([1, 3]));

  assert.deepEqual(map.find(v => v === 2), 2);

  assert.deepEqual(Array.from(map.reverse().values()), Array.from(map.values()).reverse());
  assert.deepEqual(Array.from(iMap(src).reverse(true).values()), Array.from(map.values()).reverse());
  assert.throws(() => assert.equal(map, map.reverse()));
  (map => assert.equal(map, map.reverse(true)))(iMap(src))

  assert.deepEqual(Array.from(map.invert().values()), Array.from(map.values()));
  assert.deepEqual(Array.from(iMap(src).invert(true).values()), Array.from(map.values()));
  assert.throws(() => assert.equal(map, map.invert()));
  (map => assert.equal(map, map.invert(true)))(iMap(src))

  assert.deepEqual(map.valuesArray(), Array.from(map.values()))
  assert.deepEqual(map.keysArray(), Array.from(map.keys()))
  assert.deepEqual(map.entriesArray(), Array.from(map.entries()))

  assert.equal(map.size, map.length)
}
