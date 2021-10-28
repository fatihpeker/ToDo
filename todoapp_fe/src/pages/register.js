import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import Input from "../component/Input";
import { singUp } from "../api/authRequest";
import Singupin from "../component/singupin";
import {
  Form,
  Button,
  Header,
  Grid,
  GridColumn,
  Divider,
  Segment
} from "semantic-ui-react";

const Register = (props) => {
  const [usernamePassword,setUsernamePassword] = useState({username:"",password:"",passwordRepeat:""});
  const [usernamePasswordError, setUsernamePasswordError] = useState({username:null, password:null, passwordRepeat:null})

  const handleChange = (event)=>{
    const { name,value } = event.target;
    setUsernamePassword({...usernamePassword, [name]:value});
  }

  
  const handleSubmit = (event) =>{
    event.preventDefault();
    const { username, password,passwordRepeat } = usernamePassword; 
    const { history } = props;
    const { push } = history;
    if (username.length <3){
      setUsernamePasswordError({ ...usernamePasswordError ,username:"please enter a username witch characters more then 3"});
      return;
    }else{
      setUsernamePasswordError({ ...usernamePasswordError ,username:null});
    }
    if(password.length < 3){
      setUsernamePasswordError({ ...usernamePasswordError ,password:"please enter a username witch characters more then 3"});
      return;
    }
    else{
      setUsernamePasswordError({ ...usernamePasswordError ,password:null});
    }
    if(password !== passwordRepeat){
      setUsernamePasswordError({...usernamePasswordError, password: "password missmatch", passwordRepeat: "password missmatch"})
      return;
    }
    else{
      setUsernamePasswordError({...usernamePasswordError, password:null , passwordRepeat:null })
    }
    
    singUp(username,password,push)
  }

  return (
    <div>
      <Singupin></Singupin>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <GridColumn style={{ maxWidth: 450 }}>
        <Header as='h1' color="blue" textAlign='center'>
          Sing Up
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked  >
            <Input type="text" name="username" label="Username" placeholder="Username" required="true" value={usernamePasswordError.username} onChange={handleChange} error={usernamePasswordError.username} />
            <Input type="password" name="password" label="Password" placeholder="Password" required="true" value={usernamePassword.password} onChange={handleChange} error={usernamePasswordError.password} />
            <Input type="password" name="passwordRepeat" label="Password Repeat" placeholder="Password Repeat" required="true" value={usernamePassword.passwordRepeat} onChange={handleChange} error={usernamePasswordError.passwordRepeat} />
            <Button type="submit" color="blue" size="large" >Submit</Button>
          </Segment>
        </Form>
        <Divider />
        <p>
          Do you have an account? <Link to="/pages/Login">Login</Link>
        </p>
      </GridColumn>
    </Grid>
    </div>
  );
  
}

export default withRouter(Register);
