import React from 'react'

import Profile from './profile'
import Valuasi from './valuasi'

const Home = () => {
  return (
    <div className='flex flex-col gap-6'>
      <Profile />
      <Valuasi />
    </div>
  )
}

export default Home
