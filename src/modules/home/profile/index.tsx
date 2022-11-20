import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Tr,
  Td,
  TableContainer,
  Table,
  Tbody,
} from '@chakra-ui/react'

const Profile = () => {
  return (
    <Card>
      <CardHeader>
        <p className='text-lg font-bold'>TimeToWatch</p>
      </CardHeader>
      <CardBody className='flex'>
        <TableContainer className='w-full'>
          <Table>
            <Tbody>
              <Tr>
                <Td>Started in:</Td>
                <Td>2016</Td>
              </Tr>
              <Tr>
                <Td>Industry:</Td>
                <Td>Entertaiment And Media</Td>
              </Tr>
              <Tr>
                <Td>Business Activity:</Td>
                <Td>Movie Subscription</Td>
              </Tr>
              <Tr>
                <Td>Employee:</Td>
                <Td>10</Td>
              </Tr>
              <Tr>
                <Td>Stage:</Td>
                <Td>Early Bird</Td>
              </Tr>
              <Tr>
                <Td>Last Revenue:</Td>
                <Td>Rp100.000.000</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <div className='flex justify-center items-center'>
          <img
            src='/placeholder-image.jpg'
            alt=''
            className='w-full max-w-md'
          />
        </div>
      </CardBody>
    </Card>
  )
}

export default Profile
