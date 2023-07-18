function saveToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function readFromLocalStorage() {
    const data = localStorage.getItem('todos')
    if(data !== null){
        return JSON.parse(data)
    }
    return []
}

export {
    saveToLocalStorage,
    readFromLocalStorage
}