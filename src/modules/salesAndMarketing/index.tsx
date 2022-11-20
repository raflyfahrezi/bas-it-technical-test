import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import Salary from './salary'
import SalesCogs from './salesCogs'
import Marketing from './marketing'
import Operational from './operational'

const SalesAndMarketing = () => {
  return (
    <Tabs variant='enclosed' isFitted>
      <TabList>
        <Tab className='font-bold'>Sales & COGS</Tab>
        <Tab className='font-bold'>Salary</Tab>
        <Tab className='font-bold'>Marketing</Tab>
        <Tab className='font-bold'>Operational</Tab>
      </TabList>

      <TabPanels>
        <TabPanel style={{ paddingLeft: 0, paddingRight: 0 }}>
          <SalesCogs />
        </TabPanel>
        <TabPanel style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Salary />
        </TabPanel>
        <TabPanel style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Marketing />
        </TabPanel>
        <TabPanel style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Operational />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default SalesAndMarketing
