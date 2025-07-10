// components/ThemeToggle.tsx
'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const isDark = localStorage.getItem('theme') === 'dark'
        setDarkMode(isDark)
        document.documentElement.classList.toggle('dark', isDark)
    }, [])

    const toggleTheme = () => {
        const newMode = !darkMode
        setDarkMode(newMode)
        localStorage.setItem('theme', newMode ? 'dark' : 'light')
        document.documentElement.classList.toggle('dark', newMode)
    }

    return (
        <button onClick={toggleTheme}>
            {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
    )
}
