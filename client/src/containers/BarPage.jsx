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
import DashBoardPage from './DashBoardPage';
import axios from "axios";
const data1=[65, 59, 80, 81, 56, 55, 40];
const data = {
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

const data2 = {
  labels: ['January'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [{x:10,y:20,r:5}]
    }
  ]
};

// axios.get('/user?ID=12345')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


 

export default React.createClass({
 componentDidMount(){
  //console.log("DID Mount");
    axios
        .get("http://codepen.io/jobs.json")
        .then(function(result) {    
         //console.log(result);
        //     const res=result.map(function (name) {
        //     return 'Hello, ' + name.company_name;
        // });
       // console.log(result.data.jobs["0"].company_name);

          // _this.setState({
          //   jobs: result.data.jobs
          // });
        });
    const formData = `bar`;
    // create an AJAX request
      },
  displayName: 'BarExample',

  render() {
    return (
      
    
      <div>
        {/*<DashBoardPage></DashBoardPage>*/}
        <h2>Bar Chart Example </h2>
        <div className="bar">
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
        {/*<div>
        <h2>Bubble Example</h2>
        <Bubble data={data2} />
      </div>*/}
      </div>
      </div>

    );
  }
});

