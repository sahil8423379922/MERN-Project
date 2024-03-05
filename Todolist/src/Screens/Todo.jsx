import React from "react";
import style from "./CSS Modules/TodoCss.module.css";

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
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{value.title}</td>
                    <td>{value.desc}</td>
                    <td>{value.remark}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
