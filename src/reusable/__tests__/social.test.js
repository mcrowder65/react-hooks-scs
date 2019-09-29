import React from "react";
import { Twitter, GitHub } from "../social";
import { render } from "@testing-library/react";

test("that twitter renders", () => {
  render(<Twitter />);
});

test("that github renders", () => {
  render(<GitHub />);
});
