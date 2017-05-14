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
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import {List, ListItem} from 'material-ui/List';
import MobileTearSheet from './MobileTearSheet';
import {
    blue300,
    indigo900,
    orange200,
    deepOrange300,
    pink400,
    purple500,
} from 'material-ui/styles/colors';



const style = {margin: 5};


const name = "User";
class DashB extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.toggleNavigation = this.toggleNavigation.bind(this);
    }

    // componentDidUpdate() {
    //      this.handlePress.bind(this);
    // }
//   state = {
//     open: false,
//   };

//   handleToggle = () => {
//     this.setState({
//       open: !this.state.open,
//     });
//   };

//   handleNestedListToggle = (item) => {
//     this.setState({
//       open: item.state.open,
//     });
//   };

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
        this.setState({ open: !this.state.open });
    }

    render() {
        var navTitleStyle = {
            marginLeft: '-4px'

        };

//  children={
//                         <div className="center">
//                             <List>
//                                 <ListItem
//                                     disabled={true}
//                                     leftAvatar={
//                                         <Avatar src="images/user.jpg" />
//                                     }>
//                                 </ListItem>
//                             </List>
//                         </div>
//                     }
        return (
            <div id="main">
                <div id="header">
                <AppBar
                   
                    title="Sample Charts Dashboard"
                    onLeftIconButtonTouchTap={this.toggleNavigation}
                    iconElementRight={
                        <div>
                            <Badge
                                badgeContent={10}
                                secondary={true}
                                badgeStyle={{ top: 10, right: 10 }}
                            >
                                <IconButton tooltip="Notifications">
                                    <NotificationsIcon />
                                </IconButton>
                            </Badge>
                            <IconMenu
                                iconButtonElement={
                                    <IconButton><MoreVertIcon /></IconButton>
                                }
                                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                            >
                                <MenuItem primaryText={localStorage.getItem('User')} />
                                <MenuItem primaryText="Refresh" />
                                <MenuItem primaryText="Help" />
                                <Link to={'/login'} onTouchTap={this.toggleNavigation} >
                                    <MenuItem primaryText="Sign out" />
                                </Link>

                            </IconMenu>



                        </div>
                    }
                />
            </div> 

            <div id="sidediv" className="left-side-div" >
            <div>
            <Avatar src="images/user.jpg" color={deepOrange300}
          backgroundColor={purple500}
          size={120}
          style={style}/>
          <MobileTearSheet>
          <List>
             <Link to={'/bar'} onTouchTap={this.toggleNavigation} >
                <ListItem primaryText="Bar Chart" />
              </Link>
            
            <Link to={'/bubble'} onTouchTap={this.toggleNavigation} >
                <ListItem primaryText="Bubble Chart" />
              </Link>

            <Link to={'/doughnut'} onTouchTap={this.toggleNavigation} >
                            <ListItem primaryText="Doughnut Chart" />
                        </Link>
                <Link to={'/pie'} onTouchTap={this.toggleNavigation} >
                    <ListItem primaryText="Pie Chart" />
                </Link>
                    
      
               </List>
        </MobileTearSheet>
      </div>
                
            </div>
            <div className="page-content">
                
                   {this.props.children}
            </div>
            </div>
        );
    }
}

DashB.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};



export default DashB;