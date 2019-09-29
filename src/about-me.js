import React from "react";
import { Li } from "./reusable/li";
import { Container } from "./reusable/container";
import { Text } from "./reusable/text";

const AboutMe = () => {
  const slidesLink = "https://reacthooksscs.netlify.com";
  return (
    <Container flexDirection="column">
      <Text>
        Slides available at{" "}
        <a href={slidesLink} rel="noopener noreferrer" target="_blank">
          {slidesLink}
        </a>
      </Text>
      <h1 style={{ fontWeight: "normal" }}>
        <ul>
          <Li>mcrowder65.com</Li>
          <Li>Thinkster author</Li>
          <Li>Wife and dog</Li>
          <Li>NoVaJS co organizer</Li>
          <Li>
            Things I enjoy:
            <ul>
              <Li>lifting</Li>
              <Li>running</Li>
            </ul>
          </Li>
        </ul>
      </h1>
    </Container>
  );
};

export default AboutMe;
