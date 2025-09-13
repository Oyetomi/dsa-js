const bag = () => ({ count: 0, data: {} })
const find = (bag, value) => value in bag.data

const add = (bag, value) => {
  const newBag = { count: bag.count + 1, data: { ...bag.data } }
  if (find(bag, value)) {
    newBag.data[value]++
  } else {
    newBag.data[value] = 1
  }
  return newBag
}

const remove = (bag, value) => {
  if (find(bag, value)) {
    const newBag = { count: bag.count - 1, data: { ...bag.data } }
    if (newBag.data[value] > 1) {
      newBag.data[value]--
    } else {
      delete newBag.data[value]
    }
    return newBag
  }
  return bag
}

console.log("=== CORRECT USAGE ===")
const emptyBag = bag()
console.log("Empty bag:", emptyBag)

const b = add(emptyBag, 3)
console.log("After adding 3:", b)
