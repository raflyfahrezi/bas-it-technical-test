import React from 'react'
import { FormLabel, FormControl, Input, Button } from '@chakra-ui/react'

const ProductAndMarket = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-6'>
        <FormControl>
          <FormLabel>Total Number of Product</FormLabel>
          <Input type='number' />
        </FormControl>
        <FormControl>
          <FormLabel>Revenue Stream</FormLabel>
          <Input type='text' />
        </FormControl>
        <FormControl>
          <FormLabel>Customer Relation</FormLabel>
          <Input type='text' />
        </FormControl>
        <FormControl>
          <FormLabel>Customer Segment</FormLabel>
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

export default ProductAndMarket
