import React from "react";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";

export const useNetworkStatus = () => {
  return { networkStatus: "implement me!" };
};

const Display = () => {
  const { networkStatus } = useNetworkStatus();
  return (
    <Container>
      <Text>Network status: {networkStatus}</Text>
    </Container>
  );
};

export default Display;
