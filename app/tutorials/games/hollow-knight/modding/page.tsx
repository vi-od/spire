import React from 'react';
import Link from 'next/link';
import { FolderIcon, DocumentIcon } from '@heroicons/react/24/outline';

const HKModdingTutorialsPage = () => {
  const items = [
    { name: '..', type: 'parent', path: '/tutorials/games/hollow-knight', size: '-', modified: '-' },
    { name: 'info.md', type: 'file', path: '/tutorials/games/hollow-knight/modding/info', size: '0.2 KB', modified: '12/16/2024' },
    { name: 'Hollow Knight Modding API Guide', type: 'file', path: '/tutorials/games/hollow-knight/modding/hollow_knight_modding_api_guide', size: '35 KB', modified: '12/16/2024' },
    // Future modding tutorial files will be listed here
  ];

  return (
    <div className='min-h-screen bg-sky-800 text-white font-mono'> {/* Dark sky theme for Modding */}
      <div className='bg-sky-700 border-b border-sky-600 px-4 py-2'>
        <div className='text-sm'><span className='font-bold'>Hollow Knight Modding - SPIRE Tutorials</span></div>
      </div>
      <div className='bg-sky-750 border-b border-sky-600 px-4 py-1'>
        <div className='text-xs text-gray-300'>📁 C:\\SPIRE\\Tutorials\\Games\\Hollow Knight\\Modding\\</div>
      </div>
      <main id='main-content' className='p-4'>
        <div className='flex justify-between items-center mb-4 pb-2 border-b border-sky-600'>
          <div className='text-sm'>Home Tools Help</div>
          <div className='text-xs text-gray-300'>{items.length - 1} object(s)</div>
        </div>
        <div className='mb-4 p-3 bg-sky-700 rounded border border-sky-600'>
          <h3 className='font-bold text-sky-200 text-sm mb-2'>⚙️ Modding Tutorials</h3>
          <p className='text-sky-300 text-xs'>Learn how to install and create mods for Hollow Knight.</p>
        </div>
        <div className='border border-sky-600'>
          <div className='bg-sky-600 border-b border-sky-500 px-2 py-1'>
            <div className='grid grid-cols-4 gap-4 text-xs font-bold text-sky-200'>
              <div>Name</div><div>Type</div><div>Size</div><div>Modified</div>
            </div>
          </div>
          <div className='bg-sky-800'>
            {items.map((item, index) => (
              <Link key={index} href={item.path} className='block border-b border-sky-700 hover:bg-sky-700/70'>
                <div className='grid grid-cols-4 gap-4 px-2 py-1 text-xs'>
                  <div className='flex items-center'>
                    {item.type === 'parent' ? (
                      <><FolderIcon className='h-4 w-4 mr-2 text-yellow-400' /><span className='text-gray-300'>{item.name}</span></>
                    ) : (
                      <><DocumentIcon className='h-4 w-4 mr-2 text-sky-300' /><span className='text-sky-300'>{item.name}</span></>
                    )}
                  </div>
                  <div className='text-gray-300'>{item.type === 'parent' ? 'Parent Directory' : 'Tutorial Information'}</div>
                  <div className='text-gray-300'>{item.size}</div>
                  <div className='text-gray-300'>{item.modified}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className='mt-4 pt-2 border-t border-sky-600'>
          <div className='flex justify-between text-xs text-gray-300'>
            <span>{items.length -1} item(s) in directory</span>
            <span>SPIRE v1.0 | HK Modding</span>
          </div>
        </div>
      </main>
    </div>
  );
};
export default HKModdingTutorialsPage; 