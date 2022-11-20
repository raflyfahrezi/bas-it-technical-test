import React from 'react'
import { Avatar } from '@chakra-ui/react'

import { Sidebar } from '@/layout'

import { TPageWrapperProps } from './types'

const PageWrapper = ({ title, children }: TPageWrapperProps) => {
  return (
    <div className='w-full h-screen absolute flex'>
      <Sidebar />
      <div className='w-full flex flex-col'>
        <div className='w-full p-6 flex justify-between items-center shadow-md'>
          <p className='font-bold'>{title}</p>
          <Avatar size='sm' />
        </div>
        <main className='w-full max-w-5xl mx-auto p-6'>{children}</main>
      </div>
    </div>
  )
}

export default PageWrapper
