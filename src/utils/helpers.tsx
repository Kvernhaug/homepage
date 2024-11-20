
export const changeTheme = (theme: string) => {
  if (typeof document !== 'undefined') {
    // Set new theme
    document.querySelector("html")?.setAttribute("data-theme", theme);
    // Dispatch themeChange event to functions dependent on active theme
    const event = new Event('themeChange');
    window.dispatchEvent(event);
  }
}

export const getTheme = (): string | null => {
  return document.documentElement.getAttribute('data-theme');
}