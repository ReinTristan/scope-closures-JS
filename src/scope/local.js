const helloWorld = () => {
    const hello = "hello"
    console.log(hello)
}
helloWorld()
console.log(hello)

var scope = "Im global"

const functionScope = () => {
    var scope = "Im just a local"
    const func = () => {
        return scope
    }
    console.log(func())
}
functionScope()
console.log(scope)