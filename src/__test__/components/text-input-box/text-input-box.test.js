import React from "react";
import TextInputBox from "../../../components/text-input-box/text-input-box";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Switch, BrowserRouter } from "react-router-dom";

afterEach(cleanup);

describe("For Access Screen", () => {
  jest.setTimeout(30000);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <TextInputBox />
        </Switch>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("Input value", () => {
    it("Make sure inputted text is shorter than max length", function () {
      const result = mount(<Input maxLength={10}></Input>);
      let input = result.find("input");
      TestUtils.Simulate.change(input, { target: { value: "abcdefghijk" } });
      expect(result.state().value).to.equal("abcdefghij");
    });
  });
});
