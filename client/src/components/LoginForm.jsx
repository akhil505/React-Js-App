import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {fullWhite} from 'material-ui/styles/colors';
import done from 'material-ui/svg-icons/action/done';


const style = {
  margin: 12,
};

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
<div>
  <Card className="divStyle">
    <form action="/" onSubmit={onSubmit}  >
      <h2 className="card-heading">Login</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Log in" primary />
      </div>
 <div className="button-line">
       {/*<FlatButton
      href="https://github.com/callemall/material-ui"
      target="_blank"
      secondary={true}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
      style={style}
    />

     <FlatButton
      icon={<ActionAndroid />}
      style={style}
      icon={ <ActionAndroid color={fullWhite} />}
    />*/}
    {/*<FlatButton
      backgroundColor="#a4c639"
      hoverColor="#8AA62F"
      
      icon={ <done color={fullWhite} />}
      
      style={style}
      type="submit" 
    />*/}
  </div>
      {/*<CardText>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>*/}
    </form>
  </Card>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
