import React from "react";
import { Button } from "../reusable/button";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";
import { serverRequest } from "../server-request";
export const useApiCall = () => {
  return { isLoading: false };
};

const Display = () => {
  const { isLoading, makeApiCall } = useApiCall(async () => {
    await serverRequest();
  });
  return (
    <Container>
      {isLoading && <Text>"loading..."</Text>}
      <Button onClick={makeApiCall}>Make Api Call!</Button>
    </Container>
  );
};

export default Display;
