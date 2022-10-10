import React, { useEffect, useState } from 'react'
import { IconTheme } from '../Icons'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  const initDarkMode = () => {
    const isDarkMode = localStorage.getItem('russ-theme')
    if (isDarkMode === 'dark') {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }

  useEffect(() => {
    initDarkMode()
  }, [])

  const changeThemeHandler = (theme) => () => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
    localStorage.setItem('russ-theme', theme)
  }
  return (
    <div className="flex items-center justify-between py-5">
      <div className="flex items-baseline text-2xl">
        <span className="font-bold">RUSS</span>
        <span className="">Tran</span>
      </div>
      <button
        type="button"
        onClick={
          darkMode ? changeThemeHandler('light') : changeThemeHandler('dark')
        }
        aria-label="Change theme"
      >
        <IconTheme isDarkMode={darkMode} />
      </button>
    </div>
  )
}
export default Header
