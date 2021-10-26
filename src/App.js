import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React",
    content: "React is a front end javascript framework",
  },
  {
    title: "why React",
    content: "React is a popular and has a good community",
  },
  {
    title: "How to React",
    content: "You use React by making components",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
