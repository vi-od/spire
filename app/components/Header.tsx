'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import ClientOnly from './ClientOnly'

const Header = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Tools', href: '/tools' },
    { name: 'Help', href: '/help' },
  ]

  return (
    <>
      {/* Skip Link for screen readers */}
      <ClientOnly>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
      </ClientOnly>
      
      <header className="bg-gray-200 dark:bg-gray-700 border-b-2 border-gray-400 dark:border-gray-600 font-mono text-sm">
        <div className="flex justify-between items-center">
          <div className="flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-1 hover:bg-gray-300 dark:hover:bg-gray-600 border-r border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <HeaderControls />
        </div>
      </header>
    </>
  )
}

const HeaderControls = () => {
  const { 
    theme, 
    fontSize, 
    keyboardNavMode, 
    reducedMotion,
    toggleTheme, 
    setTheme,
    increaseFontSize, 
    decreaseFontSize,
    toggleKeyboardNav,
    toggleReducedMotion
  } = useTheme()
  
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false)

  const getThemeButtonText = () => {
    switch(theme) {
      case 'light':
        return { icon: '⚫', text: 'Dark' }
      case 'dark':
        return { icon: '🌙', text: 'Light' }
      default:
        return { icon: '⚫', text: 'Dark' }
    }
  }

  const getCurrentThemeLabel = () => {
    switch(theme) {
      case 'light':
        return 'Light Theme'
      case 'dark':
        return 'Dark Theme'
      default:
        return 'Light Theme'
    }
  }

  const { icon, text } = getThemeButtonText()

  return (
    <ClientOnly fallback={
      <div className="flex items-center space-x-1">
        <div className="px-3 py-1 mx-2 bg-gray-300 dark:bg-gray-600 border border-gray-500 dark:border-gray-400 text-gray-800 dark:text-gray-200 text-xs">
          🌙 Light
        </div>
      </div>
    }>
      <div className="flex items-center space-x-1">
        {/* Font Size Controls */}
        <div className="flex items-center border-l border-gray-400 dark:border-gray-600 pl-2">
          <button
            onClick={decreaseFontSize}
            className="px-2 py-1 text-xs bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 border border-gray-500 dark:border-gray-400 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            title="Decrease font size"
            aria-label="Decrease font size"
          >
            A-
          </button>
          <span className="px-2 text-xs text-gray-600 dark:text-gray-400">
            {fontSize.charAt(0).toUpperCase() + fontSize.slice(1)}
          </span>
          <button
            onClick={increaseFontSize}
            className="px-2 py-1 text-xs bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 border border-gray-500 dark:border-gray-400 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            title="Increase font size"
            aria-label="Increase font size"
          >
            A+
          </button>
        </div>

        {/* Accessibility Menu */}
        <div className="relative">
          <button
            onClick={() => setShowAccessibilityMenu(!showAccessibilityMenu)}
            className="px-2 py-1 mx-1 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 border border-gray-500 dark:border-gray-400 text-gray-800 dark:text-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            title="Accessibility options"
            aria-label="Open accessibility menu"
            aria-expanded={showAccessibilityMenu}
          >
            ♿ A11Y
          </button>

          {showAccessibilityMenu && (
            <div className="absolute right-0 top-full mt-1 bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-600 shadow-lg p-2 min-w-48 z-50">
              <h3 className="font-bold text-black dark:text-white mb-2 text-xs">Accessibility</h3>
              
              {/* Current Theme Display */}
              <div className="mb-3 p-2 bg-blue-50 dark:bg-blue-900/30 rounded">
                <div className="text-xs text-blue-800 dark:text-blue-200 font-bold">
                  Current: {getCurrentThemeLabel()}
                </div>
              </div>

              {/* Theme Selection */}
              <div className="mb-3">
                <label className="text-xs text-gray-700 dark:text-gray-300 block mb-1">Switch Theme:</label>
                <div className="space-y-1">
                  <button
                    onClick={() => setTheme('light')}
                    className={`block w-full text-left px-2 py-1 text-xs rounded ${
                      theme === 'light' 
                        ? 'bg-blue-500 text-white' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    🌙 Light Theme
                  </button>
                  <button
                    onClick={() => setTheme('dark')}
                    className={`block w-full text-left px-2 py-1 text-xs rounded ${
                      theme === 'dark' 
                        ? 'bg-blue-500 text-white' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    ⚫ Dark Theme
                  </button>
                </div>
              </div>

              {/* Accessibility Toggles */}
              <div className="space-y-2">
                <button
                  onClick={toggleKeyboardNav}
                  className={`block w-full text-left px-2 py-1 text-xs rounded ${
                    keyboardNavMode 
                      ? 'bg-green-500 text-white' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  ⌨️ Keyboard Navigation {keyboardNavMode ? 'ON' : 'OFF'}
                </button>
                
                <button
                  onClick={toggleReducedMotion}
                  className={`block w-full text-left px-2 py-1 text-xs rounded ${
                    reducedMotion 
                      ? 'bg-green-500 text-white' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  🐌 Reduced Motion {reducedMotion ? 'ON' : 'OFF'}
                </button>
              </div>

              <div className="mt-3 pt-2 border-t border-gray-300 dark:border-gray-600">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Press Tab to navigate with keyboard
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="px-3 py-1 mx-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 border border-gray-500 dark:border-gray-400 text-gray-800 dark:text-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          title={`Switch to ${text.toLowerCase()} mode`}
          aria-label={`Current: ${getCurrentThemeLabel()}. Click to switch to ${text.toLowerCase()} mode.`}
        >
          {icon} {text}
        </button>
      </div>
    </ClientOnly>
  )
}

export default Header 