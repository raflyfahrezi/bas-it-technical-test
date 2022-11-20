import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import Team from './team'
import IPAndLegal from './ipAndLegal'
import BusinessModel from './businessModel'
import ProductAndMarket from './productAndMarket'

const Questions = () => {
  return (
    <Tabs size='lg' variant='enclosed' isFitted>
      <TabList>
        <Tab className='font-bold'>Team</Tab>
        <Tab className='font-bold'>Business Model</Tab>
        <Tab className='font-bold'>Product & Market</Tab>
        <Tab className='font-bold'>IP & Legal</Tab>
      </TabList>

      <TabPanels>
        <TabPanel style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Team />
        </TabPanel>
        <TabPanel style={{ paddingLeft: 0, paddingRight: 0 }}>
          <BusinessModel />
        </TabPanel>
        <TabPanel style={{ paddingLeft: 0, paddingRight: 0 }}>
          <ProductAndMarket />
        </TabPanel>
        <TabPanel style={{ paddingLeft: 0, paddingRight: 0 }}>
          <IPAndLegal />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Questions
