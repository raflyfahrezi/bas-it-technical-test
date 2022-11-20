import React from 'react'
import { Helmet } from 'react-helmet'

import { THelmet } from './types'

const Head = ({ title }: THelmet) => {
  const titleTemplate = '%s | Finmod.id'

  return <Helmet title={title} titleTemplate={titleTemplate} />
}

export default Head
