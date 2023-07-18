import { readFromLocalStorage, saveToLocalStorage } from './LocalStorage'

beforeEach(() => {
    localStorage.clear();
})

it("should load a list from local storage", () => {
    // arrange
    const expectedListOfTodos = ["get oranges", "go for a run", "make dinner"]
    localStorage.setItem('todos', JSON.stringify(expectedListOfTodos))

    // act
    const actualTodos = readFromLocalStorage()

    // assert
    expect(actualTodos).toEqual(expectedListOfTodos)
})

it("should return an empty list if there is none in local storage", () => {
    // arrange
    const expectedListOfTodos = []

    // act
    const actualTodos = readFromLocalStorage()

    // assert
    expect(actualTodos).toEqual(expectedListOfTodos)
})

it("should save a list to storage", () => {
    // arrange
    const expectedListOfTodos = ["get oranges", "go for a run", "make dinner"]

    // act
    saveToLocalStorage(expectedListOfTodos)

    // assert
    const actualStoredTodos = JSON.parse(localStorage.getItem('todos'))
    expect(actualStoredTodos).toEqual(expectedListOfTodos)
})