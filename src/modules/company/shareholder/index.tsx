import React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react'

const Shareholder = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div>
        <p className='text-lg font-bold'>Shareholder</p>
        <p className='text-sm text-gray-600'>
          A clear and detailed company valuation report is the best way to
          communicate your value
        </p>
      </div>
      <div className='grid grid-cols-2 gap-6'>
        <FormControl>
          <FormLabel> Name</FormLabel>
          <Input type='text' />
        </FormControl>
        <FormControl>
          <FormLabel>Percentage</FormLabel>
          <InputGroup>
            <Input type='text' />
            <InputRightAddon>%</InputRightAddon>
          </InputGroup>
        </FormControl>
      </div>
      <div>
        <Button variant='link' colorScheme='blue'>
          Add Shareholder
        </Button>
      </div>
    </div>
  )
}

export default Shareholder
