import React from 'react'

const Footer = () => {
  const currentTime = new Date().toLocaleTimeString()
  const currentDate = new Date().toLocaleDateString()

  return (
    <footer className="bg-gray-200 dark:bg-gray-700 border-t-2 border-gray-400 dark:border-gray-600 font-mono text-xs text-gray-700 dark:text-gray-300">
      <div className="flex justify-between items-center px-4 py-1">
        <div className="flex space-x-4">
          <span>Ready</span>
          <span>|</span>
          <span>SPIRE v1.0</span>
        </div>
        <div className="flex space-x-4">
          <span>{currentDate}</span>
          <span>{currentTime}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer 