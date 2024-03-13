import React, { useState } from "react";
import style from "./CSS Modules/TodoCss.module.css";

export default function AddTodo(props) {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [remark, setremark] = useState("");

  const todoData = {
    title: title,
    desc: desc,
    remark: remark,
  };
  console.log(todoData);
  return (
    <div className={`mb-5 mt-5 ${style.m}`}>
      <div className="card">
        <div className="card-body">
          <div>
            <h3 className={style.f}>Add Todo</h3>
            <div className="row">
              <div className="col-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Title"
                  value={title}
                  onChange={(event) => {
                    settitle(event.target.value);
                  }}
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Desc"
                  value={desc}
                  onChange={(e) => {
                    setdesc(e.target.value);
                  }}
                />
              </div>
              <div className="col-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Remark"
                  value={remark}
                  onChange={(e) => {
                    setremark(e.target.value);
                  }}
                />
              </div>
            </div>

            <button
              class="btn  btn btn-outline-success mt-4 px-5"
              type="button"
              onClick={(event) => {
                props.f(todoData);
                settitle("");
                setdesc("");
                setremark("");
              }}
            >
              Add Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
