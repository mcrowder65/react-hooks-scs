import React from "react";
import { withApiCall } from "./api-call";
import { withNetworkStatus } from "./network-status";
import { Button } from "../reusable/button";
import { BigText } from "../reusable/big-text";
import { Container } from "../reusable/container";
import { serverRequest } from "../server-request";

const Display = (props) => {
  const makeApiCall = () => {
    props.makeApiCall(async () => {
      await serverRequest();
    });
  };
  return (
    <Container>
      {props.isLoading ? <BigText>loading...</BigText> : null}
      {props.networkStatus === "online" && (
        <Button onClick={makeApiCall}>make api call</Button>
      )}
    </Container>
  );
};

export default withApiCall(withNetworkStatus(Display));
