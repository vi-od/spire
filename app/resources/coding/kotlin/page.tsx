import React from 'react'
import Link from 'next/link'
import { FolderIcon, DocumentIcon } from '@heroicons/react/24/outline'

const KotlinResourcesPage = () => {
  const items = [
    { name: '..', type: 'parent', path: '/resources/coding', size: '-', modified: '-' },
    { name: 'info.txt', type: 'file', path: '/resources/coding/kotlin/info', size: '1.1 KB', modified: '12/15/2024' },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-mono">
      {/* Window chrome */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">Kotlin Resources - SPIRE File System</span>
        </div>
      </div>

      {/* Address bar */}
      <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-1">
        <div className="text-xs text-gray-600 dark:text-gray-400">
          📁 C:\SPIRE\Resources\Coding\Kotlin\
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
          <h3 className="font-bold text-green-800 dark:text-green-200 text-sm mb-2">🚀 Kotlin Resources</h3>
          <p className="text-green-700 dark:text-green-300 text-xs">
            Kotlin programming resources including Android development, multiplatform projects, 
            coroutines, and JVM interoperability.
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
                    ) : (
                      <>
                        <DocumentIcon className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                        <span className="text-blue-600 dark:text-blue-400">{item.name}</span>
                      </>
                    )}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {item.type === 'parent' ? 'Parent Directory' : 'Language Information'}
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
            <span>{items.length - 1} file(s) in directory</span>
            <span>SPIRE v1.0 | Kotlin Resources</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default KotlinResourcesPage 