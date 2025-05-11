'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null // не рендерим, пока тема не определена

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      // className={`cursor-pointer rounded border p-2 ${
      //   theme === 'dark' ? 'hover:bg-blue-400' : 'hover:bg-red-200'
      // }`}

      className="cursor-pointer rounded bg-green-600 p-2 text-white hover:opacity-90"
    >
      Switch to {theme === 'dark' ? 'light' : 'dark'} mode
    </button>
  )
}
