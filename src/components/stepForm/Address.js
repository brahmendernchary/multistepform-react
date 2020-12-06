import React from "react";
import { Container, TextField, Button } from "@material-ui/core";

const Address = ({ formData, setForm, navigation }) => {
  const { address, city, state, zip } = formData;
  return (
    <Container maxWidth="xs">
      <h3>Address</h3>
      <TextField
        label="address"
        name="address"
        onChange={setForm}
        value={address}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="city"
        name="city"
        onChange={setForm}
        value={city}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="state"
        name="state"
        onChange={setForm}
        value={state}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="zip"
        name="zip"
        type="number"
        onChange={setForm}
        value={zip}
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

export default Address;
