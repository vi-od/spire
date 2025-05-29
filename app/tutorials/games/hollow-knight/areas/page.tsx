import React from 'react';
import Link from 'next/link';
import { FolderIcon, DocumentIcon } from '@heroicons/react/24/outline';

const HKAreasTutorialsPage = () => {
  const items = [
    { name: '..', type: 'parent', path: '/tutorials/games/hollow-knight', size: '-', modified: '-' },
    { name: 'info.md', type: 'file', path: '/tutorials/games/hollow-knight/areas/info', size: '0.2 KB', modified: '12/16/2024' },
    // Future area tutorial files will be listed here
  ];

  return (
    <div className='min-h-screen bg-emerald-800 text-white font-mono'> {/* Dark emerald theme for Areas */}
      <div className='bg-emerald-700 border-b border-emerald-600 px-4 py-2'>
        <div className='text-sm'><span className='font-bold'>Hollow Knight Areas - SPIRE Tutorials</span></div>
      </div>
      <div className='bg-emerald-750 border-b border-emerald-600 px-4 py-1'>
        <div className='text-xs text-gray-300'>📁 C:\\SPIRE\\Tutorials\\Games\\Hollow Knight\\Areas\\</div>
      </div>
      <main id='main-content' className='p-4'>
        <div className='flex justify-between items-center mb-4 pb-2 border-b border-emerald-600'>
          <div className='text-sm'>Home Tools Help</div>
          <div className='text-xs text-gray-300'>{items.length - 1} object(s)</div>
        </div>
        <div className='mb-4 p-3 bg-emerald-700 rounded border border-emerald-600'>
          <h3 className='font-bold text-emerald-200 text-sm mb-2'>🗺️ Area Walkthroughs</h3>
          <p className='text-emerald-300 text-xs'>Guides for navigating the various areas and biomes in Hollow Knight.</p>
        </div>
        <div className='border border-emerald-600'>
          <div className='bg-emerald-600 border-b border-emerald-500 px-2 py-1'>
            <div className='grid grid-cols-4 gap-4 text-xs font-bold text-emerald-200'>
              <div>Name</div><div>Type</div><div>Size</div><div>Modified</div>
            </div>
          </div>
          <div className='bg-emerald-800'>
            {items.map((item, index) => (
              <Link key={index} href={item.path} className='block border-b border-emerald-700 hover:bg-emerald-700/70'>
                <div className='grid grid-cols-4 gap-4 px-2 py-1 text-xs'>
                  <div className='flex items-center'>
                    {item.type === 'parent' ? (
                      <><FolderIcon className='h-4 w-4 mr-2 text-yellow-400' /><span className='text-gray-300'>{item.name}</span></>
                    ) : (
                      <><DocumentIcon className='h-4 w-4 mr-2 text-emerald-300' /><span className='text-emerald-300'>{item.name}</span></>
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
        <div className='mt-4 pt-2 border-t border-emerald-600'>
          <div className='flex justify-between text-xs text-gray-300'>
            <span>{items.length -1} item(s) in directory</span>
            <span>SPIRE v1.0 | HK Areas</span>
          </div>
        </div>
      </main>
    </div>
  );
};
export default HKAreasTutorialsPage; 