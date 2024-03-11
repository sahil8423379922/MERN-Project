import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const dataToPass = { name: "John Doe", age: 25 };
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Sahil Jaiswal
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>

              <Link
                class="nav-link active"
                to={{ pathname: "/project", state: { id: 123 } }}
              >
                Go to Project
              </Link>

              <Link class="nav-link active" aria-current="page" to="/contact">
                Contact US
              </Link>
              <Link
                class="nav-link active"
                aria-current="page"
                to="/blog?title=Information Tehnology"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
