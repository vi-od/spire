'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const HelpPage = () => {
  const [activeSection, setActiveSection] = useState('overview')

  const helpSections = {
    overview: {
      title: 'Overview',
      content: `
SPIRE Help System
======================

SPIRE is a file system-style interface for organizing and accessing
learning resources. This help system provides comprehensive information
about using the platform.

Quick Start:
- Click on folders to navigate directories
- Click on files to view their contents  
- Use the ".." entry to go back to parent directories
- Use the theme toggle in the header to switch between light/dark modes

Navigation:
- Home menu: Return to main directory
- Tools menu: Search and utilities
- Help menu: This help system
      `
    },
    navigation: {
      title: 'Navigation',
      content: `
Navigation Guide
===============

Directory Navigation:
- Single-click folder icons to enter directories
- Use ".." (parent directory) to go back
- Click file icons to open files
- Use browser's back/forward buttons for navigation history

Menu System:
- Home: Return to main directory
- Tools: Search and utility functions  
- Help: Documentation and support

Address Bar:
- Shows current location in directory structure
- Displays full path from root directory

Status Bar:
- Shows file/folder counts
- Displays system information
- Current time and date

Mobile Navigation:
- Touch/tap to interact with files and folders
- Swipe gestures supported where applicable
- Responsive design adapts to screen size
      `
    },
    shortcuts: {
      title: 'Keyboard Shortcuts',
      content: `
Keyboard Navigation
==================

Basic Navigation:
- Tab: Move between clickable elements
- Enter: Activate selected link or button
- Space: Scroll down page / activate buttons
- Arrow keys: Navigate within menus and lists
- Esc: Close dialogs or return to previous state

Search:
- Use the search box in Tools section
- Enter: Execute search
- Clear search with backspace/delete

Browser Controls:
- Ctrl/Cmd + R: Refresh current page
- Ctrl/Cmd + W: Close current tab
- Ctrl/Cmd + T: Open new tab
- Ctrl/Cmd + L: Focus address bar
- Ctrl/Cmd + F: Find in page (browser search)

Accessibility:
- Tab: Navigate between interactive elements
- Shift + Tab: Navigate backwards
- Enter/Space: Activate buttons and links
- Arrow keys: Navigate within components

Note: Some shortcuts may vary by browser and operating system.
Theme toggle is available via the button in the header.
      `
    },
    faq: {
      title: 'FAQ',
      content: `
Frequently Asked Questions
=========================

Q: How do I add new content to SPIRE?
A: New content and files can be added by creating new pages and 
   updating the site structure. This is a development task.

Q: Can I search for specific files or content?
A: Yes, use the Tools > Search function to find files by name.
   The search will expand as more content is added to the site.

Q: How do I switch between light and dark themes?
A: Click the theme toggle button in the header (shows moon/sun icon).
   Your preference is automatically saved in your browser.

Q: Is my theme preference saved?
A: Yes, your theme choice is stored locally in your browser and
   will be remembered for future visits to the site.

Q: How do I navigate back to previous locations?
A: Use the ".." entry in any directory to go to the parent directory,
   or use your browser's back button.

Q: Can I use this on mobile devices?
A: Yes, SPIRE is fully responsive and works on phones, tablets,
   and desktop computers.

Q: Does this work offline?
A: Initial loading requires an internet connection. Some functionality
   may be cached by your browser for offline use.

Q: How do I bookmark a specific page?
A: Use your browser's bookmark feature (Ctrl/Cmd + D) to save any
   page for quick access later.
      `
    },
    technical: {
      title: 'Technical Info',
      content: `
Technical Information
====================

System Requirements:
- Modern web browser with JavaScript enabled
- Internet connection for initial loading
- Minimum screen resolution: 320px width
- Supports touch and mouse input

Browser Support:
- Chrome 80+ (recommended)
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile browsers on iOS and Android

Performance:
- Fast loading with optimized assets
- Responsive design for all screen sizes
- Minimal data usage
- Client-side theme switching

Data & Privacy:
- Theme preferences stored locally (localStorage)
- No personal data collected or transmitted
- No cookies required for basic functionality
- No external tracking or analytics

Technology Stack:
- Next.js 14 React framework
- TypeScript for type safety
- Tailwind CSS for styling
- Heroicons for iconography
- Responsive design principles

Compatibility:
- Works without plugins or extensions
- Graceful degradation for older browsers
- Progressive enhancement for better experience
- Accessibility features built-in

Troubleshooting:
- If styles don't load: Hard refresh (Ctrl/Cmd + F5)
- If theme doesn't persist: Check browser's localStorage settings
- For navigation issues: Ensure JavaScript is enabled
      `
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">SPIRE Help</span>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Link href="/" className="hover:underline">✕ Close</Link>
        </div>
      </div>

      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-48 bg-gray-50 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-600">
          <div className="p-2">
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">Help Topics</div>
            {Object.entries(helpSections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`w-full text-left px-2 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 rounded ${
                  activeSection === key 
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Content Header */}
          <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2">
            <h1 className="font-bold text-black dark:text-white">
              {helpSections[activeSection as keyof typeof helpSections].title}
            </h1>
          </div>

          {/* Content Body */}
          <div className="flex-1 p-4 overflow-auto">
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-black dark:text-white">
              {helpSections[activeSection as keyof typeof helpSections].content}
            </pre>
          </div>

          {/* Help Footer */}
          <div className="bg-gray-50 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 px-4 py-2">
            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
              <span>SPIRE Help System v1.0</span>
              <span>Use browser navigation for best experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpPage 