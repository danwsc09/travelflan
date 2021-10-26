import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import CreatePage from "./CreatePage";

describe("<CreatePage />", () => {
  test("matches the snapshot", () => {
    const utils = render(
      <MemoryRouter>
        <CreatePage />
      </MemoryRouter>
    );
    expect(utils.container).toMatchSnapshot();
  });

  test("renders the CreateAlbum page correctly", () => {
    const utils = render(
      <MemoryRouter>
        <CreatePage />
      </MemoryRouter>
    );
    utils.getByText("Create a new album");
  });
});
