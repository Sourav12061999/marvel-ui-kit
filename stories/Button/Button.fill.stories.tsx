import { Button } from "../../src";
import React from "react";
import "./Button.css";
export default {
  title: "Button/fill",
  component: Button,
};

export const Warning = () => (
  <>
    <Button type="fill" color="warning">
      Button
    </Button>
  </>
);

export const Primary = () => (
  <>
    <Button type="fill" color="primary">
      Button
    </Button>
  </>
);

export const Secondary = () => (
  <>
    <Button type="fill" color="secondary">
      Button
    </Button>
  </>
);

export const Danger = () => (
  <>
    <Button type="fill" color="danger">
      Button
    </Button>
  </>
);

export const Custom = () => (
  <>
    <Button className="button" type="fill" color="danger">
      Button
    </Button>
  </>
);
