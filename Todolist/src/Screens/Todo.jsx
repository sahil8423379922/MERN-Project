import React from "react";
import style from "./CSS Modules/TodoCss.module.css";
import TodoItem from "./TodoItem";

export default function Todo({ todo }) {
  return (
    <>
      <div className={`${style.m}`}>
        <div>
          <h3 className={style.f}>Todo List</h3>
        </div>
        {todo.length == 0 ? (
          <div class="alert alert-danger" role="alert">
            No Todo Available
          </div>
        ) : (
          <table class="table   table-hover">
            <thead>
              <tr className="table-dark">
                <th scope="col">S.NO</th>
                <th scope="col">Title</th>
                <th scope="col">Desc</th>
                <th scope="col">Remark</th>
              </tr>
            </thead>
            <tbody>
              {todo.map((value, index) => {
                return <TodoItem value={value} index={index} />;
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
