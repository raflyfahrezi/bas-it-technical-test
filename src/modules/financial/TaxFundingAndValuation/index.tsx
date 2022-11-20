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

const TaxFundingAndValuation = () => {
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
              <Td>
                <p className='font-bold'>Others & Tax</p>
              </Td>
            </Tr>
            <Tr>
              <Td>Other Income (%)</Td>
              <Td>
                <InputGroup>
                  <Input type='number' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Other Expenses (%)</Td>
              <Td>
                <InputGroup>
                  <Input type='number' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Tax (%)</Td>
              <Td>
                <InputGroup>
                  <Input type='number' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Other Current Asset (%)</Td>
              <Td>
                <InputGroup>
                  <Input type='number' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Other Current Liabilities (%)</Td>
              <Td>
                <InputGroup>
                  <Input type='number' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <p className='font-bold'>Funding Assumption</p>
              </Td>
            </Tr>
            <Tr>
              <Td>Starting Beginning Cash</Td>
              <Td>
                <Input type='number' />
              </Td>
            </Tr>
            <Tr>
              <Td>Paid Up (equities) / investor</Td>
              <Td>
                <Input type='number' />
              </Td>
            </Tr>
            <Tr>
              <Td>Existing Short Term Loan</Td>
              <Td>
                <Input type='number' />
              </Td>
            </Tr>
            <Tr>
              <Td>Short Term Loan to Revenue Ratio (%)</Td>
              <Td>
                <InputGroup>
                  <Input type='number' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Interest on Short Term Loan (%)</Td>
              <Td>
                <InputGroup>
                  <Input type='number' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Long Term Loan Drawdown Plan </Td>
              <Td>
                <Input type='number' />
              </Td>
            </Tr>
            <Tr>
              <Td>Long Term Loan Tenor (years)</Td>
              <Td>
                <Input type='number' />
              </Td>
            </Tr>
            <Tr>
              <Td>Interest on Long Term Loan (%)</Td>
              <Td>
                <InputGroup>
                  <Input type='number' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Loan Ratio to New and Continous Capex (%)</Td>
              <Td>
                <InputGroup>
                  <Input type='number' />
                  <InputRightAddon>%</InputRightAddon>
                </InputGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <p className='font-bold'>Valuation</p>
              </Td>
            </Tr>
            <Tr>
              <Td>Numbers of Share</Td>
              <Td>
                <Input type='number' />
              </Td>
            </Tr>
            <Tr>
              <Td>Risk Free Rate</Td>
              <Td>
                <Input type='number' />
              </Td>
            </Tr>
            <Tr>
              <Td>Expected Market Return</Td>
              <Td>
                <Input type='number' />
              </Td>
            </Tr>
            <Tr>
              <Td>Terminal Growth</Td>
              <Td>
                <Input type='number' />
              </Td>
            </Tr>
            <Tr>
              <Td>Lack of Marketability Discount</Td>
              <Td>
                <Input type='number' />
              </Td>
            </Tr>
            <Tr>
              <Td>Minority Discount</Td>
              <Td>
                <Input type='number' />
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

export default TaxFundingAndValuation
