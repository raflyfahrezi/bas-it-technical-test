import React from 'react'
import {
  Alert,
  AlertIcon,
  AlertDescription,
  TableContainer,
  Table,
  Tr,
  Td,
  Tbody,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'

const Competitor = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <Alert status='warning' variant='subtle'>
          <AlertIcon />
          <AlertDescription>
            Kamu bisa menambahkan produk atau layanan sesuai dengan businesmmu
          </AlertDescription>
        </Alert>
      </div>
      <TableContainer>
        <Table>
          <Tbody>
            <Tr>
              <Td>Public Company Beta</Td>
              <Td colSpan={3}>
                <Input />
              </Td>
            </Tr>
            <Tr>
              <Td>Market Data</Td>
              <Td>
                <FormControl>
                  <FormLabel>Price</FormLabel>
                  <Input type='number' />
                </FormControl>
              </Td>
              <Td>
                <FormControl>
                  <FormLabel>Shares</FormLabel>
                  <Input type='number' />
                </FormControl>
              </Td>
              <Td>
                <FormControl>
                  <FormLabel>Net Debt</FormLabel>
                  <Input type='number' />
                </FormControl>
              </Td>
            </Tr>
            <Tr>
              <Td>Financial Data</Td>
              <Td>
                <FormControl>
                  <FormLabel>Sales</FormLabel>
                  <Input type='number' />
                </FormControl>
              </Td>
              <Td>
                <FormControl>
                  <FormLabel>EBITDA</FormLabel>
                  <Input type='number' />
                </FormControl>
              </Td>
              <Td>
                <FormControl>
                  <FormLabel>Earnings</FormLabel>
                  <Input type='number' />
                </FormControl>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Button variant='link' colorScheme='blue'>
        Add Competitor
      </Button>
      <div className='flex justify-end gap-6'>
        <Button colorScheme='blue' variant='outline'>
          Cancel
        </Button>
        <Button colorScheme='blue'>Submit</Button>
      </div>
    </div>
  )
}

export default Competitor
