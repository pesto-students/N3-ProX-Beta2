import React from "react";
import Header from "../../../../components/header/mobile/header";
import ReactDOM from "react-dom";
import { render, act, cleanup } from "@testing-library/react";
import { Switch, BrowserRouter } from "react-router-dom";

afterEach(cleanup);

describe("For Access Screen", () => {
  jest.setTimeout(30000);

  it("renders without crashing", () => {
    const div = document.createElement("dic");
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Header />
        </Switch>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should have `Home` text in header", async () => {
    await act(async () => {
      const wrapped = render(
        <BrowserRouter>
          <Switch>
            <Header />
          </Switch>
        </BrowserRouter>
      );

      const title = wrapped.getByText("Home");
      expect(title).not.toBeNull();
    });
  });
});
