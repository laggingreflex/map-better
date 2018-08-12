# map-better

[Map] with better functions

[Map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

## Install

```
npm i map-better
```

## Usage

```js
const Map = require('map-better')
```

### API


* **`.getKey(value)`** Returns the key of the specified element
* **`.hasValue(value)`** Returns a boolean indicating whether the element (at any key) exists or not
* **`.setKey(value, key)`** Updates the key of the specified element (or throws an error if element doesn't exist)
* **`.map((value, key) => newValue)`** Creates a new Map with same keys but with values from the result of the callback
* **`.mapKeys((key, value) => newKey)`**    〃   a new Map with same *values* but with *keys* from the result of the callback
* **`.mapArray((value, key) => newValue)`** Creates a new array with the results of the callback
* **`.filter((value, key) => true|false)`** Creates a (new) [filtered] Map (with the same keys)
* **`.find((value) => true|false)`** Returns first element (**value**) that satisfies the testing function
* **`.reverse(inPlace = false)`** Reverses the (iterator of the) Map
* **`.invert(inPlace = false)`** Inverts `keys` `<==>` `values` of the Map
* **`.entriesArray()`** Returns <code>[Array.from]\(this[.entries()])</code>
* **`.valuesArray()`** Returns <code>[Array.from]\(this[.values()])</code>
* **`.keysArray()`** Returns <code>[Array.from]\(this[.keys()])</code>
* **`.length`** Returns <code>this[.size]</code>
* **`Map.from(array, (key) => value)`** Create a new Map using keys from an array and values from the callback

[filtered]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[Array.from]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
[.values()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values
[.keys()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys
[.entries()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries
[.size]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size
