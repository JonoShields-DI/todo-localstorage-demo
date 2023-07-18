import { useEffect, useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import { readFromLocalStorage, saveToLocalStorage } from './utils/LocalStorage'

function App() {
  const [todos, setTodos] = useState(readFromLocalStorage())
  const [toAdd, setToAdd] = useState('')

  useEffect(() => {
    saveToLocalStorage(todos)
  },[todos])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(toAdd.length > 0){
      setTodos((prevTodos) => [
        ...prevTodos,
        toAdd
      ])
      setToAdd('')
    }
  }

  const handleRemoveTask = (task) => {
    const updatedTodos = todos.filter((item) => item !== task)
    setTodos(updatedTodos)
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={toAdd} onChange={(e) => {setToAdd(e.target.value)}}></input>
        <input type='submit' value="+" />
      </form>
      <div>
        { todos &&
          todos.map((todo, index) => {
            return <TodoItem onRemove={handleRemoveTask} task={todo} key={todo + index}/>
          })
        }
      </div>
    </>
  )
}

export default App
