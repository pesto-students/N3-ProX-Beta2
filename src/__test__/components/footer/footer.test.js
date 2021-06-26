import React from "react";
import Footer from "../../../components/footer/footer";
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
          <Footer />
        </Switch>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should have `About Us` text in footer", async () => {
    await act(async () => {
      const wrapped = render(
        <BrowserRouter>
          <Switch>
            <Footer />
          </Switch>
        </BrowserRouter>
      );

      const title = wrapped.getByText("About Us");
      expect(title).not.toBeNull();
    });
  });
});
