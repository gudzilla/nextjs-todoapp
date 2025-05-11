'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={`cursor-pointer rounded border p-2 ${
        theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
      }`}

      // todo: delete
      // className="cursor-pointer rounded bg-gray-300 p-2 hover:opacity-90"
    >
      Включить {theme === 'dark' ? 'светлую' : 'темную'} тему
    </button>
  )
}
