import React from 'react'

function Navbar() {
  return (
    <div>
        <h1>NETFLIX</h1>
        <div>
            <button className='text-white pr-4'>Sign In</button>
            <button className='bg-red-600 px-6 py-4 rounded cursor-pointer text-white'>Sign Un</button>
        </div>
    </div>
  )
}

export default Navbar