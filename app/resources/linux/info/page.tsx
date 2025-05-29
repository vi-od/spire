import React from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const linuxInfoMarkdownContent = `
# Linux Resources Directory

This directory contains Linux-related reference materials, including:

*   Command reference guides and cheat sheets
*   Linux distribution comparison charts
*   Package manager quick references
*   System configuration templates
*   Shell scripting examples
*   Service and daemon configurations
*   Network setup references
*   Security configuration guides
*   Performance monitoring tools list
*   Linux certification study materials

## Distributions Covered:

*   Ubuntu/Debian
*   CentOS/RHEL/Fedora
*   Arch Linux
*   openSUSE
*   Gentoo
*   Alpine Linux
*   And many more...

## File Types Expected:

*   TXT files for quick references
*   Configuration files and templates
*   MD files for comprehensive guides
*   Shell scripts and examples
*   System configuration files

---
Last Updated: December 15, 2024
Status: Ready for content
Category: Operating Systems
`

const LinuxResourcesInfoPage = () => {
  return (
    <div className="min-h-screen bg-orange-50 dark:bg-orange-900/10 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">info.md - Linux Resources</span>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Link href="/resources/linux" className="hover:underline">✕ Close</Link>
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
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{linuxInfoMarkdownContent}</ReactMarkdown>
        </article>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 px-4 py-1">
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
          <span>Linux Resources | Directory Information</span>
          <span>info.md | 1.1 KB</span>
        </div>
      </div>
    </div>
  )
}

export default LinuxResourcesInfoPage 