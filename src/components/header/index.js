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
      <div className="flex items-center justify-between gap-3 md:gap-8">
        <a
          href="https://drive.google.com/file/d/1dOoL_OxfWR-YAAF3KVQF_BW0xLnik6zC/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold duration-200 hover:text-teal-500 active:text-teal-600 dark:hover:text-teal-400 dark:active:text-teal-500"
        >
          My Resume
        </a>
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
    </div>
  )
}
export default Header
