import React from "react";

import { render } from "../../../test/utils";
import NetworkStatusHOC from "../network-status";

test("it renders", () => {
  render(<NetworkStatusHOC />);
});
