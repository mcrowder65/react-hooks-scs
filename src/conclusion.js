import React from "react";
import { Container } from "./reusable/container";
import image from "./34d1vu.jpg";
import { Text } from "./reusable/text";

const Conclusion = () => {
  const url = "https://reacthooksscs.netlify.com";
  return (
    <Container flexDirection="column">
      <Text>
        Slides available at <a href={url}>{url}</a>
      </Text>
      <img src={image} alt="funny meme" title="made at imgflip.com" />
    </Container>
  );
};

export default Conclusion;
