import React from "react";

import { render } from "../../../test/utils";
import Outer from "../children";

test("it renders", () => {
  render(<Outer />);
});
