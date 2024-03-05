import React from "react";
import Todo from "./Screens/Todo";
import AddTodo from "./Screens/AddTodo";

export default function App() {
  const todoitem = [
    {
      title: "Shopping",
      desc: "Go to Alpha Mall",
      remark: "shoping budget - 15k",
    },
    {
      title: "Food",
      desc: "Order Online",
      remark: "Biryani",
    },
    {
      title: "Food",
      desc: "Order Online",
      remark: "Biryani",
    },
    {
      title: "Food",
      desc: "Order Online",
      remark: "Biryani",
    },
    {
      title: "Food",
      desc: "Order Online",
      remark: "Biryani",
    },
    {
      title: "Food",
      desc: "Order Online",
      remark: "Biryani",
    },
    {
      title: "Food",
      desc: "Order Online",
      remark: "Biryani",
    },
  ];

  return (
    <div>
      <AddTodo />
      <Todo todo={todoitem} />
    </div>
  );
}
