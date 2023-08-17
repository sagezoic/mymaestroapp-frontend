import AllMaestro from "../components/allmaestro/allmaestro";
import SoftwareEngineers from '../components/allmaestro/softeng';
import Designers from '../components/allmaestro/designers';
import Mentors from '../components/allmaestro/mentors';
import Creators from '../components/allmaestro/creators';
import MentalHealth from '../components/allmaestro/mentalhealth';

export const CommonRoutes = [
  {
    path: "/allmaestro",
    component: AllMaestro,
  },  
  {
    path: "/softeng",
    component: SoftwareEngineers
  },
  {
    path: "/designers",
    component: Designers
  },
  {
    path: "/mentors",
    component: Mentors
  },
  {
    path: "/creators",
    component: Creators
  },
  {
    path: "/mentalhealth",
    component: MentalHealth
  }
];