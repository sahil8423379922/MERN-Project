import React, { useEffect, useState } from "react";
import QuoteCard from "./Quote";
import style from "./CSS/Quote.module.css";

export default function App() {
  const [color, setcolor] = useState("#0f0f0f");

  const handelclick = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    return randomColor;
  };

  useEffect(() => {
    setTimeout(() => {
      const color = handelclick();
      setcolor(color);
    }, 5000);
  });

  // useEffect(
  //   setTimeout(() => {
  //     // handelclick;
  //   }, 1000)
  // );
  return (
    <>
      <div
        className={style.root}
        style={{ backgroundColor: color, transition: "background-color 2s" }}
      >
        <QuoteCard />
      </div>
    </>
  );
}
