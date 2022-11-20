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
  Select,
} from '@chakra-ui/react'

const SalesCogs = () => {
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
              <Td>Variable</Td>
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
              <Td>Harga</Td>
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <Td>
                    <InputGroup>
                      <Input type='number' />
                      <InputRightAddon>%</InputRightAddon>
                    </InputGroup>
                  </Td>
                )
              })}
            </Tr>
            <Tr>
              <Td>COGS</Td>
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <Td>
                    <InputGroup>
                      <Input type='number' />
                      <InputRightAddon>%</InputRightAddon>
                    </InputGroup>
                  </Td>
                )
              })}
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <TableContainer>
        <Table>
          <Tbody>
            <Tr>
              <Td>Produk / Jasa</Td>
              <Td>
                <Select>
                  <option value=''></option>
                </Select>
              </Td>
              <Td>
                <Input type='text' />
              </Td>
            </Tr>
            <Tr>
              <Td>Variabel</Td>
              <Td>
                <Select>
                  <option value=''></option>
                </Select>
              </Td>
              <Td>
                <Input type='text' />
              </Td>
            </Tr>
            <Tr>
              <Td>Harga</Td>
              <Td>
                <Select>
                  <option value=''></option>
                </Select>
              </Td>
              <Td>
                <Input type='text' />
              </Td>
            </Tr>
            <Tr>
              <Td>HPP</Td>
              <Td colSpan={2}>
                <Input type='text' />
              </Td>
            </Tr>
            <Tr>
              <Td>Harga</Td>
              <Td colSpan={2}>
                <InputGroup>
                  <Input type='text' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
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

export default SalesCogs
