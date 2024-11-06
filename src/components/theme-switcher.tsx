'use client'

import React, { useEffect, useState } from 'react';

const changeTheme = (theme: string) => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
}

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
