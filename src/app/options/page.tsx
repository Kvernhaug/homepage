import React from "react";
import ThemeSwitcher from "../../components/theme-switcher";


export default function Options() {
    return(
        <div className="flex flex-col m-10 bg-neutral-300 bg-opacity-70 rounded-2xl">
            <a className="mx-5 mt-5 text-2xl">Change Season Theme</a>
            <ThemeSwitcher />
        </div>
    )
}