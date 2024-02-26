import React from "react";

export default function Dashboard() {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row mt-4 ">
              <div className="col-8">
                <h2>About Myself</h2>
                <p className="fs-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
                  perspiciatis quod, hic nostrum necessitatibus aut placeat
                  animi tempora ipsa odit inventore adipisci nulla, obcaecati
                  modi ab atque dignissimos sapiente fugiat.
                </p>
                <a
                  href="https://www.linkedin.com/in/sahil-jaiswal-6686a9203/"
                  type="button"
                  class="btn btn-primary btn-lg"
                >
                  Linkedin
                </a>
              </div>
              <div className="col-4 bg-secondary">
                <img
                  src="https://wallpapers.com/images/hd/professional-profile-pictures-1276-x-1762-075347emr82ph3hj.jpg"
                  class="img-fluid"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
