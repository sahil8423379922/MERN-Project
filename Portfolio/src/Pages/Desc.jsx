import React from "react";

export default function Desc() {
  return (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="row">
        <div className="col-8">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Sahil Jaiswal</h1>
            <p className="col-md-8 fs-4">
              I am a dedicated Full Stack Developer with a passion for
              technology and a flair for teaching. With a strong background in
              MERN stack , Java Application Development , Flutter I bring a
              wealth of experience in designing, developing, and maintaining web
              applications and Apps.
            </p>
            <a
              href="https://www.linkedin.com/in/sahil-jaiswal-6686a9203/"
              className="btn btn-primary btn-lg"
              type="button"
            >
              Linkedin
            </a>
          </div>
        </div>
        <div className="col-4">
          <div
            className="w-[15rem] h-[15rem] sm:w-[18rem] sm:h-[18rem]"
            style={{ opacity: 1, transform: "none" }}
          >
            <div
              className="w-full h-full rounded-custom animate-morph border border-themeBlue bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp")',
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
