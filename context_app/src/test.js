

let previousData = {
    name: "hello"
}

let addData = (dataArgument) => {
    let finalData = {
        ...dataArgument,
        accessToData: true,
        add: () => {

        }
    }
    return finalData
}

let result = addData(previousData)
console.log(result);