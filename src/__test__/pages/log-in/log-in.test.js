import React from "react";
import LogIn from "../../../pages/log-in/login";
import ReactDOM from "react-dom";
import { render, act, cleanup } from "@testing-library/react";
import { Switch, BrowserRouter } from "react-router-dom";

afterEach(cleanup);

jest.mock("../../../contexts/auth-context", () => ({
  useAuth: () => ({
    login: "0",
  }),
}));

describe("For Access Screen", () => {
  jest.setTimeout(30000);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <LogIn />
        </Switch>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should have welcome text in LogIn page", async () => {
    await act(async () => {
      const wrapped = render(
        <BrowserRouter>
          <Switch>
            <LogIn />
          </Switch>
        </BrowserRouter>
      );

      const title = wrapped.getByText("Hello Again!");
      expect(title).not.toBeNull();
    });
  });
});
