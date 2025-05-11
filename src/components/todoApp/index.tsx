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

const INITIAL_STATE: TodoItem[] = [
  { id: '1', isDone: false, text: 'Сделать домашку' },
  {
    id: '2',
    isDone: false,
    text: 'Погулять с собакой Погулять с собакой Погулять с собакой Погулять с собакой Погулять с собакой Погулять с собакой ',
  },
  { id: '3', isDone: false, text: 'Пойти в магазин' },
]

export type TodoList = TodoItem[]

export default function TodoApp() {
  const [todos, setTodos] = React.useState<TodoList>(INITIAL_STATE)

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
