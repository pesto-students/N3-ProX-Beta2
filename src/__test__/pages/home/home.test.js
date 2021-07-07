import React from "react";
import Home from "../../../pages/home/home";
import ReactDOM from "react-dom";
import { render, act, cleanup } from "@testing-library/react";
import { Switch, BrowserRouter } from "react-router-dom";

afterEach(cleanup);

describe("For Access Screen", () => {
  jest.setTimeout(30000);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Home />
        </Switch>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should have Title in Home Screen", async () => {
    await act(async () => {
      const wrapped = render(
        <BrowserRouter>
          <Switch>
            <Home />
          </Switch>
        </BrowserRouter>
      );

      const title = wrapped.getByText("Buy 1, Get 3 Free");
      expect(title).not.toBeNull();
    });
  });
});
