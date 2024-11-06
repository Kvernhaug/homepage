'use client'

import React from 'react';
import Image from 'next/image';
import { changeTheme } from '../utils/helpers'

export default function ThemeSwitcher() {

    return (
        <div>
            <button className="m-5" onClick={() => changeTheme('spring')} aria-label='Spring Theme'>
                <Image src={'/images/spring.png'} alt="Spring Icon" width={80} height={80} />
            </button>
            <button className="m-5" onClick={() => changeTheme('summer')} aria-label='Summer Theme'>
                <Image src={'/images/summer.png'} alt="Summer Icon" width={80} height={80} />
            </button>
            <button className="m-5" onClick={() => changeTheme('autumn')} aria-label='Autumn Theme'>
                <Image src={'/images/autumn.png'} alt="Autumn Icon" width={80} height={80} />
            </button>
            <button className="m-5" onClick={() => changeTheme('winter')} aria-label='Winter Theme'>
                <Image src={'/images/winter.png'} alt="Winter Icon" width={80} height={80} />
            </button>
        </div>
    )
}
