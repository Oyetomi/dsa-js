class Bag {
  count = 0
  data = {}
  find(value) {
    return value in this.data
  }
  add(value) {
    this.count++
    if (this.find(value)) {
      this.data[value]++
    } else {
      this.data[value] = 1
    }
    return this
  }
  remove(value) {
    if (this.find(value)) {
      this.count--
      this.data[value]--
      if (this.data[value] === 0) {
        delete this.data[value]
      }
    }
    return this
  }
  isEmpty() {
    return this.count === 0
  }
  greatest() {
    if (!this.isEmpty()) {
      return Object.keys(this.data).sort().pop()
    } else {
      return undefined
    }
  }
}

const bag = new Bag()
bag.add(3).add("hello").add(3).remove(3)
console.log(bag.count)
