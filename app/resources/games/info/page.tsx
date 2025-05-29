import React from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const gamesInfoMarkdownContent = `
# Games Resources Directory

This directory contains gaming-related reference materials, including:

*   Game databases and information
*   Mod collections and repositories
*   Configuration files and settings
*   Performance optimization configs
*   Gaming hardware compatibility lists
*   Game launcher configurations
*   Emulator settings and BIOS files
*   Cheat codes and game guides
*   Gaming community resources
*   Streaming and recording setups

## Gaming Platforms Covered:

*   PC Gaming (Steam, Epic, GOG)
*   Console Gaming
*   Mobile Gaming
*   Retro Gaming and Emulation
*   VR Gaming setups

## File Types Expected:

*   TXT files for game information
*   Configuration files and templates
*   MD files for comprehensive guides
*   Save files and game data
*   Mod files and patches

---
Last Updated: December 15, 2024
Status: Ready for content
Category: Gaming & Entertainment
`

const GamesResourcesInfoPage = () => {
  return (
    <div className="min-h-screen bg-purple-50 dark:bg-purple-900/10 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">info.md - Games Resources</span>
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
        <article className="prose dark:prose-invert max-w-4xl mx-auto">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{gamesInfoMarkdownContent}</ReactMarkdown>
        </article>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 px-4 py-1">
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
          <span>Games Resources | Directory Information</span>
          <span>info.md | 1.2 KB</span>
        </div>
      </div>
    </div>
  )
}

export default GamesResourcesInfoPage 