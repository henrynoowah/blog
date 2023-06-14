export const themeCheck = () => {
  try {
    const userTheme = window.localStorage && localStorage.getItem('theme')
    const isSystemThemeDark = window.matchMedia('(prefers-color-scheme:dark)').matches
    if (userTheme === 'dark' || (!userTheme && isSystemThemeDark)) {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
      return true
    }
  } catch (e) {
    return false
  }
  return false
}

export const themeSwitch = () => {
  try {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  } catch (e) {}
}
