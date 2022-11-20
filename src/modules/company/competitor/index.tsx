import React from 'react'
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react'

const Competitor = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div>
        <p className='text-lg font-bold'>Competitor</p>
        <p className='text-sm text-gray-600'>
          A clear and detailed company valuation report is the best way to
          communicate your value
        </p>
      </div>
      <div className='grid grid-cols-2 gap-6'>
        <FormControl>
          <FormLabel>Company Name</FormLabel>
          <Input type='text' />
        </FormControl>
        <FormControl>
          <FormLabel>URL</FormLabel>
          <Input type='text' />
        </FormControl>
      </div>
      <div>
        <Button variant='link' colorScheme='blue'>
          Add Competitor
        </Button>
      </div>
    </div>
  )
}

export default Competitor
