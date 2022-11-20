import React from 'react'
import { Avatar } from '@chakra-ui/react'

import { THeaderProps } from './types'

const Header = ({ title }: THeaderProps) => {
  return (
    <div className='w-full p-6 flex justify-between items-center shadow-md'>
      <p className='font-bold'>{title}</p>
      <Avatar size='sm' />
    </div>
  )
}

export default Header
