import React from 'react'
import Link from 'next/link'

const TypeScriptInfoPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">info.txt - TypeScript Resources</span>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Link href="/resources/coding/typescript" className="hover:underline">✕ Close</Link>
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
{`TypeScript Resources Directory
=============================

This directory contains TypeScript programming resources, including:

- TypeScript fundamentals and type system
- Advanced type features (generics, conditional types)
- Integration with React and Angular
- Node.js backend development with TypeScript
- Configuration and tooling setup
- Migration strategies from JavaScript
- Type definitions and @types packages
- Modern JavaScript features with type safety
- Design patterns in TypeScript
- Testing TypeScript applications

Popular Frameworks & Libraries:
- Frontend: React + TS, Angular, Vue 3 + TS
- Backend: Express + TS, NestJS, Fastify + TS
- Testing: Jest, Vitest, Testing Library
- Build Tools: TypeScript Compiler, esbuild, SWC
- Utilities: ts-node, tsx, type-fest

File Types Expected:
- .ts TypeScript files
- .tsx TypeScript React files
- .d.ts type definition files
- tsconfig.json configuration files
- .md documentation and tutorials
- .txt quick reference guides

Last Updated: December 15, 2024
Status: Ready for content
Category: Programming Language`}
          </pre>
        </div>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 px-4 py-1">
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
          <span>TypeScript Resources | Language Information</span>
          <span>info.txt | 1.2 KB</span>
        </div>
      </div>
    </div>
  )
}

export default TypeScriptInfoPage 