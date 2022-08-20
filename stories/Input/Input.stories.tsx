import { Input } from "../../src";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
export default {
  title: "Input",
  component: Input,
};

export const Default = () => <Input placeholder="Very Important" />;

export const StartIcon = () => (
  <Input
    startComponent={<BsFillTelephoneFill size={"20px"} />}
    placeholder="Very Important"
  />
);

export const EndIcon = () => (
    <Input
      endComponent={<BsFillTelephoneFill size={"20px"} />}
      placeholder="Very Important"
    />
);

export const Label = () => (
    <Input
    label="Name:-"
      endComponent={<BsFillTelephoneFill size={"20px"} />}
      placeholder="Very Important"
    />
);

export const Required = () => (
  <Input
  label="Name:-"
  required={true}
    endComponent={<BsFillTelephoneFill size={"20px"} />}
    placeholder="Very Important"
  />
);

export const Error = () => (
  <Input
  label="Name:-"
  required={true}
    endComponent={<BsFillTelephoneFill size={"20px"} />}
    placeholder="Very Important"
    isError={true}
    errorMsg="Some error occoured"
  />
);