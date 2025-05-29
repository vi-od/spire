'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { MagnifyingGlassIcon, DocumentIcon, FolderIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../components/ThemeProvider'
import ClientOnly from '../components/ClientOnly'

const ToolsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">Tools - SPIRE</span>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Link href="/" className="hover:underline">✕ Close</Link>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-1 text-xs">
        <div className="flex space-x-4">
          <span className="text-gray-700 dark:text-gray-300">Search</span>
          <span className="text-gray-700 dark:text-gray-300">Browser</span>
          <span className="text-gray-700 dark:text-gray-300">Settings</span>
        </div>
      </div>

      <ClientOnly fallback={
        <div className="p-4">
          <div className="text-center text-gray-500 dark:text-gray-400">
            Loading tools...
          </div>
        </div>
      }>
        <ToolsContent />
      </ClientOnly>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 px-4 py-1">
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
          <span>Tools Active</span>
          <span>SPIRE Tools v1.0</span>
        </div>
      </div>
    </div>
  )
}

const ToolsContent = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const { theme, toggleTheme } = useTheme()

  // Mock search functionality (you can expand this later)
  const handleSearch = () => {
    setIsSearching(true)
    setTimeout(() => {
      if (searchQuery.trim()) {
        // Mock results for demonstration
        const allItems = [
          // Main directories
          { name: 'Tutorials', type: 'folder', path: '/tutorials', size: '-' },
          { name: 'Resources', type: 'folder', path: '/resources', size: '-' },
          { name: 'spire-guide.md', type: 'file', path: '/getting-started', size: '8.5 KB' },
          
          // Tutorial subcategories
          { name: 'Games Tutorials', type: 'folder', path: '/tutorials/games', size: '-' },
          { name: 'Linux Tutorials', type: 'folder', path: '/tutorials/linux', size: '-' },
          { name: 'Mac Tutorials', type: 'folder', path: '/tutorials/mac', size: '-' },
          { name: 'Piracy Tutorials', type: 'folder', path: '/tutorials/piracy', size: '-' },
          { name: 'Windows Tutorials', type: 'folder', path: '/tutorials/windows', size: '-' },
          
          // Resource subcategories
          { name: 'Coding Resources', type: 'folder', path: '/resources/coding', size: '-' },
          { name: 'Games Resources', type: 'folder', path: '/resources/games', size: '-' },
          { name: 'Linux Resources', type: 'folder', path: '/resources/linux', size: '-' },
          { name: 'Mac Resources', type: 'folder', path: '/resources/mac', size: '-' },
          { name: 'Piracy Resources', type: 'folder', path: '/resources/piracy', size: '-' },
          { name: 'Windows Resources', type: 'folder', path: '/resources/windows', size: '-' },
        ]
        
        setSearchResults(allItems.filter(item => 
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        ))
      } else {
        setSearchResults([])
      }
      setIsSearching(false)
    }, 500)
  }

  const getBrowserInfo = () => {
    const userAgent = navigator.userAgent
    let browserName = 'Unknown'
    if (userAgent.includes('Chrome')) browserName = 'Chrome'
    else if (userAgent.includes('Firefox')) browserName = 'Firefox'
    else if (userAgent.includes('Safari')) browserName = 'Safari'
    else if (userAgent.includes('Edge')) browserName = 'Edge'
    
    return browserName
  }

  const systemInfo = {
    browser: getBrowserInfo(),
    theme: theme === 'light' ? 'Light Mode' : 'Dark Mode',
    viewport: typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : 'Unknown',
    language: typeof navigator !== 'undefined' ? navigator.language : 'Unknown',
    online: typeof navigator !== 'undefined' ? (navigator.onLine ? 'Connected' : 'Offline') : 'Unknown',
    cookies: typeof document !== 'undefined' ? (document.cookie ? 'Enabled' : 'Disabled') : 'Unknown'
  }

  return (
    <div className="p-4 space-y-6">
      {/* Search Tool */}
      <div className="border border-gray-300 dark:border-gray-600">
        <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 border-b border-gray-300 dark:border-gray-600">
          <h2 className="font-bold text-black dark:text-white">Search Files</h2>
        </div>
        <div className="p-3">
          <div className="flex space-x-2 mb-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Enter search query..."
              className="flex-1 px-2 py-1 border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white text-sm"
            />
            <button
              onClick={handleSearch}
              disabled={isSearching}
              className="px-3 py-1 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 border border-gray-500 dark:border-gray-400 text-gray-800 dark:text-gray-200 text-sm flex items-center"
            >
              <MagnifyingGlassIcon className="h-4 w-4 mr-1" />
              {isSearching ? 'Searching...' : 'Search'}
            </button>
          </div>
          
          {searchResults.length > 0 && (
            <div className="border border-gray-300 dark:border-gray-600">
              <div className="bg-gray-50 dark:bg-gray-700 px-2 py-1 text-xs font-bold text-gray-700 dark:text-gray-300">
                Search Results ({searchResults.length} found)
              </div>
              {searchResults.map((result, index) => (
                <div key={index} className="flex items-center px-2 py-1 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                  {result.type === 'folder' ? (
                    <FolderIcon className="h-4 w-4 text-yellow-600 dark:text-yellow-400 mr-2" />
                  ) : (
                    <DocumentIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                  )}
                  <Link href={result.path} className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    {result.name}
                  </Link>
                  <span className="ml-auto text-xs text-gray-500 dark:text-gray-400">{result.size}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Browser Information */}
      <div className="border border-gray-300 dark:border-gray-600">
        <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 border-b border-gray-300 dark:border-gray-600">
          <h2 className="font-bold text-black dark:text-white">Browser Information</h2>
        </div>
        <div className="p-3">
          <table className="w-full text-sm">
            <tbody>
              {Object.entries(systemInfo).map(([key, value]) => (
                <tr key={key} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-1 pr-4 font-medium text-gray-700 dark:text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}:
                  </td>
                  <td className="py-1 text-gray-600 dark:text-gray-400">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="border border-gray-300 dark:border-gray-600">
        <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 border-b border-gray-300 dark:border-gray-600">
          <h2 className="font-bold text-black dark:text-white">Quick Actions</h2>
        </div>
        <div className="p-3 space-y-2">
          <button 
            onClick={toggleTheme}
            className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm text-gray-700 dark:text-gray-300"
          >
            🌓 Toggle Theme ({theme === 'light' ? 'Switch to Dark' : 'Switch to Light'})
          </button>
          <Link 
            href="/"
            className="block w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm text-gray-700 dark:text-gray-300"
          >
            🏠 Browse Files
          </Link>
          <Link 
            href="/getting-started"
            className="block w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm text-gray-700 dark:text-gray-300"
          >
            📄 View Complete Guide
          </Link>
          <button 
            onClick={() => window.location.reload()}
            className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm text-gray-700 dark:text-gray-300"
          >
            🔄 Refresh Page
          </button>
        </div>
      </div>
    </div>
  )
}

export default ToolsPage 