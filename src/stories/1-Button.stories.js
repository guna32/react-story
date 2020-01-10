import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../components/button";

export default {
  component: Button,
  title: "Button",
  excludeStories: /.*Data$/
};

export const actionData = {
  onClick: action("props.onClick")
};

export const addOnButton = () => {
  return (
    <div onClick={actionData.onClick} className="button">
      AddOn
    </div>
  );
};
