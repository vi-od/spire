'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type FontSize = 'small' | 'medium' | 'large' | 'xl'

interface ThemeContextType {
  theme: Theme
  fontSize: FontSize
  keyboardNavMode: boolean
  reducedMotion: boolean
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
  increaseFontSize: () => void
  decreaseFontSize: () => void
  toggleKeyboardNav: () => void
  toggleReducedMotion: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  fontSize: 'medium',
  keyboardNavMode: false,
  reducedMotion: false,
  toggleTheme: () => {},
  setTheme: () => {},
  increaseFontSize: () => {},
  decreaseFontSize: () => {},
  toggleKeyboardNav: () => {},
  toggleReducedMotion: () => {}
})

export const useTheme = () => {
  const context = useContext(ThemeContext)
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('light')
  const [fontSize, setFontSize] = useState<FontSize>('medium')
  const [keyboardNavMode, setKeyboardNavMode] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Set isClient to true after hydration
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Load preferences from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme
    const savedFontSize = localStorage.getItem('fontSize') as FontSize
    const savedKeyboardNav = localStorage.getItem('keyboardNavMode') === 'true'
    const savedReducedMotion = localStorage.getItem('reducedMotion') === 'true'

    // Set theme with fallback to light
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
      setThemeState(savedTheme)
    } else {
      setThemeState('light') // default to light mode
    }
    
    if (savedFontSize && ['small', 'medium', 'large', 'xl'].includes(savedFontSize)) {
      setFontSize(savedFontSize)
    }
    
    setKeyboardNavMode(savedKeyboardNav)
    setReducedMotion(savedReducedMotion)

    // Check for system preference for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReducedMotion(true)
    }

    // Listen for Tab key to enable keyboard navigation mode
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setKeyboardNavMode(true)
        localStorage.setItem('keyboardNavMode', 'true')
      }
    }

    // Listen for mouse clicks to disable keyboard navigation mode
    const handleMouseClick = () => {
      setKeyboardNavMode(false)
      localStorage.setItem('keyboardNavMode', 'false')
    }

    document.addEventListener('keydown', handleTabKey)
    document.addEventListener('mousedown', handleMouseClick)

    return () => {
      document.removeEventListener('keydown', handleTabKey)
      document.removeEventListener('mousedown', handleMouseClick)
    }
  }, [isClient])

  useEffect(() => {
    if (!isClient) return

    // Apply theme to document
    document.documentElement.classList.remove('light', 'dark', 'high-contrast')
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark', 'high-contrast')
    } else {
      document.documentElement.classList.add('dark')
    }

    // Apply font size
    document.documentElement.classList.remove('font-small', 'font-medium', 'font-large', 'font-xl')
    document.documentElement.classList.add(`font-${fontSize}`)

    // Apply keyboard navigation
    if (keyboardNavMode) {
      document.documentElement.classList.add('keyboard-nav')
    } else {
      document.documentElement.classList.remove('keyboard-nav')
    }

    // Apply reduced motion
    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion')
    } else {
      document.documentElement.classList.remove('reduced-motion')
    }

    // Save to localStorage
    localStorage.setItem('theme', theme)
    localStorage.setItem('fontSize', fontSize)
    localStorage.setItem('keyboardNavMode', keyboardNavMode.toString())
    localStorage.setItem('reducedMotion', reducedMotion.toString())
  }, [theme, fontSize, keyboardNavMode, reducedMotion, isClient])

  const toggleTheme = () => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light')
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  const increaseFontSize = () => {
    setFontSize(prev => {
      switch (prev) {
        case 'small': return 'medium'
        case 'medium': return 'large'
        case 'large': return 'xl'
        case 'xl': return 'xl'
        default: return 'medium'
      }
    })
  }

  const decreaseFontSize = () => {
    setFontSize(prev => {
      switch (prev) {
        case 'xl': return 'large'
        case 'large': return 'medium'
        case 'medium': return 'small'
        case 'small': return 'small'
        default: return 'medium'
      }
    })
  }

  const toggleKeyboardNav = () => {
    setKeyboardNavMode(prev => !prev)
  }

  const toggleReducedMotion = () => {
    setReducedMotion(prev => !prev)
  }

  if (!isClient) {
    return <div className="dark font-medium">{children}</div>
  }

  return (
    <ThemeContext.Provider value={{
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
    }}>
      {children}
    </ThemeContext.Provider>
  )
} 