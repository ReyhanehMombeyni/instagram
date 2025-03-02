import React from 'react'
import SearchItem from './SearchItem';

function SearchBar() {
  return (
    <section className='text-black w-[400px] p-3'>
      <div >
        <h1 className='mb-8 text-2xl font-bold'>Search</h1>
        <label className="input bg-gray-200 outline-none mb-5 w-full">
          <input type="search" required placeholder="Search" className='outline-none' />
        </label>
        <div className='flex items-center justify-between'>
          <h6 className='text-md font-medium'>Recent</h6>
          <a href="#" className='textarea-sm font-medium text-[#0095F6]'>Clear all</a>
        </div>
        <SearchItem />
      </div>
    </section>
  )
}

export default SearchBar
