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
    it("updates on change", () => {
      const setSearch = jest.fn(() => {});

      const { queryByPlaceholderText } = render(<TextInputBox setSearch={setSearch} placeholder="abc" />);

      const searchInput = queryByPlaceholderText("abc");

      fireEvent.change(searchInput, { target: { value: "test" } });

      expect(searchInput.value).toBe("test");
    });
  });
});
