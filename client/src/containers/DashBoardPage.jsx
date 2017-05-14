
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
/*const githubButton = (
  <IconButton
    iconClassName="material-icons"
    href="https://github.com/lambdacdm/react-material-dashboard"
    linkButton={true}>
    code
  </IconButton>
);*/
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: 3};
const name="User";
class DashBoardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  // componentDidUpdate() {
  //      this.handlePress.bind(this);
  // }
// componentDidMount(){
//    axios
//         .get("http://codepen.io/jobs.json")
//         .then(function(result) {    
//            console.log(result);
//           // _this.setState({
//           //   jobs: result.data.jobs
//           // });
//         });
// }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    };
  }

  componentWillMount() {
    this.setState({
      muiTheme: getMuiTheme()
    });
  }

  toggleNavigation() {
    this.setState({open: !this.state.open});
  }

  render() {
    var navTitleStyle = {
      marginLeft: '-4px'

    };

    return (
      <div id="main">
        <AppBar
        children={
           <div className="center"> 
               <List>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar src="images/user.jpg" />
        }
    >
   </ListItem>
    </List>
            </div>
        }
          title="Sample Charts Dashboard"
                   onLeftIconButtonTouchTap={this.toggleNavigation}
         //  iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        
           iconElementRight={
             <div>
                <Badge
      badgeContent={10}
      secondary={true}
      badgeStyle={{top: 10, right: 10}}
    >
      <IconButton tooltip="Notifications">
        <NotificationsIcon />
      </IconButton>
    </Badge>
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
         <MenuItem primaryText={name} />
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
         <Link to={'/login'} onTouchTap={this.toggleNavigation} >
            <MenuItem primaryText="Sign out" />
          </Link>
        
      </IconMenu>



      </div>
    }
        />
        <Drawer
          open={this.state.open}
          docked={false}
          width={300}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar
            title="Sample Charts"
            showMenuIconButton={false}
            titleStyle={navTitleStyle}
          />
          <Link to={'/bar'} onTouchTap={this.toggleNavigation}  className="nav-link">
            <MenuItem>Bar Chart</MenuItem>
          </Link>
                  <Link to={'/bubble'} onTouchTap={this.toggleNavigation} className="nav-link">
            <MenuItem>Bubble Chart</MenuItem>
          </Link>
          <Link to={'/doughnut'} onTouchTap={this.toggleNavigation} className="nav-link">
            <MenuItem>Doughnut Chart</MenuItem>
          </Link>
          <Link to={'/pie'} onTouchTap={this.toggleNavigation} className="nav-link">
            <MenuItem>Pie Chart</MenuItem>
          </Link>
        </Drawer>
        <div className="page-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

DashBoardPage.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};



export default DashBoardPage;
