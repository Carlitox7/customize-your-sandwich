import React, { useEffect, useState } from 'react'

import ThemeSwitch from './components/inputs/ThemeSwitch'

import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    console.log('darkMode?: ', darkMode)
  }, [darkMode])

  return (
    <div
      className={`h-screen w-full ${
        darkMode && 'dark'
      }`}
    >
      <div className='h-full w-full bg-white dark:bg-stone-900'>
        {/* App bar */}
        <div className='flex flex-row bg-red-100 px-10 p-6 place-content-between'>
          {/* Logo */}
          <img
            className='object-contain max-h-8'
            src='/assets/images/logo.png'
            alt='logo'
          />
          {/* Dark/Light Switch */}
          <div>
            <ThemeSwitch
              darkMode={darkMode}
              onChange={(ev) => setDarkMode(ev)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
