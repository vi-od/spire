import React from 'react';
import Link from 'next/link';
import { FolderIcon, DocumentIcon } from '@heroicons/react/24/outline';

const HollowKnightTutorialsPage = () => {
  const items = [
    { name: '..', type: 'parent', path: '/tutorials/games', size: '-', modified: '-' },
    { name: 'info.md', type: 'file', path: '/tutorials/games/hollow-knight/info', size: '0.2 KB', modified: '12/16/2024' },
    { name: 'Bosses', type: 'folder', path: '/tutorials/games/hollow-knight/bosses', size: '-', modified: '12/16/2024' },
    { name: 'Areas', type: 'folder', path: '/tutorials/games/hollow-knight/areas', size: '-', modified: '12/16/2024' },
    { name: 'Modding', type: 'folder', path: '/tutorials/games/hollow-knight/modding', size: '-', modified: '12/16/2024' },
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-white font-mono"> {/* Hollow Knight theme - dark */}
      {/* Window chrome */}
      <div className="bg-gray-700 border-b border-gray-600 px-4 py-2">
        <div className="text-sm"><span className="font-bold">Hollow Knight Tutorials - SPIRE File System</span></div>
      </div>

      {/* Address bar */}
      <div className="bg-gray-750 border-b border-gray-600 px-4 py-1">
        <div className="text-xs text-gray-400">📁 C:\SPIRE\Tutorials\Games\Hollow Knight\</div>
      </div>

      <main id="main-content" className="p-4">
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-600">
          <div className="text-sm">Home Tools Help</div>
          <div className="text-xs text-gray-400">{items.length - 1} object(s)</div>
        </div>

        <div className="mb-4 p-3 bg-gray-700 rounded border border-gray-600">
          <h3 className="font-bold text-gray-200 text-sm mb-2">⚔️ Hollow Knight Tutorials</h3>
          <p className="text-gray-300 text-xs">
            Tutorials related to the game Hollow Knight, including boss guides, area walkthroughs, and modding help.
          </p>
        </div>

        <div className="border border-gray-600">
          <div className="bg-gray-600 border-b border-gray-500 px-2 py-1">
            <div className="grid grid-cols-4 gap-4 text-xs font-bold text-gray-200">
              <div>Name</div>
              <div>Type</div>
              <div>Size</div>
              <div>Modified</div>
            </div>
          </div>

          <div className="bg-gray-800">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="block border-b border-gray-700 hover:bg-gray-700/70"
              >
                <div className="grid grid-cols-4 gap-4 px-2 py-1 text-xs">
                  <div className="flex items-center">
                    {item.type === 'parent' ? (
                      <>
                        <FolderIcon className="h-4 w-4 mr-2 text-yellow-400" />
                        <span className="text-gray-400">{item.name}</span>
                      </>
                    ) : item.type === 'folder' ? (
                      <>
                        <FolderIcon className="h-4 w-4 mr-2 text-cyan-400" />
                        <span className="text-cyan-300">{item.name}</span>
                      </>
                    ) : (
                      <>
                        <DocumentIcon className="h-4 w-4 mr-2 text-gray-300" />
                        <span className="text-gray-300">{item.name}</span>
                      </>
                    )}
                  </div>
                  <div className="text-gray-400">
                    {item.type === 'parent' ? 'Parent Directory' : item.type === 'folder' ? 'Sub-category' : 'Tutorial Information'}
                  </div>
                  <div className="text-gray-400">{item.size}</div>
                  <div className="text-gray-400">{item.modified}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-2 border-t border-gray-600">
          <div className="flex justify-between text-xs text-gray-400">
            <span>{items.length -1} item(s) in directory</span>
            <span>SPIRE v1.0 | Hollow Knight Tutorials</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HollowKnightTutorialsPage; 