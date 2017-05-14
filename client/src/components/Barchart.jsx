import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Bubble} from 'react-chartjs-2';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import axios from "axios";

class Barchart extends React.Component {
    constructor(props) {
    super(props);
    // set the initial component state
    this.state = {
      data: [],
      months:[] 
          }
     
    }
 
componentDidMount(){
  console.log("DID Mount");
    axios
        .get("http://codepen.io/jobs.json")
        .then(result =>     {
            this.setState({data: result.data.jobs["0"].company_name,months: result.data.jobs["0"].term});
          // console.log(result);
        //     const res=result.map(function (name) {
        //     return 'Hello, ' + name.company_name;
        // });
        //console.log(result.data.jobs["0"].company_name);

          // _this.setState({
          //   jobs: result.data.jobs
          // });
        });
    const formData = `bar`;
    // create an AJAX request
      }
    
render() {
const data1=[65, 59, 80, 81, 56, 55, 40];
 const chatdata = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: data1
    }
  ]
};
    
    return <div className="bar">
      
        <Bar
          data={chatdata}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
    </div>
  }


}
//ReactDOM.render(<UserProfile />, document.getElementById('root'));
export default Barchart;
  
  

