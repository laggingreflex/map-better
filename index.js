class MapBetter extends Map {
  constructor(...args) { super(...args) }
  map(callback, thisArg) {
    return new MapBetter(this.entriesArray().map(([key, value]) => {
      const newValue = callback.call(thisArg || this, value, key, this);
      return [key, newValue];
    }));
  }
  mapKeys(callback, thisArg) {
    return new MapBetter(this.entriesArray().map(([key, value]) => {
      const newKey = callback.call(thisArg || this, key, value, this);
      return [newKey, value];
    }));
  }
  mapArray(callback, thisArg) {
    return this.entriesArray().map(([key, value]) => {
      const newValue = callback.call(thisArg || this, value, key, this);
      return newValue;
    });
  }
  filter(callback, thisArg) {
    return new MapBetter(this.entriesArray().filter(([key, value]) => callback.call(thisArg || this, value, key, this)));
  }
  reverse(inPlace) {
    if (inPlace) {
      const entries = this.entriesArray().reverse();
      for (const [key] of this) {
        this.delete(key);
      }
      for (const [key, value] of entries) {
        this.set(key, value);
      }
    } else {
      return new MapBetter(this.entriesArray().reverse());
    }
  }
  invert(inPlace) {
    if (inPlace) {
      for (const [key, value] of this) {
        this.delete(key);
        this.set(value, key);
      }
    } else {
      return new MapBetter(this.entriesArray().map(_ => _.reverse()));
    }
  }
  valuesArray() { return Array.from(this.values()); }
  keysArray() { return Array.from(this.keys()); }
  entriesArray() { return Array.from(this.entries()); }
  get length() { return this.size; }
}

MapBetter.from = (array, mapper) => new MapBetter(array.map(key => [key, mapper(key)]));

module.exports = MapBetter;
