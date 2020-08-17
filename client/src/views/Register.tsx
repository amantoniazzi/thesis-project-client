import React from "react";
import { Box, Button, Heading, Grommet } from "grommet";
import AppBar from "../components/AppBar";
import { Notification } from "grommet-icons";

import { connect } from "react-redux";
import { inputName, submitName } from "../actions";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function onSubmit(e) {
  e.preventDefault();
  submitName(name);
}

function Register() {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          Hello Grommet!
          <Heading level="3" margin="none">
            Register page
          </Heading>
          <Button icon={<Notification />} onClick={() => {}} />
        </AppBar>
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box flex align="center" justify="center">
            <form action="" onSubmit={onSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                onChange={(e) => inputName(e.target.value)}
                value={name}
              />
              <button>Submit</button>
            </form>
          </Box>
          <Box
            width="medium"
            background="light-2"
            elevation="small"
            align="center"
            justify="center"
          >
            sidebar
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

interface RegisterState {
  name: string
}
function mapStateToProps(state: RegisterState) {
  return { name: state.name };
}

const mapDispatch = {
  inputName: () => ({ type: 'INPUT_NAME' }),
  submitName: () => ({ type: 'SUBMIT_NAME' })
}

export default connect(mapStateToProps, mapDispatch)(Register);
