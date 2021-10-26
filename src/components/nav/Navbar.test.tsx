import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import Navbar from "./Navbar";

describe("<Navbar />", () => {
  test("matches the snapshot", () => {
    const utils = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(utils.container).toMatchSnapshot();
  });

  test("renders the navbar", () => {
    const utils = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    utils.getByText("Home");
  });
});
