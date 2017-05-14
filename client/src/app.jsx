import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router ,Route,IndexRoute } from 'react-router';
import routes from './routes.js';
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
import Footer from './containers/Footer.jsx';
import SimpleMap from './components/SimpleMap.jsx';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();
/*
ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>), document.getElementById('react-app'));*/

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory}  >
      <Route path="/" component={LoginPage}/>
      <Route path="/login" component={LoginPage}/>
    <Route path="/dashdb" component={DashB} >
      <IndexRoute  component={Pie}/> 
      <Route path="/pie" component={Pie}/>
      <Route path="/bubble" component={Bubble}/>
      <Route path="/doughnut" component={Doughnut}/>
      <Route path="/bar" component={Barchart}/>
      <Route path="/map" component={SimpleMap}/>
      
    </Route>
  </Router>
  </MuiThemeProvider>), document.getElementById('header'));

ReactDom.render(( <Footer/> ) ,document.getElementById('root'));




  