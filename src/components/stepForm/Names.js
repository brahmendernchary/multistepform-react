import React from "react";

import { Container, TextField, Button } from "@material-ui/core";
const Names = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, nickName } = formData;
  return (
    <div>
      <Container maxWidth="xs">
        <h3>Name</h3>
        <TextField
          label="first name"
          name="firstName"
          onChange={setForm}
          value={firstName}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="last name"
          name="lastName"
          value={lastName}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="nick name"
          name="nickName"
          value={nickName}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <Button
          variant="contained"
          fullWidth
          color="primary"
          style={{ marginTop: "1rem" }}
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </Container>
    </div>
  );
};

export default Names;
