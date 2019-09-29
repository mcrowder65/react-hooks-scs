import React from "react";
import { Button } from "../reusable/button";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";
import { serverRequest } from "../server-request";
export class ApiCall extends React.Component {
  state = {
    isLoading: false,
  };

  makeApiCall = async (yourApiCall) => {
    try {
      this.setState({ isLoading: true });
      await yourApiCall();
    } finally {
      this.setState({ isLoading: false });
    }
  };
  render() {
    return this.props.children({
      isLoading: this.state.isLoading,
      makeApiCall: this.makeApiCall,
    });
  }
}

const Display = () => {
  return (
    <ApiCall
      children={(props) => {
        const apiCall = async () => {
          await serverRequest();
        };
        return (
          <Container>
            {props.isLoading ? <Text>loading...</Text> : null}
            <Button onClick={() => props.makeApiCall(apiCall)}>
              Make Api Call!
            </Button>
          </Container>
        );
      }}
    />
  );
};

export default Display;
