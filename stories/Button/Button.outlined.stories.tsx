import { Button } from "../../src";
import React from "react";
import "./Button.css";
export default {
  title: "Button/outlined",
  component: Button,
};

export const Warning = () => (
  <>
    <Button type="outlined" color="warning">
      Button
    </Button>
  </>
);

export const Primary = () => (
  <>
    <Button type="outlined" color="primary">
      Button
    </Button>
  </>
);

export const Secondary = () => (
  <>
    <Button type="outlined" color="secondary">
      Button
    </Button>
  </>
);

export const Danger = () => (
  <>
    <Button type="outlined" color="danger">
      Button
    </Button>
  </>
);

export const Custom = () => (
    <>
      <Button className="button" type="outlined" color="danger">
        Button
      </Button>
    </>
  );
