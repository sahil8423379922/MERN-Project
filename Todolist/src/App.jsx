import React, { useEffect, useState } from "react";
import Todo from "./Screens/Todo";
import AddTodo from "./Screens/AddTodo";

export default function App() {
  const [todoitem, addtodo] = useState([]);

  const childcall = (e) => {
    console.log(e.title);
    console.log(e.desc);
    console.log(e.remark);
    addtodo([...todoitem, e]);
  };

  // const todoitem = [
  //   {
  //     title: "Shopping",
  //     desc: "Go to Alpha Mall",
  //     remark: "shoping budget - 15k",
  //   },
  //   {
  //     title: "Food",
  //     desc: "Order Online",
  //     remark: "Biryani",
  //   },
  //   {
  //     title: "Food",
  //     desc: "Order Online",
  //     remark: "Biryani",
  //   },
  //   {
  //     title: "Food",
  //     desc: "Order Online",
  //     remark: "Biryani",
  //   },
  //   {
  //     title: "Food",
  //     desc: "Order Online",
  //     remark: "Biryani",
  //   },
  //   {
  //     title: "Food",
  //     desc: "Order Online",
  //     remark: "Biryani",
  //   },
  //   {
  //     title: "Food",
  //     desc: "Order Online",
  //     remark: "Biryani",
  //   },
  // ];

  return (
    <div>
      <AddTodo f={childcall} />
      <Todo todo={todoitem} />
    </div>
  );
}
