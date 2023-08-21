import Feed from '../components/feed/feed';
import MaestroHome from '../components/maestro/home';
import Bookings from '../components/maestro/bookings'
import PriorityDM from '../components/maestro/prioritydm';
import Services from '../components/maestro/services';
import AddService from '../components/maestro/addservice';
import EditService from '../components/maestro/editservice';
import DeleteService from '../components/maestro/deleteservice';
import Calendar from '../components/maestro/calendar';
import Payments from '../components/maestro/payments';
import Profile from '../components/maestro/profile';

import Dashboard from '../components/maestro/dashboard';

export const MaestroRoutes = [
  {
    path: "/maestro/feed",
    component: Feed
  },
  {
    path: "/maestro/dashboard",
    component: Dashboard,
    routes: [
      {
        path: "/maestro/dashboard/home",
        component: MaestroHome
      },
      {
        path: "/maestro/dashboard/bookings",
        component: Bookings
      },
      {
        path: "/maestro/dashboard/services",
        component: Services,
      },
      {
        path: "/maestro/dashboard/addservice",
        component: AddService
      },
      {
        path: "/maestro/dashboard/editservice",
        component: EditService
      },
      {
        path: "/maestro/dashboard/deleteservice",
        component: DeleteService
      },
      {
        path: "/maestro/dashboard/calendar",
        component: Calendar
      },
      {
        path: "/maestro/dashboard/payments",
        component: Payments
      },
      {
        path: "/maestro/dashboard/profile",
        component: Profile
      },
      {
        path: "/maestro/dashboard/prioritydm",
        component: PriorityDM
      },
      {
        path: "/maestro/dashboard/",
        component: MaestroHome
      }
    ]
  }
];