import React from 'react'
import Link from 'next/link'

const JavaInfoPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-mono">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 px-4 py-2 flex justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-bold">info.txt - Java Resources</span>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Link href="/resources/coding/java" className="hover:underline">✕ Close</Link>
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
{`Java Resources Directory
=======================

This directory contains Java programming resources, including:

- Core Java concepts and syntax
- Object-oriented programming principles
- Spring Framework (Boot, MVC, Security, Data)
- Enterprise Java development patterns
- JVM optimization and tuning
- Design patterns implementation
- Maven and Gradle build tools
- Testing frameworks (JUnit, Mockito, TestNG)
- Database integration (JPA, Hibernate)
- Microservices architecture with Java

Popular Frameworks & Libraries:
- Web: Spring Boot, Spring MVC, JAX-RS
- ORM: Hibernate, MyBatis, JPA
- Testing: JUnit 5, Mockito, AssertJ, TestContainers
- Build Tools: Maven, Gradle, SBT
- Utilities: Apache Commons, Guava, Jackson

File Types Expected:
- .java source files
- .xml configuration files (Maven, Spring)
- .properties configuration files
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
          <span>Java Resources | Language Information</span>
          <span>info.txt | 1.3 KB</span>
        </div>
      </div>
    </div>
  )
}

export default JavaInfoPage 