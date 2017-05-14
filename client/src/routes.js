import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import DashBoardPage from './containers/DashBoardPage.jsx';
import BarPage from './containers/BarPage.jsx';
import Bubble from './containers/Bubble.jsx';
import Doughnut from './containers/Doughnut.jsx';
import Pie from './containers/Pie.jsx';
import DashB from './components/DashB.jsx';
import Barchart from './components/Barchart.jsx';


const routes = {
  // base component (wrapper for the whole application).
 // component: DashB,
  childRoutes: [
    {
      path: '/',
      component: LoginPage
    },
    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },
     {
      path: '/dashboard',
      indexRoute: { component: BarPage },
      component: DashBoardPage
    },
    {
      path: '/bar',
            indexRoute: { component: DashB },
      component: BarPage
    },
    {
      path: '/bubble',
      component: Bubble
    },
    {
      path: '/doughnut',
      component: Doughnut
    },
    {
      path: '/pie',
      component: Pie
    },
    {
      path: '/dashdb',
      component: DashB
    },
    
    
  ]
};

export default routes;
