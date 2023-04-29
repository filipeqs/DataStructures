class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push({ key, value });
  }

  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      const arr = this.keyMap[index];

      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element.key === key) return element;
      }
    }

    return undefined;
  }

  values() {
    const valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(!this.keyMap[i][j].value))
            valuesArr.push(this.keyMap[i][j].value);
        }
      }
    }

    return valuesArr;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArray.includes(!this.keyMap[i][j].key))
            keysArray.push(this.keyMap[i][j].key);
        }
      }
    }

    return keysArray;
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}

const hashMap = new HashTable();
