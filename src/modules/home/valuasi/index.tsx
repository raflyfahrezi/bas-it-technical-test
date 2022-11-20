import React from 'react'
import { Button, Card, CardHeader, CardBody } from '@chakra-ui/react'

const Valuasi = () => {
  return (
    <Card>
      <CardHeader>
        <p className='text-lg font-bold'>Valuasi</p>
      </CardHeader>
      <CardBody className='flex flex-col gap-2'>
        <Button width='full' variant='outline'>
          Initial Estimate
        </Button>
        <Button width='full' variant='outline'>
          Quisioner
        </Button>
        <Button width='full' variant='outline'>
          Financial
        </Button>
        <Button width='full' variant='outline'>
          Download Report
        </Button>
      </CardBody>
    </Card>
  )
}

export default Valuasi
