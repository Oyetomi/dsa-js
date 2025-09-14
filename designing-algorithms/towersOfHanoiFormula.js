/**
 *@property helper pegs numbered 1,2,3 then 1+2+3 = 6
 * so if start = 1 and end = 3 then the helper = 6(1+3) = 2
 * This automatically calculates which peg to use as the helper
 */
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
