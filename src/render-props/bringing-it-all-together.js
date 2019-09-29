import React from "react";
import { NetworkStatus } from "./network-status";
import { ApiCall } from "./api-call";
import { Button } from "../reusable/button";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";
import { serverRequest } from "../server-request";

const Display = () => {
  return (
    <NetworkStatus
      children={(extraProps) => {
        return (
          <ApiCall
            children={(moreExtraProps) => {
              const apiCall = () =>
                moreExtraProps.makeApiCall(async () => {
                  await serverRequest();
                });
              return (
                <Container>
                  {moreExtraProps.isLoading && <Text>loading</Text>}
                  {extraProps.networkStatus === "online" && (
                    <Button onClick={apiCall}>Make api call!</Button>
                  )}
                </Container>
              );
            }}
          />
        );
      }}
    />
  );
};

export default Display;
