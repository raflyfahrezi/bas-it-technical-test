import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import Competitor from './competitor'
import CostOfCapital from './capital'

const CompetitorAndCapital = () => {
  return (
    <Tabs size='lg' variant='enclosed' isFitted>
      <TabList>
        <Tab className='font-bold'>Competitor</Tab>
        <Tab className='font-bold'>Cost of Capital</Tab>
      </TabList>

      <TabPanels>
        <TabPanel style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Competitor />
        </TabPanel>
        <TabPanel style={{ paddingLeft: 0, paddingRight: 0 }}>
          <CostOfCapital />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default CompetitorAndCapital
