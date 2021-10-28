import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import Input from "../component/Input";
import { updateUser } from "../api/userRequest";
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
  const [nameSurname,setNameSurname] = useState({name:"",surname:""});
  const [nameSurnameError, setNameSurnameError] = useState({username:null, password:null, passwordRepeat:null})

  const handleChange = (event)=>{
    const { name,value } = event.target;
    setNameSurname({...nameSurname, [name]:value});
  }

  
  const handleSubmit = (event) =>{
    event.preventDefault();
    const { name, surname } = nameSurname; 
    const { history } = props;
    const { push } = history;
    if (name.length <3){
      setNameSurname({ ...nameSurnameError ,name:"please enter a username witch characters more then 3"});
      return;
    }else{
      setNameSurnameError({ ...nameSurnameError ,name:null});
    }
    if(surname.length < 2){
      setNameSurnameError({ ...nameSurnameError ,surname:"please enter a username witch characters more then 2"});
      return;
    }
   
    
    updateUser(nameSurname,push)
  }

  return (
    <div>
      <Singupin></Singupin>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <GridColumn style={{ maxWidth: 450 }}>
        <Header as='h1' color="blue" textAlign='center'>
          Update Properties
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked  >
            <Input type="text" name="name" label="Name" placeholder="Name" required="true" value={nameSurname.name} onChange={handleChange} error={nameSurnameError.name} />
            <Input type="text" name="surname" label="Surname" placeholder="Surname" required="true" value={nameSurname.password} onChange={handleChange} error={nameSurnameError.password} />
             <Button type="submit" color="blue" size="large" >Submit</Button>
          </Segment>
        </Form>
      </GridColumn>
    </Grid>
    </div>
  );
  
}

export default withRouter(Register);
