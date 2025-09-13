const newBag = () => ({ count: 0, data: {} })
const isEmpty = (bag) => bag.count === 0
const find = (bag, value) => value in bag.data

const greatest = (bag) =>
  isEmpty(bag) ? undefined : Object.keys(bag.data).sort().pop()

const add = (bag, value) => {
  bag.count++
  if (find(bag, value)) {
    bag.data[value]++
  } else {
    bag.data[value] = 1
  }
  return bag
}

const remove = (bag, value) => {
  if (find(bag, value)) {
    bag.count--
    if (bag.data[value] > 1) {
      bag.data[value]--
    } else {
      delete bag.data[value]
    }
  }
  return bag
}

let b = newBag()
b = add(b, 3)
b = add(b, "hello")
console.log(isEmpty(b))
console.log(greatest(b))
