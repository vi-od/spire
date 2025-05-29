import React from 'react';
import Link from 'next/link';
import { FolderIcon, DocumentIcon } from '@heroicons/react/24/outline';

const HKBossesTutorialsPage = () => {
  const items = [
    { name: '..', type: 'parent', path: '/tutorials/games/hollow-knight', size: '-', modified: '-' },
    { name: 'info.md', type: 'file', path: '/tutorials/games/hollow-knight/bosses/info', size: '0.2 KB', modified: '12/16/2024' },
    // Future boss tutorial files will be listed here
  ];

  return (
    <div className='min-h-screen bg-slate-800 text-white font-mono'> {/* Dark slate theme for Bosses */}
      <div className='bg-slate-700 border-b border-slate-600 px-4 py-2'>
        <div className='text-sm'><span className='font-bold'>Hollow Knight Bosses - SPIRE Tutorials</span></div>
      </div>
      <div className='bg-slate-750 border-b border-slate-600 px-4 py-1'>
        <div className='text-xs text-gray-400'>📁 C:\\SPIRE\\Tutorials\\Games\\Hollow Knight\\Bosses\\</div>
      </div>
      <main id='main-content' className='p-4'>
        <div className='flex justify-between items-center mb-4 pb-2 border-b border-slate-600'>
          <div className='text-sm'>Home Tools Help</div>
          <div className='text-xs text-gray-400'>{items.length - 1} object(s)</div>
        </div>
        <div className='mb-4 p-3 bg-slate-700 rounded border border-slate-600'>
          <h3 className='font-bold text-slate-200 text-sm mb-2'>💀 Boss Tutorials</h3>
          <p className='text-slate-300 text-xs'>Guides and strategies for defeating bosses in Hollow Knight.</p>
        </div>
        <div className='border border-slate-600'>
          <div className='bg-slate-600 border-b border-slate-500 px-2 py-1'>
            <div className='grid grid-cols-4 gap-4 text-xs font-bold text-slate-200'>
              <div>Name</div><div>Type</div><div>Size</div><div>Modified</div>
            </div>
          </div>
          <div className='bg-slate-800'>
            {items.map((item, index) => (
              <Link key={index} href={item.path} className='block border-b border-slate-700 hover:bg-slate-700/70'>
                <div className='grid grid-cols-4 gap-4 px-2 py-1 text-xs'>
                  <div className='flex items-center'>
                    {item.type === 'parent' ? (
                      <><FolderIcon className='h-4 w-4 mr-2 text-yellow-400' /><span className='text-gray-400'>{item.name}</span></>
                    ) : (
                      <><DocumentIcon className='h-4 w-4 mr-2 text-slate-300' /><span className='text-slate-300'>{item.name}</span></>
                    )}
                  </div>
                  <div className='text-gray-400'>{item.type === 'parent' ? 'Parent Directory' : 'Tutorial Information'}</div>
                  <div className='text-gray-400'>{item.size}</div>
                  <div className='text-gray-400'>{item.modified}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className='mt-4 pt-2 border-t border-slate-600'>
          <div className='flex justify-between text-xs text-gray-400'>
            <span>{items.length -1} item(s) in directory</span>
            <span>SPIRE v1.0 | HK Bosses</span>
          </div>
        </div>
      </main>
    </div>
  );
};
export default HKBossesTutorialsPage; 