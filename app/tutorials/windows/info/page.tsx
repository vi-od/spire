import React from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const windowsTutorialsInfoMarkdownContent = `
# Windows Tutorials Directory

This directory contains tutorials related to Windows operating systems, including:

*   Windows installation and setup guides
*   System administration and management
*   PowerShell scripting and automation
*   Windows Server configuration
*   Registry editing and system tweaks
*   Software installation and management
*   Performance optimization guides
*   Troubleshooting common Windows issues
*   Windows Subsystem for Linux (WSL) setup
*   Group Policy and Active Directory basics

## File Types Expected:

*   MD files for comprehensive tutorials
*   TXT files for quick reference guides
*   PowerShell scripts and examples
*   Batch files and automation scripts
*   Registry files and system configurations

---
Last Updated: December 15, 2024
Status: Ready for content
Category: Operating Systems
`

const WindowsTutorialsInfoPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-blue-900/10 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">info.md - Windows Tutorials</span>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Link href="/tutorials/windows" className="hover:underline">✕ Close</Link>
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
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{windowsTutorialsInfoMarkdownContent}</ReactMarkdown>
        </article>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 px-4 py-1">
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
          <span>Windows Tutorials | Directory Information</span>
          <span>info.md | 1.1 KB</span>
        </div>
      </div>
    </div>
  )
}

export default WindowsTutorialsInfoPage 