import React from 'react'
import { Link } from 'react-router-dom'


export function NotFound() {


    return (
        <>
            <div className='text-center py-28 '>
                <h1 className='font-medium text-7xl'>404 Not Found</h1>
                <p className=' text-sm my-9'>Your visited page not found. You may go home page.</p>
                <Link to={'/home'} className='px-4 py-2 bg-[#Db4444] text-white rounded hover:bg-white hover:text-gray-700 hover:border'>Back to home page</Link>
            </div>
        </>
    )
}
