import React from 'react'
import Link from 'next/link'

const PiracyResourcesInfoPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">info.txt - Piracy Resources</span>
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
        <div className="max-w-4xl mx-auto">
          <pre className="whitespace-pre-wrap text-black dark:text-white leading-relaxed font-mono text-sm">
{`Piracy Resources Directory
==========================

This directory contains educational resources about digital piracy, including:

- Copyright law documentation and analysis
- Digital rights management (DRM) research
- Anti-piracy technology studies
- Cybersecurity implications of pirated software
- Legal case studies and precedents
- Industry impact research and statistics
- Digital forensics related to piracy
- Network security and privacy guides
- Academic research papers on digital piracy
- Educational analysis of piracy prevention methods

Research Areas:
- Copyright and intellectual property law
- Digital content protection technologies
- Economic impact studies
- Cybersecurity risk assessment
- Digital forensics methodologies

File Types Expected:
- .md files for comprehensive research documents
- .txt files for quick reference materials
- Legal documentation and case studies
- Research papers and academic sources

DISCLAIMER: All content is for educational and research purposes only.
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
          <span>Piracy Resources | Directory Information</span>
          <span>info.txt | 1.4 KB</span>
        </div>
      </div>
    </div>
  )
}

export default PiracyResourcesInfoPage 