import React from "react";
import ResetPassword from "../../../pages/reset-password/reset-password";
import ReactDOM from "react-dom";
import { render, act, cleanup } from "@testing-library/react";
import { Switch, BrowserRouter } from "react-router-dom";

afterEach(cleanup);

jest.mock("../../../contexts/auth-context", () => ({
  useAuth: () => ({
    resetPassword: "0",
  }),
}));

describe("For Access Screen", () => {
  jest.setTimeout(30000);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <ResetPassword />
        </Switch>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should have Forgot password? in forgot password page", async () => {
    await act(async () => {
      const wrapped = render(
        <BrowserRouter>
          <Switch>
            <ResetPassword />
          </Switch>
        </BrowserRouter>
      );

      const title = wrapped.getByText("Forgot password?");
      expect(title).not.toBeNull();
    });
  });
});
