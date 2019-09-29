import React from "react";
import { Container } from "../reusable/container";
import { BigText } from "../reusable/big-text";

const person = { firstName: "Matt", lastName: "Crowder" };
const Display = () => {
  const firstName = person.firstName;
  const lastName = person.lastName;
  return (
    <Container>
      <BigText>
        {firstName} {lastName}
      </BigText>
    </Container>
  );
};

export default Display;
