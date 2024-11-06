
export const changeTheme = (theme: string) => {
  if (typeof document !== 'undefined') {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }
}
