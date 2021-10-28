import React from "react";
import { Button, Icon } from 'semantic-ui-react'
import { toast } from 'react-toastify';
import { deleteNote } from "../api/noteRequest";
 const DelNote= (props) => {
    const {id, callback} =props;

    const onClick = () => {
        deleteNote(id, callback)
    }

    return( 
        <Button icon iconPosition="left" negative onClick={onClick} > <Icon name="delete" ></Icon> delete</Button>  
    );
     
};
export default DelNote;