import React from 'react'
import Link from 'next/link'

const PythonInfoPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">info.txt - Python Resources</span>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Link href="/resources/coding/python" className="hover:underline">✕ Close</Link>
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
{`Python Resources Directory
=========================

This directory contains Python programming resources, including:

- Code snippets and examples
- Django and Flask framework guides
- Data Science libraries (NumPy, Pandas, Matplotlib)
- Machine Learning with Python (scikit-learn, TensorFlow, PyTorch)
- Web scraping tools (BeautifulSoup, Scrapy)
- API development and consumption
- Python best practices and PEP standards
- Virtual environment management
- Package distribution and PyPI
- Testing frameworks (pytest, unittest)

Popular Libraries & Frameworks:
- Web: Django, Flask, FastAPI, Tornado
- Data Science: NumPy, Pandas, Matplotlib, Seaborn
- ML/AI: scikit-learn, TensorFlow, PyTorch, Keras
- Automation: Selenium, requests, paramiko
- GUI: tkinter, PyQt, Kivy

File Types Expected:
- .py Python script files
- .ipynb Jupyter notebook files
- .md documentation and tutorials
- .txt quick reference guides
- requirements.txt dependency files

Last Updated: December 15, 2024
Status: Ready for content
Category: Programming Language`}
          </pre>
        </div>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 px-4 py-1">
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
          <span>Python Resources | Language Information</span>
          <span>info.txt | 1.1 KB</span>
        </div>
      </div>
    </div>
  )
}

export default PythonInfoPage 