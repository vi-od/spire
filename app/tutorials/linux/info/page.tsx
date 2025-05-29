import React from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const linuxTutorialsInfoMarkdownContent = `
# Linux Tutorials Directory

This directory contains tutorials related to Linux operating systems, including:

*   Command line basics and advanced usage
*   Linux distribution installation guides
*   System administration tutorials
*   Package management (apt, yum, pacman, etc.)
*   Shell scripting and automation
*   Server setup and configuration
*   Network configuration
*   Security hardening guides
*   Docker and containerization
*   Linux desktop environment customization

## File Types Expected:

*   MD files for comprehensive tutorials
*   TXT files for quick reference guides
*   Shell scripts and examples
*   Configuration files and templates

---
Last Updated: December 15, 2024
Status: Ready for content
Category: Operating Systems
`

const LinuxTutorialsInfoPage = () => {
  return (
    <div className="min-h-screen bg-orange-50 dark:bg-orange-900/10 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">info.md - Linux Tutorials</span>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Link href="/tutorials/linux" className="hover:underline">✕ Close</Link>
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
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{linuxTutorialsInfoMarkdownContent}</ReactMarkdown>
        </article>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 px-4 py-1">
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
          <span>Linux Tutorials | Directory Information</span>
          <span>info.md | 1.0 KB</span>
        </div>
      </div>
    </div>
  )
}

export default LinuxTutorialsInfoPage 