
export const changeTheme = (theme: string) => {
  if (typeof document !== 'undefined') {
    // Set new theme
    document.querySelector('html')?.setAttribute('season-theme', theme);
    // Dispatch themeChange event to functions that react to theme change
    const event = new Event('themeChange');
    window.dispatchEvent(event);
  }
}

export const getTheme = (): string | null => {
  if (typeof document !== 'undefined') {
    return document.documentElement.getAttribute('season-theme');
  }
  return null;
}