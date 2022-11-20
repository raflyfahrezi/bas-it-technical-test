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

const CostOfCapital = () => {
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
              <Td>Levered Beta</Td>
              <Td colSpan={4}>
                <Input />
              </Td>
            </Tr>
            <Tr>
              <Td>Equity Asset Beta</Td>
              <Td>
                <FormControl>
                  <FormLabel>Equity Beta</FormLabel>
                  <Input type='number' />
                </FormControl>
              </Td>
              <Td>
                <FormControl>
                  <FormLabel>Equity Beta</FormLabel>
                  <Input type='number' />
                </FormControl>
              </Td>
              <Td>
                <FormControl>
                  <FormLabel>Equity Beta</FormLabel>
                  <Input type='number' />
                </FormControl>
              </Td>
              <Td>
                <FormControl>
                  <FormLabel>Equity Beta</FormLabel>
                  <Input type='number' />
                </FormControl>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Button variant='link' colorScheme='blue'>
        Add Levered Beta
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

export default CostOfCapital
