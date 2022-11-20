import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import Asset from './asset'
import MacroAndInventory from './macroAndInventory'
import TaxFundingAndValuation from './TaxFundingAndValuation'

const Financial = () => {
  return (
    <Tabs variant='enclosed' isFitted>
      <TabList>
        <Tab className='font-bold'>Macro and Inventory</Tab>
        <Tab className='font-bold'>Asset</Tab>
        <Tab className='font-bold'>Tax, Funding and Valuation</Tab>
      </TabList>

      <TabPanels>
        <TabPanel style={{ paddingLeft: 0, paddingRight: 0 }}>
          <MacroAndInventory />
        </TabPanel>
        <TabPanel style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Asset />
        </TabPanel>
        <TabPanel style={{ paddingLeft: 0, paddingRight: 0 }}>
          <TaxFundingAndValuation />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Financial
