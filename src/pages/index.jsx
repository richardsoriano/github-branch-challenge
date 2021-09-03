import React, { useState } from 'react'
import BranchIcon from '../ui/icons/branch'

export default function Homepage({}) {
  const [open, setOpen] = useState(false)
  return (
    <div className='container mx-auto mt-8'>
      <div className='inline-block border bg-gray-600 border-gray-400 rounded px-2 hover:bg-gray-500 hover:border-gray-200 text-gray-50 transition-all delay-100'>
        <div
          className='flex items-center'
          onClick={() => setOpen((prev) => !prev)}
        >
          <BranchIcon />
          <div className='text-small text-gray-50 px-2'>main</div>
          <div className='dropdown-caret'></div>
        </div>
      </div>
      {open && (
        <div className='h-32 w-80 border bg-gray-600 border-gray-400 rounded'>
          <div className='flex justify-between px-2'>
            <div className='text-sm text-gray-50 px-2 border-b '>
              Switch branches/tags
            </div>

            <div>x</div>
          </div>
          <div className='px-2 py-1'>
            <input
              className='rounded px-2'
              type='text'
              placeholder='Find or create a branch...'
            />
          </div>
          <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      )}
    </div>
  )
}
