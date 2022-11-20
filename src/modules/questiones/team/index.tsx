import React from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  FormControl,
  Input,
  InputGroup,
  InputRightAddon,
  Radio,
  RadioGroup,
  Button,
} from '@chakra-ui/react'

const Team = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <Alert status='warning' variant='subtle'>
          <AlertIcon />
          <AlertTitle>Team</AlertTitle>
          <AlertDescription>
            Kapasitas dan kualitas talent dalam team anda akan mempengaruhi
            penilaian investor
          </AlertDescription>
        </Alert>
        <Alert status='warning'>
          <AlertIcon />
          <AlertTitle>Founder</AlertTitle>
          <AlertDescription>
            Penguasaha yang memulai perusahaan
          </AlertDescription>
        </Alert>
      </div>
      <div className='flex flex-col gap-6'>
        <FormControl>
          <FormLabel>1. Berapa banyak founder di perusahaan anda?</FormLabel>
          <Input type='number' />
        </FormControl>
        <FormControl>
          <FormLabel>
            2. Berapa founder menginvest di perusahaan anda?
          </FormLabel>
          <InputGroup>
            <Input type='text' />
            <InputRightAddon>%</InputRightAddon>
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>
            3. Apakah ada founder yang menguasai besar investasi?
          </FormLabel>
          <RadioGroup name='founder-hold-invest' className='flex gap-6'>
            <Radio value='yes'>Yes</Radio>
            <Radio value='no'>No</Radio>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>4. Berapa banyak founder di perusahaan ?</FormLabel>
          <Input type='number' />
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

export default Team
