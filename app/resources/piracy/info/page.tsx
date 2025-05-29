import React from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const piracyInfoMarkdownContent = `
# Piracy Resources Directory

This directory contains educational resources about digital piracy, including:

*   Copyright law reference materials
*   Digital rights management (DRM) documentation
*   Cybersecurity threat analysis reports
*   Legal case studies and precedents
*   Industry impact research and statistics
*   Anti-piracy technology documentation
*   Digital forensics methodologies
*   Privacy protection guides and tools
*   Academic research papers
*   Legal alternatives databases

## Educational Focus Areas:

*   Understanding intellectual property law
*   Analyzing cybersecurity implications
*   Studying industry economic impacts
*   Learning about digital rights
*   Exploring technology protection measures

## File Types Expected:

*   TXT files for quick references
*   MD files for comprehensive analysis
*   Research papers and studies
*   Legal documentation
*   Case study examples

---
**DISCLAIMER**: All content is for educational purposes only. This directory does not promote or facilitate illegal activities.

Last Updated: December 15, 2024
Status: Ready for content
Category: Educational & Legal
`

const PiracyResourcesInfoPage = () => {
  return (
    <div className="min-h-screen bg-red-50 dark:bg-red-900/10 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">info.md - Piracy Resources</span>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Link href="/resources/piracy" className="hover:underline">✕ Close</Link>
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
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{piracyInfoMarkdownContent}</ReactMarkdown>
        </article>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 px-4 py-1">
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
          <span>Piracy Resources | Directory Information</span>
          <span>info.md | 1.4 KB</span>
        </div>
      </div>
    </div>
  )
}

export default PiracyResourcesInfoPage 