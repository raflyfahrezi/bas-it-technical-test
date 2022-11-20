import React from 'react'
import { FormLabel, FormControl, Input, Button } from '@chakra-ui/react'

const BusinessModel = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-6'>
        <FormControl>
          <FormLabel>Key Partner</FormLabel>
          <Input type='text' />
        </FormControl>
        <Button variant='link'>Add Keypartner</Button>
        <FormControl>
          <FormLabel>Key Activities</FormLabel>
          <Input type='text' />
        </FormControl>
        <Button variant='link'>Add Key Activities</Button>
        <FormControl>
          <FormLabel>Value Preposition</FormLabel>
          <Input type='text' />
        </FormControl>
        <Button variant='link'>Add Value Preposition</Button>
        <FormControl>
          <FormLabel>Key Resources</FormLabel>
          <Input type='text' />
        </FormControl>
        <Button variant='link'>Add Key Resources</Button>
        <FormControl>
          <FormLabel>Channel</FormLabel>
          <Input type='text' />
        </FormControl>
        <Button variant='link'>Add Channel</Button>
        <FormControl>
          <FormLabel>Cost Structure</FormLabel>
          <Input type='text' />
        </FormControl>
      </div>
      <div className='flex justify-end gap-6'>
        <Button colorScheme='blue' variant='outline'>
          Cancel
        </Button>
        <Button colorScheme='blue'>Submit</Button>
      </div>
    </div>
  )
}

export default BusinessModel
