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

const MacroAndInventory = () => {
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
                <p className='font-bold'>Macro Assumption</p>
              </Td>
            </Tr>
            <Tr>
              <Td>Industry/Category Growth (%)</Td>
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
              <Td>Inflation</Td>
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
              <Td>USD Benchmark Spot Interest Rate (%)</Td>
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
              <Td>Local Currency Benchmark Spot Interest Rate (%)</Td>
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
              <Td>Exchange Rate Local Currency per USD</Td>
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
                <p className='font-bold'>
                  Discount & Sales Return (% of revenue)
                </p>
              </Td>
            </Tr>
            <Tr>
              <Td>Regular Discount (%)</Td>
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
              <Td>Sales Return (%)</Td>
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
                <p className='font-bold'>AR / AP / Inventory</p>
              </Td>
            </Tr>
            <Tr>
              <Td>Days of Receivable </Td>
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
              <Td>Days of Inventory</Td>
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
              <Td>Days of Payables</Td>
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
              <Td>% Receivable affected by FX2</Td>
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
              <Td>% Inventory affected by FX2</Td>
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
              <Td>% Payables affected by FX2</Td>
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

export default MacroAndInventory
