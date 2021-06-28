import React from "react";
import SearchBar from "../../../components/search-bar/search-bar";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Switch, BrowserRouter } from "react-router-dom";
// import ReactTestUtils from "react-dom/test-utils";

afterEach(cleanup);

describe("For Access Screen", () => {
  jest.setTimeout(30000);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <SearchBar />
        </Switch>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("Input value", () => {
    it("updates on change", () => {
      const setSearch = jest.fn(() => {});

      const { queryByPlaceholderText } = render(<SearchBar setSearch={setSearch} />);

      const searchInput = queryByPlaceholderText("Search for products");

      fireEvent.change(searchInput, { target: { value: "test" } });

      expect(searchInput.value).toBe("test");
    });
  });
});
