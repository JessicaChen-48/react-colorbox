import React from "react";
import { render, fireEvent, debug } from "@testing-library/react";
import BoxList from "./BoxList";
import Box from "./Box.js";
import NewBoxForm from "./NewBoxForm.js"



it("Box smoke test", function () {
  render(<Box />);
});

it("Box snapshot test", function() {
  let box = { width: "100px",
    height: "100px",
    backgroundColor: "black"
  };

  const {container} = render(<Box {...box}/>);
  expect(container).toMatchSnapshot();

});

it("NewBoxForm smoke test", function () {
  render(<NewBoxForm />)
});

it("NewBoxForm snapshot test", function() {
  const {container} = render(<NewBoxForm />);
  expect(container).toMatchSnapshot();
});

it("BoxList smoke test", function () {
  render(<BoxList />)
});

it("BoxList snapshot test", function() {
  const {container} = render(<BoxList />);
  expect(container).toMatchSnapshot();
});

it("NewBoxForm correctly changes and submits form", function() {
  const {container, getByLabelText, queryByText, debug} = render(<BoxList />);

  expect(container.querySelector(".box")).not.toBeInTheDocument();

  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const colorInput = getByLabelText('Background Color:');
  const submitButton = queryByText('SUBMIT');

  fireEvent.change(widthInput, {target: {value: "100"}});
  fireEvent.change(heightInput, {target: {value: "200"}});
  fireEvent.change(colorInput, {target: {value: "green"}});

  expect(widthInput.value).toEqual("100");
  expect(heightInput.value).toEqual("200");
  expect(colorInput.value).toEqual("green");

  fireEvent.click(submitButton);
  expect(container.querySelector(".box")).toBeInTheDocument();


  expect(container.querySelector(".box").getAttribute('style'))
    .toEqual("width: 100px; height: 200px; background-color: green;");
});

it("NewBoxForm validates height and width on submit", function() {
  const {container, getByLabelText, queryByText} = render(<BoxList />);

  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const colorInput = getByLabelText('Background Color:');
  const submitButton = queryByText('SUBMIT');

  fireEvent.change(widthInput, {target: {value: "hello"}});
  fireEvent.change(heightInput, {target: {value: "bye"}});
  fireEvent.change(colorInput, {target: {value: "green"}});

  fireEvent.click(submitButton);

  expect(widthInput.value).toEqual("Invalid Width!");
  expect(heightInput.value).toEqual("Invalid Height!");
  expect(colorInput.value).toEqual("green");
});


it("BoxList automatically makes steelblue color box if no color submitted", function() {
  const {container, getByLabelText, queryByText} = render(<BoxList />);

  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const colorInput = getByLabelText('Background Color:');

  const submitButton = queryByText('SUBMIT');

  fireEvent.change(widthInput, {target: {value: "100"}});
  fireEvent.change(heightInput, {target: {value: "100"}});
  fireEvent.change(colorInput, {target:{value:"fdalskjfakl;ds"}});

  fireEvent.click(submitButton);

  expect(container.querySelector(".box").getAttribute('style'))
  .toEqual("width: 100px; height: 100px;");

})

it("BoxList properly removes box if button clickd", function() {
  const {container, getByLabelText, queryByText} = render(<BoxList />);

  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const colorInput = getByLabelText('Background Color:');

  const submitButton = queryByText('SUBMIT');

  fireEvent.change(widthInput, {target: {value: "100"}});
  fireEvent.change(heightInput, {target: {value: "200"}});
  fireEvent.change(colorInput, {target: {value: "green"}});

  fireEvent.click(submitButton);

  const removeButton = queryByText('REMOVE THE BOX');

  fireEvent.click(removeButton);

  expect(container.querySelector(".box")).not.toBeInTheDocument();

})



