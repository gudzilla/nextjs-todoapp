'use client'
import React from 'react'
import ThemeToggle from '../ToggleTheme'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

export type TodoItem = {
  id: string
  isDone: boolean
  text: string
}

export type TodoList = TodoItem[]

export default function TodoApp() {
  const [todos, setTodos] = React.useState<TodoList>([])

  const handleAddTodoItem = (text: string) => {
    setTodos([...todos, { id: crypto.randomUUID(), isDone: false, text: text }])
  }

  const handleChangeItemStatus = (id: string) => {
    const newTodoList = todos.map((item) =>
      item.id !== id ? item : { ...item, isDone: !item.isDone }
    )
    setTodos(newTodoList)
  }

  const handleRemoveTodoItem = (id: string) => {
    const newTodoList = todos.filter((item) => item.id !== id)
    setTodos(newTodoList)
  }

  React.useEffect(() => {
    const localTodos = localStorage.getItem('todos')
    if (localTodos) {
      setTodos(JSON.parse(localTodos))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="w-full">
      <div className="mb-8 flex justify-between">
        <h1 className="text-3xl">Список задач</h1>
        <ThemeToggle />
      </div>
      <AddTodoForm addTodoItem={handleAddTodoItem} />
      <TodoList
        todos={todos}
        changeStatus={handleChangeItemStatus}
        removeItem={handleRemoveTodoItem}
      />
    </div>
  )
}
