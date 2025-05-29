'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const AccessibilityPage = () => {
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString())
  }, [])

  return (
    <div id="main-content" className="min-h-screen bg-white dark:bg-gray-900 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">accessibility.txt - Accessibility Guide</span>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Link href="/" className="hover:underline">✕ Close</Link>
        </div>
      </div>

      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-50 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-600 p-4">
          <h3 className="font-bold text-black dark:text-white mb-4">Navigation</h3>
          <nav className="space-y-2 text-sm">
            <a href="#overview" className="block text-blue-600 dark:text-blue-400 hover:underline">Overview</a>
            <a href="#keyboard" className="block text-blue-600 dark:text-blue-400 hover:underline">Keyboard Navigation</a>
            <a href="#visual" className="block text-blue-600 dark:text-blue-400 hover:underline">Visual Accessibility</a>
            <a href="#screen-readers" className="block text-blue-600 dark:text-blue-400 hover:underline">Screen Readers</a>
            <a href="#shortcuts" className="block text-blue-600 dark:text-blue-400 hover:underline">Keyboard Shortcuts</a>
            <a href="#support" className="block text-blue-600 dark:text-blue-400 hover:underline">Browser Support</a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto text-black dark:text-white">
            <pre className="whitespace-pre-wrap leading-relaxed">
{`# SPIRE Accessibility Guide

## Overview {#overview}

SPIRE is designed to be accessible to all users, including those who use assistive technologies. We strive to meet WCAG 2.1 AA standards and provide multiple ways to interact with our learning platform.

## Keyboard Navigation {#keyboard}

### Basic Navigation
- TAB: Move to next interactive element
- SHIFT + TAB: Move to previous interactive element  
- ENTER: Activate buttons and links
- SPACE: Activate buttons and checkboxes
- ESC: Close menus and dialogs

### File System
- Arrow Keys: Navigate file list
- ENTER: Open selected file/folder
- Backspace: Go to parent directory
- Home/End: Go to first/last item

## Visual Accessibility {#visual}

### Theme Options
Available in the accessibility menu (♿ A11Y button):

1. **Light Theme**: Darker background with lighter text, easier on eyes
2. **Dark Theme**: Maximum contrast for visual clarity
   - Pure black background
   - Pure white text
   - Yellow highlights for links and focus states

### Font Size Controls
- A- button: Decrease font size
- A+ button: Increase font size
- Available sizes: Small (12px), Medium (14px), Large (16px), XL (18px)
- Settings are automatically saved

### Motion Controls
- **Reduced Motion**: Disables animations and transitions
- Automatically detects system preference
- Can be manually toggled in accessibility menu

## Screen Reader Support {#screen-readers}

### Tested With
- NVDA (Windows)
- JAWS (Windows)  
- VoiceOver (macOS)
- Orca (Linux)

### Features
- Semantic HTML structure
- ARIA labels and descriptions
- Skip links to main content
- Descriptive link text
- Alternative text for images
- Form labels and instructions

### Screen Reader Tips
- Use heading navigation (H key) to jump between sections
- Use landmark navigation (D key for main content)
- Forms include clear labels and error messages
- Tables include column headers

## Keyboard Shortcuts {#shortcuts}

### Global Shortcuts
- Alt + 1: Go to Home
- Alt + 2: Go to Tools
- Alt + 3: Go to Help

### Text Editor Shortcuts
- Ctrl + A: Select all
- Ctrl + C: Copy
- Ctrl + V: Paste
- Ctrl + Z: Undo

### Accessibility Menu
- F12: Toggle accessibility menu
- Ctrl + Plus: Increase font size
- Ctrl + Minus: Decrease font size

## Browser Support {#support}

### Minimum Requirements
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

### Recommended Settings
- Enable JavaScript
- Allow localStorage for preferences
- Enable focus indicators
- Use zoom instead of font-only scaling

### Browser Accessibility Features
- Most browsers have built-in accessibility tools
- Windows: Windows + U for Ease of Access
- macOS: System Preferences > Accessibility
- Chrome: Settings > Advanced > Accessibility

## Getting Help {#help}

If you encounter accessibility barriers:

1. Check the Help section for solutions
2. Try different themes or font sizes
3. Enable keyboard navigation mode
4. Contact support with specific details about:
   - Your operating system
   - Your browser and version
   - Assistive technology being used
   - Description of the problem

## Feedback

We're committed to improving accessibility. Please let us know:
- What works well for you
- What could be improved
- Missing features you need
- Suggestions for better usability

---

Last updated: ${currentDate || 'Loading...'}
Accessibility standards: WCAG 2.1 AA
Testing: Automated and manual testing performed`}
            </pre>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 px-4 py-1">
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
          <span>Accessibility Guide | WCAG 2.1 AA Compliant</span>
          <span>Last updated: {currentDate || 'Loading...'}</span>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityPage 