import React from "react";
import Header from "../../../components/header/header";
import ReactDOM from "react-dom";
import { render, act, cleanup } from "@testing-library/react";
import { Switch, BrowserRouter } from "react-router-dom";

jest.mock("../../../contexts/auth-context", () => ({
  useAuth: () => ({
    currentUser: "0",
  }),
}));

afterEach(cleanup);

describe("For Access Screen", () => {
  jest.setTimeout(30000);

  it("renders without crashing", () => {
    const div = document.createElement("div");
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

  it("Should have `Cart` text in header", async () => {
    await act(async () => {
      const wrapped = render(
        <BrowserRouter>
          <Switch>
            <Header />
          </Switch>
        </BrowserRouter>
      );

      const title = wrapped.getByText("Cart");
      expect(title).not.toBeNull();
    });
  });
});
