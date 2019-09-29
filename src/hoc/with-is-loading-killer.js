import React from "react";

export const isLoadingKiller = (YourComponent) => {
  return class extends React.Component {
    render() {
      return <YourComponent {...this.props} isLoading={true} />;
    }
  };
};
