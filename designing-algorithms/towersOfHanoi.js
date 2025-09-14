const towers = (disks, origin, extra, destination) => {
  if (disks > 0) {
    towers(disks - 1, origin, destination, extra)
    console.log(`Move disk ${disks} from ${origin} to ${destination}`)
    towers(disks - 1, extra, origin, destination)
  }
}

towers(2, "A", "B", "C")
