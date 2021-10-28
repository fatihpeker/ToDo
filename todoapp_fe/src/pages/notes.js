import React from "react";
import { withRouter } from "react-router-dom";
import { Grid, GridColumn, Table, Label,Header ,Icon, Button } from "semantic-ui-react";
import fetch from 'isomorphic-fetch';
import { toast } from 'react-toastify';
import TopMenu from '../component/topmenu'
import DelNote from "../component/deleteNoteButton";
import UpdateNoteButton from "../component/updateNoteButton";



class NoteBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    this.getNotes();
  }
  getNotes = () => {
    const token = window.localStorage.getItem("token");
    fetch("http://localhost:8080/api/1.0/note/getAll" , {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    })
      .then((r) => {
        if (r.ok) {
            console.log(r);
          return r;
        }
        if (r.status === 401 || r.status === 403 || r.status === 500) {
          return Promise.reject(new Error("Bir hata oluştu"));
        }
        return Promise.reject(new Error("Bilinmeyen bir hata oluştu"));
      })
      .then(async (r) => {
        const response = await r.json();
        console.log(response);
        this.setState({ notes: response });
        toast.info(response);
        //toast.info(`${response.totalElements} fetched succes`);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  

  render() {
    return (
      <div>
        <TopMenu/>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
        columns="equal"
      >
        <GridColumn>
        <Header as='h2' icon textAlign='center'>
      <Icon name='address book' circular />
      <Header.Content>NoteBook</Header.Content>
    </Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Index</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.state.notes &&
                this.state.notes.map((value, index) => {
                  return (
                    <Table.Row>
                      <Table.Cell>
                        <Label ribbon> {(index + 1)}</Label>
                        <DelNote callback={this.getNotes} id={value.id} ></DelNote>
                        <UpdateNoteButton id={value.id} ></UpdateNoteButton>
                      </Table.Cell>
                      <Table.Cell>{value.title}</Table.Cell>
                      <Table.Cell>{value.notes}</Table.Cell>
                    </Table.Row>
                  );
                })}
            </Table.Body>
          </Table>
        </GridColumn>
      </Grid>
      </div>
    );
  }
}

export default withRouter(NoteBook);
