import React from "react";
import style from "./CSS Modules/TodoCss.module.css";

export default function AddTodo() {
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
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Desc"
                />
              </div>
              <div className="col-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Remark"
                />
              </div>
            </div>

            <button
              class="btn  btn btn-outline-success mt-4 px-5"
              type="button"
            >
              Add Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
