const person = () => {
    var saveName = "Rein"
    return {
        getName: () => {
            return saveName
        },
        setName: (name) => {
            saveName = name
        }
    }
}
const newPerson = person()
console.log(newPerson.getName())
newPerson.setName("Tristan")
console.log(newPerson.getName())