import React from "react";
import Slider from "../../../components/carousel/Slider";
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
          <Slider />
        </Switch>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should have `Mid Year Sale!!` text in slider page", async () => {
    await act(async () => {
      const wrapped = render(
        <BrowserRouter>
          <Switch>
            <Slider />
          </Switch>
        </BrowserRouter>
      );

      const title = wrapped.getByText("Mid Year Sale!!");
      expect(title).not.toBeNull();
    });
  });
});
