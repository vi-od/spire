import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import fs from 'fs';
import path from 'path';

// Helper function to get content
async function getMarkdownContent() {
  const filePath = path.join(process.cwd(), 'app/tutorials/games/hollow-knight/modding/hollow_knight_modding_api_guide.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return fileContents;
}

const HKModdingApiGuidePage = async () => {
  const markdownContent = await getMarkdownContent();

  return (
    <div className='min-h-screen bg-sky-800 text-white font-mono flex flex-col'>
      {/* Title Bar */}
      <div className='bg-sky-700 border-b border-sky-600 px-4 py-2 flex justify-between items-center shrink-0'>
        <div className='text-sm'><span className='font-bold'>Hollow Knight Modding API Guide.md</span></div>
        <Link href='/tutorials/games/hollow-knight/modding' className='text-sm hover:underline'>✕ Close</Link>
      </div>

      {/* Menu Bar */}
      <div className='bg-sky-750 border-b border-sky-600 px-2 py-1 text-xs shrink-0'>
        <div className='flex space-x-4'>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Help</span>
        </div>
      </div>

      {/* Content Area - Make it scrollable */}
      <div className='flex-grow overflow-y-auto p-6'>
        <article className="prose prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl prose-invert max-w-none prose-headings:text-sky-300 prose-a:text-sky-400 hover:prose-a:text-sky-500 prose-strong:text-sky-200 prose-code:text-slate-200 prose-code:bg-slate-800 prose-code:p-1 prose-code:rounded-sm prose-pre:bg-slate-900 prose-pre:text-slate-200 prose-blockquote:border-sky-600 prose-blockquote:text-sky-300">
          {/* 'use client' directive will be needed for ReactMarkdown if it uses client-side hooks, 
              but since we are passing content as a prop from a server component, 
              we can create a separate client component for the markdown rendering part. 
              For now, let's see if this direct approach works. 
              If not, we will create a client component wrapper for ReactMarkdown. */}
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
        </article>
      </div>

      {/* Status Bar */}
      <div className='bg-sky-700 border-t border-sky-600 px-4 py-1 shrink-0'>
        <div className='flex justify-between text-xs text-gray-300'>
          <span>HK Modding API Guide | Tutorial Document</span>
          <span>Content Loaded</span>
        </div>
      </div>
    </div>
  );
};

export default HKModdingApiGuidePage; 