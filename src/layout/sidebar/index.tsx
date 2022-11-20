import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { routes } from '@/constant'

const Sidebar = () => {
  const location = useLocation()

  return (
    <div className='w-full max-w-xs py-10 flex flex-col gap-6 border-r-2'>
      <div className='px-6'>
        <p className='text-xl font-bold'>Finmod.id</p>
      </div>
      <div>
        {routes.map((route) => {
          return (
            <Link to={route.path}>
              <div
                className={`p-6 flex gap-4 items-center hover:bg-blue-100 transition-all ${
                  location.pathname === route.path && 'bg-blue-100'
                }`}
              >
                {route.icon}
                <p>{route.name}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
