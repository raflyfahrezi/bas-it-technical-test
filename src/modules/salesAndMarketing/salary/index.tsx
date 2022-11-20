import React from 'react'
import {
  Alert,
  AlertIcon,
  AlertDescription,
  TableContainer,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
  InputGroup,
  InputRightAddon,
  Input,
  Button,
} from '@chakra-ui/react'

const Salary = () => {
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
          <Thead>
            <Tr>
              <Th>Kenaikan per Tahun</Th>
              <Th>2022</Th>
              <Th>2023</Th>
              <Th>2024</Th>
              <Th>2025</Th>
              <Th>2026</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Salary Increase</Td>
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <Td>
                    <InputGroup>
                      <Input minWidth={'20'} type='number' />
                      <InputRightAddon>%</InputRightAddon>
                    </InputGroup>
                  </Td>
                )
              })}
            </Tr>
            <Tr>
              <Td>Number of Salary per Year</Td>
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <Td>
                    <Input type='number' />
                  </Td>
                )
              })}
            </Tr>
            <Tr>
              <Td>Number of Senior Level</Td>
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <Td>
                    <Input type='number' />
                  </Td>
                )
              })}
            </Tr>
            <Tr>
              <Td>Salary per Month</Td>
              <Td colSpan={5}>
                <Input type='text' />
              </Td>
            </Tr>
            <Tr>
              <Td>Number of Junior Level</Td>
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <Td>
                    <Input type='number' />
                  </Td>
                )
              })}
            </Tr>
            <Tr>
              <Td>Salary per Month</Td>
              <Td colSpan={5}>
                <Input type='text' />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <div className='flex justify-end gap-6'>
        <Button colorScheme='blue' variant='outline'>
          Cancel
        </Button>
        <Button colorScheme='blue'>Submit</Button>
      </div>
    </div>
  )
}

export default Salary
