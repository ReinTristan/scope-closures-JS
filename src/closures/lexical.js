const buildCount = (i) => {
    let count = i
    const displayCount = () => {
        console.log(count++)
    }
    return displayCount
}

const myCount = buildCount(1)
myCount()
myCount()
myCount()

const anotherCount = buildCount(10)
anotherCount()
anotherCount()
anotherCount()