'use client'

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    return (
        <div>
        <p>Current theme: {theme}</p>
        <button onClick={() => setTheme('autumn')}>Autumn</button>
        <br />
        <button onClick={() => setTheme('winter')}>Winter</button>
        <br />
        <button onClick={() => setTheme('spring')}>Spring</button>
        <br />
        <button onClick={() => setTheme('system')}>System Theme</button> {/* Automatically follows system theme */}
        </div>
    );
}
