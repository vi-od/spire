import React from 'react'
import Link from 'next/link'

const GettingStartedPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">spire-guide.md - Complete Guide</span>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Link href="/" className="hover:underline">✕ Close</Link>
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
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-50 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-600 p-4">
          <h3 className="font-bold text-black dark:text-white mb-4">Table of Contents</h3>
          <nav className="space-y-2 text-sm">
            <a href="#about" className="block text-blue-600 dark:text-blue-400 hover:underline">About SPIRE</a>
            <a href="#getting-started" className="block text-blue-600 dark:text-blue-400 hover:underline">Getting Started</a>
            <a href="#interface" className="block text-blue-600 dark:text-blue-400 hover:underline">Understanding Interface</a>
            <a href="#navigation" className="block text-blue-600 dark:text-blue-400 hover:underline">Navigation & Usage</a>
            <a href="#customizing" className="block text-blue-600 dark:text-blue-400 hover:underline">Customizing Experience</a>
            <a href="#tools" className="block text-blue-600 dark:text-blue-400 hover:underline">Using Tools</a>
            <a href="#help" className="block text-blue-600 dark:text-blue-400 hover:underline">Help & Support</a>
            <a href="#best-practices" className="block text-blue-600 dark:text-blue-400 hover:underline">Best Practices</a>
            <a href="#technical" className="block text-blue-600 dark:text-blue-400 hover:underline">Technical Info</a>
          </nav>
          
          <div className="mt-8 p-3 bg-blue-50 dark:bg-blue-900/30 rounded border">
            <h4 className="font-bold text-blue-800 dark:text-blue-200 text-xs mb-2">File Info</h4>
            <div className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
              <div>Type: Complete Guide</div>
              <div>Size: 8.5 KB</div>
              <div>Created: Today</div>
              <div>Difficulty: All Levels</div>
              <div>Est. Time: 15 min</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto text-black dark:text-white leading-relaxed">
            
            <section id="about" className="mb-8">
              <h1 className="text-2xl font-bold mb-4"># SPIRE - Complete Guide</h1>
              
              <h2 className="text-xl font-bold mb-3">## About SPIRE</h2>
              <p className="mb-4">
                SPIRE is a file system-style interface for organizing and accessing learning resources, tutorials, and educational materials. This website mimics the look and feel of classic operating system file managers from the 1990s, designed to be simple, straightforward, and distraction-free.
              </p>
              
              <h3 className="text-lg font-bold mb-2">### Key Features</h3>
              <ul className="list-disc ml-6 mb-6 space-y-1">
                <li>Classic retro file system interface</li>
                <li>Directory-style navigation</li>
                <li>Light/Dark mode support</li>
                <li>Fast loading and responsive design</li>
                <li>Built-in accessibility features</li>
                <li>Modern web technologies with nostalgic aesthetics</li>
              </ul>
            </section>

            <section id="getting-started" className="mb-8">
              <h2 className="text-xl font-bold mb-3">## Getting Started with SPIRE</h2>
              
              <h3 className="text-lg font-bold mb-2">### What You'll Learn in This Guide</h3>
              <ul className="list-disc ml-6 mb-6 space-y-1">
                <li>How to navigate the file system interface</li>
                <li>Understanding file types and content organization</li>
                <li>Using the built-in tools and features</li>
                <li>Customizing your experience with themes and accessibility</li>
                <li>Best practices for learning and organization</li>
              </ul>
            </section>

            <section id="interface" className="mb-8">
              <h2 className="text-xl font-bold mb-3">## Step 1: Understanding the Interface</h2>
              <p className="mb-4">
                SPIRE recreates the familiar file manager experience to create a comfortable learning environment.
              </p>
              
              <h3 className="text-lg font-bold mb-2">### File System Navigation</h3>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li><strong>Files</strong> contain tutorials, guides, or reference materials</li>
                <li><strong>Folders</strong> (when present) contain related learning materials</li>
                <li><strong>Address Bar</strong> shows your current location (C:\SPIRE\)</li>
                <li><strong>Menu Bar</strong> provides access to main functions</li>
              </ul>

              <h3 className="text-lg font-bold mb-2">### Content Organization</h3>
              <p className="mb-2">The website is organized with logical structure:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li><strong>Home Directory</strong>: Main entry point with core resources</li>
                <li><strong>Tools</strong>: Search functionality and utilities</li>
                <li><strong>Help</strong>: Comprehensive documentation and support</li>
              </ul>

              <h3 className="text-lg font-bold mb-2">### File Types You'll Encounter</h3>
              <ul className="list-disc ml-6 mb-6 space-y-1">
                <li><strong>Text Documents</strong> (.txt) - Information and basic guides</li>
                <li><strong>Markdown Files</strong> (.md) - Formatted tutorials with rich content</li>
                <li><strong>Different file icons</strong> help you quickly identify content types</li>
              </ul>
            </section>

            <section id="navigation" className="mb-8">
              <h2 className="text-xl font-bold mb-3">## Step 2: Navigation and Basic Usage</h2>
              
              <h3 className="text-lg font-bold mb-2">### How to Navigate</h3>
              <ol className="list-decimal ml-6 mb-4 space-y-1">
                <li><strong>Single-click</strong> files to open and view their contents</li>
                <li>Use the <strong>menu bar</strong> (Home, Tools, Help) for main navigation</li>
                <li>Use your <strong>browser's back button</strong> to return to previous locations</li>
                <li><strong>Bookmark pages</strong> for quick access to important resources</li>
              </ol>

              <h3 className="text-lg font-bold mb-2">### Understanding the Interface Elements</h3>
              <ul className="list-disc ml-6 mb-6 space-y-1">
                <li><strong>Title Bar</strong>: Shows current file/page name</li>
                <li><strong>Menu Bar</strong>: File operations (in individual documents)</li>
                <li><strong>Toolbar</strong>: Shows available menu options</li>
                <li><strong>Status Bar</strong>: Displays file information and system details</li>
                <li><strong>Address Bar</strong>: Current directory path</li>
              </ul>
            </section>

            <section id="customizing" className="mb-8">
              <h2 className="text-xl font-bold mb-3">## Step 3: Customizing Your Experience</h2>
              
              <h3 className="text-lg font-bold mb-2">### Theme Options</h3>
              <p className="mb-2">Access via the theme toggle button in the header:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li><strong>Light Theme</strong>: Darker backgrounds for comfortable reading</li>
                <li><strong>Dark Theme</strong>: Maximum contrast (black/white) for accessibility</li>
                <li><strong>Auto-save</strong>: Your preference is remembered between visits</li>
              </ul>

              <h3 className="text-lg font-bold mb-2">### Font Size Controls</h3>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li><strong>A-</strong> button: Decrease font size</li>
                <li><strong>A+</strong> button: Increase font size</li>
                <li><strong>Four sizes available</strong>: Small (11px), Medium (13px), Large (15px), XL (17px)</li>
                <li><strong>Persistent</strong>: Settings automatically saved</li>
              </ul>

              <h3 className="text-lg font-bold mb-2">### Accessibility Features</h3>
              <p className="mb-2">Access via the ♿ A11Y menu:</p>
              <ul className="list-disc ml-6 mb-6 space-y-1">
                <li><strong>Keyboard Navigation Mode</strong>: Enhanced focus indicators</li>
                <li><strong>Reduced Motion</strong>: Disables animations for comfort</li>
                <li><strong>Screen Reader Support</strong>: WCAG 2.1 AA compliant</li>
                <li><strong>Skip Links</strong>: Jump to main content</li>
              </ul>
            </section>

            <section id="tools" className="mb-8">
              <h2 className="text-xl font-bold mb-3">## Step 4: Using the Tools</h2>
              
              <h3 className="text-lg font-bold mb-2">### Search Functionality</h3>
              <p className="mb-2">Located in Tools &gt; Search:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li><strong>Find files</strong> by name across the entire site</li>
                <li><strong>View results</strong> with file types and sizes</li>
                <li><strong>Direct access</strong> to found resources</li>
                <li><strong>Real-time search</strong> as you type</li>
              </ul>

              <h3 className="text-lg font-bold mb-2">### Quick Actions</h3>
              <p className="mb-2">Available in the Tools section:</p>
              <ul className="list-disc ml-6 mb-6 space-y-1">
                <li><strong>Theme switching</strong> for immediate visual changes</li>
                <li><strong>Homepage access</strong> for quick navigation</li>
                <li><strong>Page refresh</strong> for troubleshooting</li>
                <li><strong>System information</strong> viewing</li>
              </ul>
            </section>

            <section id="help" className="mb-8">
              <h2 className="text-xl font-bold mb-3">## Step 5: Getting Help and Support</h2>
              
              <h3 className="text-lg font-bold mb-2">### Built-in Help System</h3>
              <p className="mb-2">Access via Help menu:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li><strong>Overview</strong>: Basic introduction and quick start</li>
                <li><strong>Navigation Guide</strong>: Detailed interface explanation</li>
                <li><strong>Keyboard Shortcuts</strong>: Complete shortcut reference</li>
                <li><strong>FAQ</strong>: Common questions and solutions</li>
                <li><strong>Technical Information</strong>: System requirements and browser support</li>
              </ul>

              <h3 className="text-lg font-bold mb-2">### Accessibility Documentation</h3>
              <p className="mb-2">Dedicated accessibility page covers:</p>
              <ul className="list-disc ml-6 mb-6 space-y-1">
                <li><strong>Keyboard navigation</strong> techniques</li>
                <li><strong>Screen reader</strong> optimization</li>
                <li><strong>Visual accessibility</strong> options</li>
                <li><strong>Browser compatibility</strong> information</li>
              </ul>
            </section>

            <section id="best-practices" className="mb-8">
              <h2 className="text-xl font-bold mb-3">## Best Practices for Learning</h2>
              
              <h3 className="text-lg font-bold mb-2">### Organizing Your Study Sessions</h3>
              <ol className="list-decimal ml-6 mb-4 space-y-1">
                <li><strong>Start with this guide</strong> to understand the interface</li>
                <li><strong>Use browser tabs</strong> to keep multiple resources open</li>
                <li><strong>Take notes</strong> using your preferred method</li>
                <li><strong>Set up bookmarks</strong> for frequently accessed materials</li>
                <li><strong>Adjust themes</strong> based on lighting conditions</li>
              </ol>

              <h3 className="text-lg font-bold mb-2">### Efficient Navigation Tips</h3>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Use <strong>keyboard shortcuts</strong> for faster navigation</li>
                <li><strong>Bookmark important pages</strong> for quick access</li>
                <li>Keep the <strong>Help section</strong> readily available</li>
                <li><strong>Explore systematically</strong> rather than randomly clicking</li>
              </ul>

              <h3 className="text-lg font-bold mb-2">### Accessibility Best Practices</h3>
              <ul className="list-disc ml-6 mb-6 space-y-1">
                <li><strong>Enable keyboard navigation</strong> if you prefer keyboard control</li>
                <li><strong>Adjust font sizes</strong> to your comfort level</li>
                <li><strong>Use reduced motion</strong> if animations cause discomfort</li>
                <li><strong>Try different themes</strong> to find what works best for your eyes</li>
              </ul>
            </section>

            <section id="technical" className="mb-8">
              <h2 className="text-xl font-bold mb-3">## Technical Information</h2>
              
              <h3 className="text-lg font-bold mb-2">### System Requirements</h3>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li><strong>Modern web browser</strong> with JavaScript enabled</li>
                <li><strong>Internet connection</strong> for initial loading</li>
                <li><strong>Minimum screen resolution</strong>: 320px width</li>
                <li><strong>Input methods</strong>: Touch and mouse supported</li>
              </ul>

              <h3 className="text-lg font-bold mb-2">### Browser Compatibility</h3>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li><strong>Chrome 80+</strong> (recommended)</li>
                <li><strong>Firefox 75+</strong></li>
                <li><strong>Safari 13+</strong></li>
                <li><strong>Edge 80+</strong></li>
                <li><strong>Mobile browsers</strong> on iOS and Android</li>
              </ul>

              <h3 className="text-lg font-bold mb-2">### Technology Stack</h3>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li><strong>Next.js 14</strong> React framework with TypeScript</li>
                <li><strong>Tailwind CSS</strong> for responsive styling</li>
                <li><strong>Heroicons</strong> for consistent iconography</li>
                <li><strong>Modern web standards</strong> with backward compatibility</li>
              </ul>

              <h3 className="text-lg font-bold mb-2">### What's Next?</h3>
              <p className="mb-2">Now that you understand the basics:</p>
              <ol className="list-decimal ml-6 mb-4 space-y-1">
                <li><strong>Explore the Tools section</strong> for search and utilities</li>
                <li><strong>Check out the Help system</strong> for detailed documentation</li>
                <li><strong>Customize your experience</strong> with themes and accessibility options</li>
                <li><strong>Start browsing</strong> available resources and tutorials</li>
                <li><strong>Bookmark this guide</strong> for future reference</li>
              </ol>

              <h3 className="text-lg font-bold mb-2">### Need Support?</h3>
              <p className="mb-2">If you encounter any issues:</p>
              <ul className="list-disc ml-6 mb-6 space-y-1">
                <li><strong>Review this guide</strong> for common solutions</li>
                <li><strong>Check the FAQ</strong> in the Help section</li>
                <li><strong>Try different browsers</strong> if problems persist</li>
                <li><strong>Adjust accessibility settings</strong> for better compatibility</li>
              </ul>

              <div className="border-t border-gray-300 dark:border-gray-600 pt-4 mt-6">
                <p className="mb-2"><strong>Version</strong>: 1.0</p>
                <p className="mb-2"><strong>Created</strong>: December 2024</p>
                <p className="mb-4"><strong>Status</strong>: Active Development</p>
                
                <p className="text-lg font-bold mb-2">🎓 <strong>Happy Learning!</strong></p>
                <p className="text-sm">
                  Remember: This interface is designed to be as simple and distraction-free as possible, letting you focus on what matters most - your learning journey.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 px-4 py-1">
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
          <span>Complete Guide | SPIRE Documentation</span>
          <span>Line 1 of 180 | 8.5 KB</span>
        </div>
      </div>
    </div>
  )
}

export default GettingStartedPage 