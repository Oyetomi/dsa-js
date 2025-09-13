class Bag {
  count = 0
  data = {}
  isEmpty() {
    return this.count === 0
  }
  find(value) {
    return value in this.data
  }
  greatest() {
    return this.isEmpty() ? undefined : Object.keys(this.data).sort().pop()
  }
  add(value) {
    this.count++
    if (this.find(value)) {
      this.data[value]++
    } else {
      this.data[value] = 1
    }
  }
  remove(value) {
    if (this.find(value)) {
      this.count--
      if (this.data[value] > 1) {
        this.data[value]--
      } else {
        delete this.data[value]
      }
    }
  }
}

const bag = new Bag()
bag.add(3)
bag.find(3)
bag.add(5)
bag.add(5)
console.log(bag.count)
bag.remove(5)
console.log(bag.count)
console.log(bag.greatest())
