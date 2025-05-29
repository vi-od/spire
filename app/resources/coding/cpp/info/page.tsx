import React from 'react'
import Link from 'next/link'

const CppInfoPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">info.txt - C++ Resources</span>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Link href="/resources/coding/cpp" className="hover:underline">✕ Close</Link>
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
{`C++ Resources Directory
======================

This directory contains C++ programming resources, including:

- Object-oriented programming concepts
- STL (Standard Template Library) usage
- Template programming and metaprogramming
- Modern C++ features (C++11, C++14, C++17, C++20)
- Memory management and RAII
- Design patterns in C++
- Performance optimization techniques
- Build systems (CMake, Make)
- Testing frameworks (Google Test, Catch2)
- Game development with C++

Popular Libraries & Frameworks:
- Graphics: OpenGL, DirectX, SFML, SDL
- GUI: Qt, GTK, wxWidgets
- Networking: Boost.Asio, Poco
- Testing: Google Test, Catch2, Boost.Test
- JSON: nlohmann/json, RapidJSON

File Types Expected:
- .cpp/.cc source files
- .h/.hpp header files
- .cmake build files
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
          <span>C++ Resources | Language Information</span>
          <span>info.txt | 1.2 KB</span>
        </div>
      </div>
    </div>
  )
}

export default CppInfoPage 