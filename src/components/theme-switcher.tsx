'use client'

import React from 'react';
import { changeTheme } from '../utils/helpers'

export default function ThemeSwitcher() {

    return (
        <div>
        <button onClick={() => changeTheme('autumn')}>Autumn</button>
        <br />
        <button onClick={() => changeTheme('winter')}>Winter</button>
        <br />
        <button onClick={() => changeTheme('spring')}>Spring</button>
        <br />
        <button onClick={() => changeTheme('summer')}>Summer</button>
        </div>
    )
}
