import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const Main = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <AppBar title="My AppBar" />
  </MuiThemeProvider>
);


const Footer = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
       </div>

      <div className="top-bar-right">
             
      </div>
   </div>

  </div>
);



export default Footer;
