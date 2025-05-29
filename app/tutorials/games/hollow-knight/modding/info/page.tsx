import React from 'react';
import Link from 'next/link';

const HKModdingInfoPage = () => {
  return (
    <div className='min-h-screen bg-sky-800 text-white font-mono'>
      <div className='bg-sky-700 border-b border-sky-600 px-4 py-2 flex justify-between'>
        <div className='text-sm'><span className='font-bold'>info.md - HK Modding</span></div>
        <div className='text-sm'><Link href='/tutorials/games/hollow-knight/modding' className='hover:underline'>✕ Close</Link></div>
      </div>
      <div className='bg-sky-750 border-b border-sky-600 px-2 py-1 text-xs'>
        <div className='flex space-x-4'><span>File</span><span>Edit</span><span>View</span><span>Help</span></div>
      </div>
      <div className='p-6'>
        <div className='max-w-4xl mx-auto'>
          <p>Content for this page is located in <code>info.md</code>.</p>
          <p className='mt-2'>Future enhancement: Load and render this Markdown file here.</p>
        </div>
      </div>
      <div className='fixed bottom-0 left-0 right-0 bg-sky-700 border-t border-sky-600 px-4 py-1'>
        <div className='flex justify-between text-xs text-gray-300'>
          <span>HK Modding | Sub-Category Information</span>
          <span>info.md | 0.2 KB</span>
        </div>
      </div>
    </div>
  );
};
export default HKModdingInfoPage; 