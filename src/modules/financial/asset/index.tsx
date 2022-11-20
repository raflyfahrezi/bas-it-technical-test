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

const Asset = () => {
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
              <Th></Th>
              <Th>2021</Th>
              <Th>2022</Th>
              <Th>2023</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <p className='font-bold'>Asset & Depreciation</p>
              </Td>
            </Tr>
            <Tr>
              <Td>Existing Land</Td>
              {[1, 2, 3].map((item) => {
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
              <Td>Existing Building</Td>
              {[1, 2, 3].map((item) => {
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
              <Td>Assumption on Building Depreciation</Td>
              {[1, 2, 3].map((item) => {
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
              <Td>Existing Equipment</Td>
              {[1, 2, 3].map((item) => {
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
              <Td>Assumption on Equipment Depreciation (%)</Td>
              {[1, 2, 3].map((item) => {
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
              <Td>Existing Vehicle</Td>
              {[1, 2, 3].map((item) => {
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
              <Td>Assumption on Vehicle Deprication (year)</Td>
              {[1, 2, 3].map((item) => {
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
              <Td>Existing Furniture</Td>
              {[1, 2, 3].map((item) => {
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
              <Td>Assumption on Furniture Depreciation (year)</Td>
              {[1, 2, 3].map((item) => {
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
              <Td>Capex Purchase</Td>
              {[1, 2, 3].map((item) => {
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
              <Td>Assumption on New Fixed Asset Depreciation (year)</Td>
              {[1, 2, 3].map((item) => {
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
              <Td>
                <p className='font-bold'>Intangible Asset & Amortization</p>
              </Td>
            </Tr>
            <Tr>
              <Td>Existing Intangibles</Td>
              {[1, 2, 3].map((item) => {
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
              <Td>Assumption on Intangibles Amortization (%)</Td>
              {[1, 2, 3].map((item) => {
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
              <Td>Purchase Intangibles Plan</Td>
              {[1, 2, 3].map((item) => {
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
      <div className='flex justify-end gap-6'>
        <Button colorScheme='blue' variant='outline'>
          Cancel
        </Button>
        <Button colorScheme='blue'>Submit</Button>
      </div>
    </div>
  )
}

export default Asset
