import React from 'react'
import Link from 'next/link'
import { FolderIcon, DocumentIcon } from '@heroicons/react/24/outline'

const CodingResourcesPage = () => {
  const items = [
    { name: '..', type: 'parent', path: '/resources', size: '-', modified: '-' },
    { name: 'C', type: 'folder', path: '/resources/coding/c', size: '-', modified: '12/15/2024' },
    { name: 'C++', type: 'folder', path: '/resources/coding/cpp', size: '-', modified: '12/15/2024' },
    { name: 'C#', type: 'folder', path: '/resources/coding/csharp', size: '-', modified: '12/15/2024' },
    { name: 'Go', type: 'folder', path: '/resources/coding/go', size: '-', modified: '12/15/2024' },
    { name: 'HTML-CSS', type: 'folder', path: '/resources/coding/html-css', size: '-', modified: '12/15/2024' },
    { name: 'Java', type: 'folder', path: '/resources/coding/java', size: '-', modified: '12/15/2024' },
    { name: 'JavaScript', type: 'folder', path: '/resources/coding/javascript', size: '-', modified: '12/15/2024' },
    { name: 'Kotlin', type: 'folder', path: '/resources/coding/kotlin', size: '-', modified: '12/15/2024' },
    { name: 'PHP', type: 'folder', path: '/resources/coding/php', size: '-', modified: '12/15/2024' },
    { name: 'Python', type: 'folder', path: '/resources/coding/python', size: '-', modified: '12/15/2024' },
    { name: 'R', type: 'folder', path: '/resources/coding/r', size: '-', modified: '12/15/2024' },
    { name: 'Ruby', type: 'folder', path: '/resources/coding/ruby', size: '-', modified: '12/15/2024' },
    { name: 'Rust', type: 'folder', path: '/resources/coding/rust', size: '-', modified: '12/15/2024' },
    { name: 'SQL', type: 'folder', path: '/resources/coding/sql', size: '-', modified: '12/15/2024' },
    { name: 'Swift', type: 'folder', path: '/resources/coding/swift', size: '-', modified: '12/15/2024' },
    { name: 'TypeScript', type: 'folder', path: '/resources/coding/typescript', size: '-', modified: '12/15/2024' },
    { name: 'info.md', type: 'file', path: '/resources/coding/info', size: '1.3 KB', modified: '12/15/2024' },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-mono">
      {/* Window chrome */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">Coding Resources - SPIRE File System</span>
        </div>
      </div>

      {/* Address bar */}
      <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-1">
        <div className="text-xs text-gray-600 dark:text-gray-400">
          📁 C:\SPIRE\Resources\Coding\
        </div>
      </div>

      {/* Main content */}
      <main id="main-content" className="p-4">
        {/* Toolbar */}
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
          <div className="text-sm text-gray-700 dark:text-gray-300">
            Home  Tools  Help
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {items.length - 1} object(s)
          </div>
        </div>

        {/* Directory description */}
        <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/30 rounded border border-green-200 dark:border-green-800">
          <h3 className="font-bold text-green-800 dark:text-green-200 text-sm mb-2">💻 Coding Resources</h3>
          <p className="text-green-700 dark:text-green-300 text-xs">
            Programming reference materials including code snippets, cheat sheets, documentation links, 
            API references, and development tools for various programming languages.
          </p>
        </div>

        {/* File listing table */}
        <div className="border border-gray-400 dark:border-gray-600">
          {/* Table header */}
          <div className="bg-gray-200 dark:bg-gray-700 border-b border-gray-400 dark:border-gray-600 px-2 py-1">
            <div className="grid grid-cols-4 gap-4 text-xs font-bold text-gray-800 dark:text-gray-200">
              <div>Name</div>
              <div>Type</div>
              <div>Size</div>
              <div>Modified</div>
            </div>
          </div>

          {/* Table content */}
          <div className="bg-white dark:bg-gray-900">
            {items.map((item, index) => (
              <Link 
                key={index}
                href={item.path}
                className="block border-b border-gray-200 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30"
              >
                <div className="grid grid-cols-4 gap-4 px-2 py-1 text-xs">
                  <div className="flex items-center">
                    {item.type === 'parent' ? (
                      <>
                        <FolderIcon className="h-4 w-4 mr-2 text-yellow-600 dark:text-yellow-400" />
                        <span className="text-gray-600 dark:text-gray-400">{item.name}</span>
                      </>
                    ) : item.type === 'folder' ? (
                      <>
                        <FolderIcon className="h-4 w-4 mr-2 text-yellow-600 dark:text-yellow-400" />
                        <span className="text-blue-600 dark:text-blue-400">{item.name}</span>
                      </>
                    ) : (
                      <>
                        <DocumentIcon className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                        <span className="text-blue-600 dark:text-blue-400">{item.name}</span>
                      </>
                    )}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {item.type === 'parent' ? 'Parent Directory' : 
                     item.type === 'folder' ? 'Programming Language' : 
                     'Resource Information'}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">{item.size}</div>
                  <div className="text-gray-600 dark:text-gray-400">{item.modified}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Status bar */}
        <div className="mt-4 pt-2 border-t border-gray-300 dark:border-gray-600">
          <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
            <span>{items.length - 1} item(s) in directory</span>
            <span>SPIRE v1.0 | Coding Resources</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CodingResourcesPage 