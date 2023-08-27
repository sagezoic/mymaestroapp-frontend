import Feed from '../components/feed/feed';
import ExplorerHome from '../components/explorer/home';
import Bookings from '../components/explorer/bookings'
import PriorityDM from '../components/explorer/prioritydm';
import Calendar from '../components/explorer/calendar';
import Payments from '../components/explorer/payments';
import Profile from '../components/explorer/profile';
import AllServices from '../components/explorer/allservices';
import Dashboard from '../components/explorer/dashboard';
import ReqService from '../components/explorer/reqservice';
import Transaction from '../components/transaction';

export const ExplorerRoutes = [
  {
    path: "/explorer/feed",
    component: Feed
  },
  {
    path: "/explorer/allservices/",
    component: AllServices
  },
  {
    path: "/explorer/reqservice",
    component: ReqService
  },
  {
    path: "/explorer/transaction",
    component: Transaction
  },
  {
    path: "/explorer/dashboard",
    component: Dashboard,
    routes: [
      {
        path: "/explorer/dashboard/home",
        component: ExplorerHome
      },
      {
        path: "/explorer/dashboard/bookings",
        component: Bookings
      },
      {
        path: "/explorer/dashboard/calendar",
        component: Calendar
      },
      {
        path: "/explorer/dashboard/payments",
        component: Payments
      },
      {
        path: "/explorer/dashboard/profile",
        component: Profile
      },
      {
        path: "/explorer/dashboard/prioritydm",
        component: PriorityDM
      },
      {
        path: "/explorer/dashboard/",
        component: ExplorerHome
      }
     

    ]
  }
];