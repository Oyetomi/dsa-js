const hanoi = (n, start, end) => {
  if (n === 1) {
    console.log(`Move disk from ${start} to ${end}`)
  } else {
    const helper = 6 - (start + end)
    hanoi(n - 1, start, helper)
    console.log(`Move disk from ${start} to ${end}`)
    hanoi(n - 1, helper, end)
  }
}

hanoi(3, 1, 2)
