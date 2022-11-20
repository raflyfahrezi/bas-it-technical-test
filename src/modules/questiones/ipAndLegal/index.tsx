import React from 'react'
import {
  FormLabel,
  FormControl,
  Radio,
  RadioGroup,
  Button,
} from '@chakra-ui/react'

const IPAndLegal = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-6'>
        <FormControl>
          <FormLabel>
            1. Apakah anda sudah memiliki Akta Pendirian Perusahaan?
          </FormLabel>
          <RadioGroup name='founder-hold-invest' className='flex gap-6'>
            <Radio value='yes'>Yes</Radio>
            <Radio value='no'>No</Radio>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>2. Apakah anda sudah memiliki NPWP Badan Usaha?</FormLabel>
          <RadioGroup name='founder-hold-invest' className='flex gap-6'>
            <Radio value='yes'>Yes</Radio>
            <Radio value='no'>No</Radio>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>
            3. Apakah anda sudah memiliki surat ijin usaha perdagangan (SIUP)?
          </FormLabel>
          <RadioGroup name='founder-hold-invest' className='flex gap-6'>
            <Radio value='yes'>Yes</Radio>
            <Radio value='no'>No</Radio>
          </RadioGroup>
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
          <FormLabel>
            4. Apakah anda sudah memilik keterangan domisili perusahaan (SKDP)
          </FormLabel>
          <RadioGroup name='founder-hold-invest' className='flex gap-6'>
            <Radio value='yes'>Yes</Radio>
            <Radio value='no'>No</Radio>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>
            5. Apakah anda sudah memiliki Tanda Daftar Perusahaan?
          </FormLabel>
          <RadioGroup name='founder-hold-invest' className='flex gap-6'>
            <Radio value='yes'>Yes</Radio>
            <Radio value='no'>No</Radio>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>6. Apakah anda sudah memiliki Merek Dagang?</FormLabel>
          <RadioGroup name='founder-hold-invest' className='flex gap-6'>
            <Radio value='yes'>Yes</Radio>
            <Radio value='no'>No</Radio>
          </RadioGroup>
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

export default IPAndLegal
