import React from 'react'
import Link from 'next/link'

const PiracyInfoPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">info.txt - Piracy Tutorials</span>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Link href="/tutorials/piracy" className="hover:underline">✕ Close</Link>
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
{`Piracy Tutorials Directory
==========================

This directory contains educational tutorials about digital piracy, including:

- Understanding copyright law and violations
- Digital rights management (DRM) technologies
- Anti-piracy measures and their effectiveness
- Cybersecurity implications of pirated software
- Legal alternatives to pirated content
- Digital forensics related to piracy cases
- Network security and torrenting safety
- VPN usage and privacy protection
- Educational analysis of piracy methods
- Industry impact studies and research

File Types Expected:
- .md files for comprehensive educational content
- .txt files for quick reference guides
- Research papers and case studies
- Legal documentation and examples

DISCLAIMER: All content is for educational purposes only.
This directory does not promote or encourage illegal activities.

Last Updated: December 15, 2024
Status: Ready for content
Category: Educational & Security`}
          </pre>
        </div>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 px-4 py-1">
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
          <span>Piracy Tutorials | Directory Information</span>
          <span>info.txt | 1.4 KB</span>
        </div>
      </div>
    </div>
  )
}

export default PiracyInfoPage 