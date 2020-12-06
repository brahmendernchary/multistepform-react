import React from "react";

import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemText,
  IconButton,
  Button,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    firstName,
    lastName,
    nickName,
    address,
    city,
    state,
    zip,
    phone,
    email,
  } = formData;
  return (
    <Container maxWidth="xs">
      <h3>Review</h3>
      <RenderAccordion
        summary="Names"
        go={go}
        details={[
          { "First Name": firstName },
          { "Last Name": lastName },
          { "Nick Name": nickName },
        ]}
      />
      <RenderAccordion
        summary="Address"
        go={go}
        details={[
          { Address: address },
          { City: city },
          { State: state },
          { zip: zip },
        ]}
      />
      <RenderAccordion
        summary="Contact"
        go={go}
        details={[{ Phone: phone }, { Email: email }]}
      />
      <Button
        color="primary"
        variant="contained"
        style={{ marginTop: "1.5rem" }}
        onClick={() => go("submit")}
      >
        Submit
      </Button>
    </Container>
  );
};

export const RenderAccordion = ({ summary, details, go }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {summary}
      </AccordionSummary>
      <AccordionDetails>
        <div>
          {details.map((data, index) => {
            const objKey = Object.keys(data)[0];
            const objValue = data[Object.keys(data)[0]];

            return (
              <ListItemText
                key={index}
              >{`${objKey}: ${objValue}`}</ListItemText>
            );
          })}
          <IconButton
            color="primary"
            component="span"
            onClick={() => go(`${summary.toLowerCase()}`)}
          >
            <EditIcon />
          </IconButton>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
