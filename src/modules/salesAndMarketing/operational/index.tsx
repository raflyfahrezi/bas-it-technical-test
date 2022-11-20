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

const Operational = () => {
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
              <Td>Maintenance and Fix</Td>
              <Td>
                <InputGroup>
                  <Input type='text' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Insurance</Td>
              <Td>
                <InputGroup>
                  <Input type='text' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Telecommunication</Td>
              <Td>
                <InputGroup>
                  <Input type='text' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Vehicle Expenses</Td>
              <Td>
                <InputGroup>
                  <Input type='text' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Stationery</Td>
              <Td>
                <InputGroup>
                  <Input type='text' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Unpaid Recevaible</Td>
              <Td>
                <InputGroup>
                  <Input type='text' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Allowance for Damaged Inventory</Td>
              <Td>
                <InputGroup>
                  <Input type='text' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Donation</Td>
              <Td>
                <InputGroup>
                  <Input type='text' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Travel & Accomodation</Td>
              <Td>
                <InputGroup>
                  <Input type='text' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Utilities</Td>
              <Td>
                <InputGroup>
                  <Input type='text' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Office Related Charges</Td>
              <Td>
                <InputGroup>
                  <Input type='text' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Equipment Operational Cost</Td>
              <Td>
                <InputGroup>
                  <Input type='text' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Training and Education</Td>
              <Td>
                <InputGroup>
                  <Input type='text' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Office Rent</Td>
              <Td>
                <InputGroup>
                  <Input type='text' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Others</Td>
              <Td>
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

export default Operational
