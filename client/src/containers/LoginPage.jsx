import React, { PropTypes } from 'react';
import LoginForm from '../components/LoginForm.jsx';
import axios from "axios";
//import DashB from './components/DashB.jsx';
class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      },
      isvalid:false,
      
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }
 validateLoginForm() {
  const errors = {};
  let isFormValid = true;
  let message = '';
  console.log('methos');
// if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
//  // if (typeof payload.email !== 'string') {
//     isFormValid = false;
//     errors.email = 'Please provide your email address.';
//     }

//   if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
//     isFormValid = false;
//     errors.password = 'Please provide your password.';
    
//   }

//   if (!isFormValid) {
//   message = 'Check the form for errors.';
//   }
  
  
  return {
    success: isFormValid,
    message,
    errors,
      };
}

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
  //  axios
  //       .get("http://codepen.io/jobs.json")
  //       .then(function(result) {    
  //          console.log(result);
  //         // _this.setState({
  //         //   jobs: result.data.jobs
  //         // });
  //       });
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;
    const errors = {};
      let isFormValid = true;
      let message = '';
      
    if (this.state.user.email.trim().length === 0) {
        isFormValid = false;
        errors.email = 'Please provide your email address.';
      }
     if (this.state.user.password.trim().length === 0) {
        isFormValid = false;
        errors.password = 'Please provide your password.';
        } 
        if (!isFormValid) {
        message = 'Check the form for errors.';
        }
//console.log(isFormValid+errors.email)
localStorage.setItem('User', email);
if(isFormValid){
  axios.post('/auth/login', { email: email, password: password })
  .then(result => {
    //console.log('saved successfully'+result)
     this.props.router.push('/dashdb');
     localStorage.setItem('User', email);
    this.setState({      errors: {}    });
  }).catch((error) => {
          //  console.log("GGGG",error.response.data.errors)
          //  .data.errors.email
          //const errors = error.response.data.errors ? error.response.data.errors : {};
          //errors.summary = error.response.data.message;
         this.setState({errors })});  
          
             
}
else
{
//const errors = error.response.data.errors ? error.response.data.errors : {};
        //  errors.summary = errors.message;
         this.setState({errors });  
         errors.summary = errors.message;

}

    // create a string for an HTTP body message


    // create an AJAX request
    // const xhr = new XMLHttpRequest();
    // xhr.open('post', '/auth/login');
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xhr.responseType = 'json';
    // xhr.addEventListener('load', () => {
    //   if (xhr.status === 200) {
    //     // success

    //     // change the component-container state
    //     this.setState({
    //       errors: {}
    //     });
    //    // xhr.render('/index.html')
    //      //this.context.router.('/dashboard');
    //      this.props.router.push('/dashboard');
    //     console.log('The form is valid');
    //   } else {
    //     // failure

    //     // change the component state
    //     const errors = xhr.response.errors ? xhr.response.errors : {};
    //     errors.summary = xhr.response.message;

    //     this.setState({
    //       errors
    //     });
    //   }
    // });
    // xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;
