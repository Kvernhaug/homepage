import React from "react";
import ThemeSwitcher from "../../components/theme-switcher";
import BasicContainer from "../../components/basic-container";

export default function Options() {
  return (
    <BasicContainer>
      <a className="text-2xl">Change Season Theme</a>
      <ThemeSwitcher />
    </BasicContainer>
  );
}
