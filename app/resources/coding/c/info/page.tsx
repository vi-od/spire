import React from 'react'
import Link from 'next/link'

const CInfoPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">info.txt - C Resources</span>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Link href="/resources/coding/c" className="hover:underline">✕ Close</Link>
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
{`C Resources Directory
====================

This directory contains C programming resources, including:

- System programming fundamentals
- Memory management and pointers
- Data structures and algorithms
- Low-level programming techniques
- UNIX/Linux system calls
- Network programming
- Embedded systems development
- Debugging and profiling tools
- Build systems (Make, CMake)
- Standard library functions

Popular Libraries & Tools:
- Development: GCC, Clang, GDB, Valgrind
- Libraries: glibc, ncurses, OpenSSL
- Networking: BSD sockets, libcurl
- Data: SQLite, JSON-C, libxml2
- System: pthreads, systemd

File Types Expected:
- .c source files
- .h header files
- Makefile build files
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
          <span>C Resources | Language Information</span>
          <span>info.txt | 0.9 KB</span>
        </div>
      </div>
    </div>
  )
}

export default CInfoPage 