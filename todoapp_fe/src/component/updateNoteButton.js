import React  from "react";
import {withRouter} from "react-router-dom";
import { Button } from 'semantic-ui-react'


 const UpdateProduct= (props) => {
    const {id} = props;
    const {history} = props;
    const {push} = history;


    const onClick = () => {
        push({
            pathname:"/pages/createNewNote",
            state: {id: id}
        })
    }

    return( 
        <Button primary onClick={onClick} >update</Button>  
    );
     
}

export default withRouter(UpdateProduct);