import React from "react";
import { Container, TextField, Button } from "@material-ui/core";

const Contact = ({ formData, setForm, navigation }) => {
  const { phone, email } = formData;
  return (
    <Container maxWidth="xs">
      <h3>Contact</h3>
      <TextField
        label="phone"
        name="phone"
        onChange={setForm}
        value={phone}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="email"
        name="email"
        onChange={setForm}
        value={email}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default Contact;
