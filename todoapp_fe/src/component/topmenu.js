import React from "react";
import { withRouter } from "react-router-dom";
import { Menu, Button, Dropdown, Input } from "semantic-ui-react";
import { deleteUser } from "../api/userRequest";

const TopMenu = (props) => {
  const { history } = props;
  const { push } = history;
  const product = props;

  const goNotes = () => {
    push({
      pathname: "/pages/notes",
    });
  };
  const goNewNote = () => {
    push({
      pathname: "/pages/createNewNote",
    });
  };
  const goUpdateUser = () => {
    push({
      pathname: "/pages/updateUser",
    });
  };
  const goDeleteUser = () => {
    deleteUser(push);
  };
  const logout = () => {
    window.localStorage.clear();
    push({
      pathname: "/",
    });
  };

  return (
    <Menu attached="top">
      <Menu.Menu>
        <Menu.Item position="left">
          <Button primary onClick={goNotes}>
            Notes
          </Button>
        </Menu.Item>

        <Menu.Item position="left">
          <Button primary onClick={goNewNote}>
            Create New Note
          </Button>
        </Menu.Item>
      </Menu.Menu>

      <Menu.Menu position="right">
        <Menu.Item>
          <Dropdown text="account">
            <Dropdown.Menu>
              <Dropdown.Item text="Update account" onClick={goUpdateUser} />
              <Dropdown.Item text="Delete account" onClick={goDeleteUser} />
              <Dropdown.Divider />
              <Dropdown.Item icon="x" text="Logout" onClick={logout} />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default withRouter(TopMenu);
