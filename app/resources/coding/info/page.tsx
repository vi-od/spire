import React from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const codingInfoMarkdownContent = `
# Coding Resources Directory

This directory contains programming reference materials, including:

*   Code snippets and examples
*   Programming language cheat sheets
*   API documentation and references
*   Framework and library guides
*   Development tools and utilities
*   Algorithm implementations
*   Design pattern examples
*   Best practices and coding standards
*   Database query references
*   Regular expression patterns

## Supported Languages:

*   JavaScript/TypeScript (Node.js, React, Vue, Angular)
*   Python (Django, Flask, FastAPI)
*   Java (Spring, Hibernate)
*   C# (.NET Core, ASP.NET)
*   Go, Rust, C++
*   PHP (Laravel, Symphony)
*   Ruby (Rails)
*   HTML/CSS and web technologies

---\nLast Updated: December 15, 2024\nStatus: Ready for content\nCategory: Programming & Development
`

const CodingResourcesInfoPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">info.md - Coding Resources</span>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Link href="/resources/coding" className="hover:underline">✕ Close</Link>
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
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{codingInfoMarkdownContent}</ReactMarkdown>
        </article>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 px-4 py-1">
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
          <span>Coding Resources | Directory Information</span>
          <span>info.md | 1.3 KB</span>
        </div>
      </div>
    </div>
  )
}

export default CodingResourcesInfoPage 