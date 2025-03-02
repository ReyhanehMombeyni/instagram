import React from 'react'
import { FiX } from "react-icons/fi";

const SearchItem = () => {
    return (
        <div className='mt-4 flex justify-between items-center'>
            <div className='flex'>
                <img className='pr-3' src="./../public/img/mkbhd.png" alt="img" />
                <div >
                    <div className='flex items-center'>
                        <span>mkbhd</span>
                        <img className='w-[12px] h-[12px]' src="./../public/img/Frame.png" alt="" />
                    </div>
                    <p className='text-gray-400'>TED Talks</p>
                </div>
            </div>
            <FiX className='text-gray-400 text-xl font-bold' />
        </div>
    )
}

export default SearchItem
