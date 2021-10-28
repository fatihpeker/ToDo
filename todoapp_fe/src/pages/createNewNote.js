import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import Input from "../component/Input";
import { createNewNote } from "../api/noteRequest";
import TopMenu from "../component/topmenu";
import {
  Form,
  Button,
  Header,
  Grid,
  GridColumn,
  Divider,
  TextArea,
  Segment,
  Label
} from "semantic-ui-react";

const NewNote = (props) => {
  const [titleDescription,setTitleDescription] = useState({id:null,title:"",notes:""});
  const [titleDescriptionError, seTtitleDescriptionError] = useState({title:null, notes:null})

  const handleChange = (event)=>{
    const { name,value } = event.target;
    setTitleDescription({...titleDescription, [name]:value});
  }

  
  const handleSubmit = (event) =>{
    event.preventDefault();
    if (titleDescription.title.length==0 && titleDescription.description.length==0){
      seTtitleDescriptionError({ ...titleDescriptionError ,title:"please enter a title",notes:"please enter a description"});
      return;
    }else{
      seTtitleDescriptionError({ ...titleDescriptionError ,title:null,notes:null});
    }
    
    if(props.location.state!==undefined){
      const updateNote = {...titleDescription,id:props.location.state.id}
      setTitleDescription({titleDescription:updateNote});
      createNewNote(updateNote);
    }
    else{
      createNewNote(titleDescription)
    }
    
    //createNewNote(title,description,push)
  }

  return (
    <div>
    <TopMenu></TopMenu>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <GridColumn style={{ maxWidth: 450 }}>
        <Header as='h1' color="blue" textAlign='center'>
         Note
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked  >
            <Input type="text" name="title" label="Title" placeholder="Title" required="false" value={titleDescription.title} onChange={handleChange} error={titleDescriptionError.title} />
            <Label>Description</Label>
            <TextArea  rows={5} name="notes"  required="false" value={titleDescription.notes} onChange={handleChange} error={titleDescriptionError.notes} />
            <Button type="submit" color="blue" size="large" >Submit</Button>
          </Segment>
        </Form>
      </GridColumn>
    </Grid>
    </div>
  );
  
}

export default withRouter(NewNote);
