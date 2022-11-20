import React from 'react'
import { Select, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'

const Profile = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div>
        <p className='text-lg font-bold'>Company Profile</p>
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
          <FormLabel>Logo</FormLabel>
          <Button width='full'>Add Logo</Button>
        </FormControl>
        <FormControl>
          <FormLabel>Alamat</FormLabel>
          <Input type='text' />
        </FormControl>
        <FormControl>
          <FormLabel>Industry</FormLabel>
          <Select>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Select>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Business Currency</FormLabel>
          <Select>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>ZIP</FormLabel>
          <Select>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Business Stage</FormLabel>
          <Select>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <Select>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Business Start</FormLabel>
          <Input type='date' />
        </FormControl>
        <FormControl>
          <FormLabel>Starting Cash Balance</FormLabel>
          <Input type='input' />
        </FormControl>
        <FormControl>
          <FormLabel>Projection Start Year</FormLabel>
          <Input type='date' />
        </FormControl>
      </div>
    </div>
  )
}

export default Profile
