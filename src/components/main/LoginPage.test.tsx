import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import LoginPage from "./LoginPage";

describe("<LoginPage />", () => {
  test("matches the snapshot", () => {
    const utils = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    expect(utils.container).toMatchSnapshot();
  });

  test("renders the login page correctly", () => {
    const utils = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    utils.getByText("Login");
  });
});
