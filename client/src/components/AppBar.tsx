import React from "react";
import { Box, Button, DropButton, Heading, Image } from "grommet";
import { Cart } from "grommet-icons";
import logo from "../assets/logo.png";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logout from "../components/Logout";
import SearchBar from "../components/SearchBar/SearchBar";
import { connect } from "react-redux";
import "../styles/AppBar.scss";

type Props = {
  isAuthenticated: boolean;
};

const AppBar = ({ isAuthenticated }: Props): JSX.Element => {
  let history = useHistory();

  const handleRenderRegister = () => {
    if (!isAuthenticated) {
      return (
        <Button
          type="reset"
          className="login-button"
          onClick={() => {
            history.push("/register");
          }}
        >
          <Heading level="4" color="text" className="navbar-header">
            Register
          </Heading>
        </Button>
      );
    } else {
      return;
    }
  };

  return (
    <Box
      tag="header"
      direction="row"
      width="100%"
      align="center"
      justify="between"
      background="white"
      pad={{ left: "medium", right: "medium", vertical: "small" }}
      className="appbar"
    >
      <SearchBar />
      <NavLink exact to="/">
        <Image src={logo} height="50px" />
      </NavLink>

      <Box
        direction="row"
        align="center"
        justify="end"
        className="right-appbar"
        gap="medium"
      >
        <NavLink exact to="/usergallery">
          <Heading level="4" color="text" className="navbar-header">
            User Gallery
          </Heading>
        </NavLink>

        {handleRenderRegister()}

        <Logout />
        {/* TODO: add logic for badge to check basket */}
        <Button
          onClick={() => {
            history.push("/login");
          }}
          className="badge"
          data-badge="6"
        >
          <Cart />
        </Button>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(AppBar);
