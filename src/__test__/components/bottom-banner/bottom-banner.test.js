import React from "react";
import BottomBanner from "../../../components/bottom-banner/bottom-banner";
import ReactDOM from "react-dom";
import { render, act, cleanup } from "@testing-library/react";
import { Switch, BrowserRouter } from "react-router-dom";

jest.mock("../../../contexts/auth-context", () => ({
  useAuth: () => ({
    currentUser: "0",
  }),
}));

jest.mock("../../../contexts/cart-state-provider", () => ({
  useStateValue: () => [{ cart: [] }],
}));

afterEach(cleanup);

describe("For Access Screen", () => {
  jest.setTimeout(30000);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <BottomBanner />
        </Switch>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should have `Kurtas at 60% off.` text", async () => {
    await act(async () => {
      const wrapped = render(
        <BrowserRouter>
          <Switch>
            <BottomBanner />
          </Switch>
        </BrowserRouter>
      );

      const title = wrapped.getByText("Channel Your Roots, Kurtas at 60% off.");
      expect(title).not.toBeNull();
    });
  });
});
