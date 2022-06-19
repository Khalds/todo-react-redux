import { useState } from "react"
import { useDispatch } from "react-redux"

import { addTodo } from "./store/todoSlice"

import TodoList from "./components/TodoList"
import InputField from "./components/InputField"

import "./App.css"

function App() {
  const [text, setText] = useState("")

  const dispatch = useDispatch()

  const addTask = () => {
    if (text !== "") {
      dispatch(addTodo({ text }))
    }
    setText("")
  }

  // const toggleTodoCompleted = (todoId) => {
  //   // setTodos(
  //   //   todos.map((todo) => {
  //   //     if (todo.id !== todoId) return todo
  //   //     return {
  //   //       ...todo,
  //   //       completed: !todo.completed,
  //   //     }
  //   //   })
  //   // )
  // }

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  )
}

export default App
