import React from "react";
import SignUp from "../../../pages/sign-up/sign-up";
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
          <SignUp />
        </Switch>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should have `Creat an Account` text in sign-up page", async () => {
    await act(async () => {
      const wrapped = render(
        <BrowserRouter>
          <Switch>
            <SignUp />
          </Switch>
        </BrowserRouter>
      );

      const title = wrapped.getByText("Creat an Account");
      expect(title).not.toBeNull();
    });
  });
});
