'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const NotFound = () => {
  const [showErrorDialog, setShowErrorDialog] = useState(true)
  const [showSecondDialog, setShowSecondDialog] = useState(false)
  const [currentDateTime, setCurrentDateTime] = useState('')

  useEffect(() => {
    setCurrentDateTime(new Date().toLocaleString())
  }, [])

  const handleOk = () => {
    setShowErrorDialog(false)
    setShowSecondDialog(true)
  }

  const handleRetry = () => {
    setShowSecondDialog(false)
    // Simulate "retry" by just showing success
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-800 font-mono relative">
      {/* Blue Screen of Death Style Background */}
      <div className="absolute inset-0 bg-blue-600 text-white p-8">
        <div className="max-w-4xl">
          <h1 className="text-2xl font-bold mb-4">SPIRE</h1>
          <div className="mb-8">
            <p>A problem has been detected and SPIRE has been shut down to prevent damage to your learning experience.</p>
            <br />
            <p>The problem seems to be caused by the following file: PAGE_NOT_FOUND</p>
            <br />
            <p>PAGE_FAULT_IN_NONPAGED_AREA</p>
            <br />
            <p>If this is the first time you've seen this Stop error screen, restart your browser. If this screen appears again, follow these steps:</p>
            <br />
            <p>Check to make sure any new tutorials or resources are properly installed. If this is a new installation, ask your system administrator or the tutorial creator for any ResourceHub updates you might need.</p>
            <br />
            <p>If problems continue, disable or remove any newly installed learning modules. Disable BIOS memory options such as caching or shadowing. If you need to use Safe Mode to remove or disable components, restart your computer, press F8 to select Advanced Startup Options, and then select Safe Mode.</p>
            <br />
            <p>Technical information:</p>
            <br />
            <p>*** STOP: 0x00000404 (0x00000001, 0x00000002, 0x00000000, 0x00000000)</p>
            <br />
            <p>Collecting data for crash dump...</p>
            <p>Initializing disk for crash dump...</p>
            <p>Beginning dump of physical memory.</p>
            <p>Physical memory dump complete.</p>
            <p>Contact your system administrator or technical support group for further assistance.</p>
          </div>
        </div>
      </div>

      {/* Error Dialog */}
      {showErrorDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-200 dark:bg-gray-700 border-2 border-gray-400 dark:border-gray-500 p-0 shadow-lg max-w-md">
            {/* Title Bar */}
            <div className="bg-blue-500 text-white px-2 py-1 flex justify-between items-center">
              <span className="text-sm font-bold">SPIRE Error</span>
              <button 
                onClick={() => setShowErrorDialog(false)}
                className="text-white hover:bg-blue-600 px-1"
              >
                ×
              </button>
            </div>
            
            {/* Dialog Content */}
            <div className="p-4 bg-white dark:bg-gray-800">
              <div className="flex items-start space-x-3">
                <div className="text-red-500 text-2xl">⚠️</div>
                <div className="flex-1">
                  <h3 className="font-bold text-black dark:text-white mb-2">File Not Found</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    The requested tutorial or resource could not be located in the SPIRE file system.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                    Error Code: 404_TUTORIAL_NOT_FOUND<br />
                    Location: /unknown-resource<br />
                    Time: {currentDateTime || 'Loading...'}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={handleOk}
                  className="px-4 py-1 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 border border-gray-500 text-black dark:text-white text-sm"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Second Dialog */}
      {showSecondDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-200 dark:bg-gray-700 border-2 border-gray-400 dark:border-gray-500 p-0 shadow-lg max-w-md">
            {/* Title Bar */}
            <div className="bg-blue-500 text-white px-2 py-1 flex justify-between items-center">
              <span className="text-sm font-bold">SPIRE Recovery</span>
              <button 
                onClick={() => setShowSecondDialog(false)}
                className="text-white hover:bg-blue-600 px-1"
              >
                ×
              </button>
            </div>
            
            {/* Dialog Content */}
            <div className="p-4 bg-white dark:bg-gray-800">
              <div className="flex items-start space-x-3">
                <div className="text-blue-500 text-2xl">💾</div>
                <div className="flex-1">
                  <h3 className="font-bold text-black dark:text-white mb-2">Recovery Mode</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    Would you like to return to the SPIRE main directory to find available tutorials and resources?
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-xs mb-4">
                    <div className="text-black dark:text-white font-bold">Available Options:</div>
                    <div className="text-gray-600 dark:text-gray-400">
                      • Return to File System<br />
                      • Browse Available Content<br />
                      • View Tutorial Guide<br />
                      • Check System Status
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2 mt-4">
                <Link
                  href="/"
                  className="px-4 py-1 bg-green-500 hover:bg-green-600 text-white border border-gray-500 text-sm"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="px-4 py-1 bg-green-500 hover:bg-green-600 text-white border border-gray-500 text-sm"
                >
                  Browse
                </Link>
                <button
                  onClick={() => setShowSecondDialog(false)}
                  className="px-4 py-1 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 border border-gray-500 text-black dark:text-white text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom instruction */}
      <div className="absolute bottom-4 left-4 right-4 text-center text-white">
        <p className="text-sm">Press any key to continue...</p>
        <p className="text-xs mt-2 opacity-75">
          (This is a retro-style 404 page. No actual system damage occurred! 😄)
        </p>
      </div>
    </div>
  )
}

export default NotFound 