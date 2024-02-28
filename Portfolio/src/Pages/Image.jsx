import React from "react";
import style from "./CssModule/Header.module.css";

export default function Image() {
  return (
    <div>
      <img
        src="https://wallpapers.com/images/hd/professional-profile-pictures-1276-x-1762-075347emr82ph3hj.jpg"
        alt="..."
        className={style.img}
      />
    </div>
  );
}
