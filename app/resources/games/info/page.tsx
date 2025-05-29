import React from 'react'
import Link from 'next/link'

const GamesResourcesInfoPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">info.txt - Games Resources</span>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Link href="/resources/games" className="hover:underline">✕ Close</Link>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-2 py-1 text-xs">
        <div className="flex space-x-4">
          <span className="text-gray-700 dark:text-gray-300">File</span>
          <span className="text-gray-700 dark:text-gray-300">Edit</span>
          <span className="text-gray-700 dark:text-gray-300">View</span>
          <span className="text-gray-700 dark:text-gray-300">Help</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <pre className="whitespace-pre-wrap text-black dark:text-white leading-relaxed font-mono text-sm">
{`Games Resources Directory
=========================

This directory contains gaming reference materials, including:

- Game databases and catalogs
- Modding guides and collections
- Configuration files and templates
- Performance optimization resources
- Gaming hardware references
- Platform-specific gaming guides (Steam, Epic, GOG)
- Community resources and forums
- Game development resources
- Retro gaming preservation materials
- Troubleshooting and compatibility guides

Supported Platforms:
- PC Gaming (Windows, Linux, Mac)
- Console gaming resources
- Mobile gaming guides
- VR gaming resources

File Types Expected:
- .md files for comprehensive resource guides
- .txt files for quick reference materials
- Configuration files and templates
- Database files and catalogs

Last Updated: December 15, 2024
Status: Ready for content
Category: Gaming & Entertainment`}
          </pre>
        </div>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 px-4 py-1">
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
          <span>Games Resources | Directory Information</span>
          <span>info.txt | 1.2 KB</span>
        </div>
      </div>
    </div>
  )
}

export default GamesResourcesInfoPage 