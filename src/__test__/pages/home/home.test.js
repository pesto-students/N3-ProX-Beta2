import React from "react";
import Home from "../../../pages/home/home";
import ReactDOM from "react-dom";
import { render, act, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("For Access Screen", () => {
  jest.setTimeout(30000);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should have Title in Home Screen", async () => {
    await act(async () => {
      const wrapped = render(<Home />);

      const title = wrapped.getByText("Buy 1, Get 3 Free");
      expect(title).not.toBeNull();
    });
  });
});
