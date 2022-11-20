import React from 'react'

import { Head, Header, Sidebar } from '@/layout'

import { TPageWrapperProps } from './types'

const PageWrapper = ({ title, children }: TPageWrapperProps) => {
  return (
    <>
      <Head title={title} />
      <div className='w-full h-screen absolute flex overflow-hidden'>
        <Sidebar />
        <div className='w-full flex flex-col'>
          <Header title={title} />
          <main className='w-full max-w-5xl mx-auto p-6 overflow-auto'>
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default PageWrapper
