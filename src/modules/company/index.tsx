import React from 'react'
import { Button } from '@chakra-ui/react'

import Profile from './profile'
import Competitor from './competitor'
import Shareholder from './shareholder'

const Company = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Profile />
      <Competitor />
      <Shareholder />
      <div className='flex justify-end gap-6'>
        <Button colorScheme='blue' variant='outline'>
          Cancel
        </Button>
        <Button colorScheme='blue'>Submit</Button>
      </div>
    </div>
  )
}

export default Company
