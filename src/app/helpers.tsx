import { createBrowserRouter } from 'react-router-dom'

import { routes } from '@/constant'
import { PageWrapper } from '@/layout'

export const router = createBrowserRouter([
  ...routes.map((route) => {
    return {
      path: route.path,
      element: <PageWrapper title={route.name}>{route.element}</PageWrapper>,
    }
  }),
])
