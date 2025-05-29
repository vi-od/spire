import React from 'react'
import Link from 'next/link'

const JavaScriptInfoPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">info.txt - JavaScript Resources</span>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Link href="/resources/coding/javascript" className="hover:underline">✕ Close</Link>
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
{`JavaScript Resources Directory
=============================

This directory contains JavaScript programming resources, including:

- ES6+ modern JavaScript features
- DOM manipulation and browser APIs
- Asynchronous programming (Promises, async/await)
- Frontend frameworks and libraries
- Node.js backend development
- API development and consumption
- Testing frameworks and methodologies
- Build tools and bundlers
- Package management with npm/yarn
- Browser compatibility and polyfills

Popular Frameworks & Libraries:
- Frontend: React, Vue, Angular, Svelte
- Backend: Express.js, Koa, Fastify, NestJS
- Testing: Jest, Mocha, Cypress, Testing Library
- Build Tools: Webpack, Vite, Rollup, Parcel
- Utilities: Lodash, Moment.js, Axios, Socket.io

File Types Expected:
- .js JavaScript files
- .mjs ES6 modules
- .json configuration files
- .md documentation and tutorials
- .txt quick reference guides
- package.json dependency files

Last Updated: December 15, 2024
Status: Ready for content
Category: Programming Language`}
          </pre>
        </div>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 px-4 py-1">
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
          <span>JavaScript Resources | Language Information</span>
          <span>info.txt | 1.2 KB</span>
        </div>
      </div>
    </div>
  )
}

export default JavaScriptInfoPage 