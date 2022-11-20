import { TRouter } from '@/models'
import {
  Home,
  Company,
  Financial,
  Questiones,
  SalesAndMarketing,
  CompetitorAndCapital,
} from '@/modules'
import {
  HomeIcon,
  SalesIcon,
  CompanyIcon,
  FinanceIcon,
  CompetitorIcon,
  QuestionsIcon,
} from '@/assets'

export const routes: TRouter[] = [
  {
    path: '/',
    name: 'Home',
    icon: <HomeIcon />,
    element: <Home />,
  },
  {
    path: '/company',
    name: 'Company',
    icon: <CompanyIcon />,
    element: <Company />,
  },
  {
    path: '/financial-assumption',
    name: 'Financial Assumption',
    icon: <FinanceIcon />,
    element: <Financial />,
  },
  {
    path: '/questiones',
    name: 'Questiones',
    icon: <QuestionsIcon />,
    element: <Questiones />,
  },
  {
    path: '/sales-and-marketing',
    name: 'Sales and Marketing',
    icon: <SalesIcon />,
    element: <SalesAndMarketing />,
  },
  {
    path: '/competitor-and-capital',
    name: 'Competitor and Capital',
    icon: <CompetitorIcon />,
    element: <CompetitorAndCapital />,
  },
]
