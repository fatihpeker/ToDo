import { withRouter } from "react-router"
import { Container, Divider } from "semantic-ui-react"
import Singupin from "../component/singupin";

const MainPage = (props) => {

    return(
        <div>

            <Singupin></Singupin>
            <Divider></Divider>
            <Container>
                <b>To-Do</b>
                <Divider></Divider>
                <p>About the app</p>
            </Container>

        </div>
    )
}

export default withRouter(MainPage)
