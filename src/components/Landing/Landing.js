import React from "react";
import styles from "./Landing.module.css";
// import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const landing = () => {
  return (
    <>
      {/* <video muted autoPlay loop className={styles.Video}>
        <source
          src="https://static.videezy.com/system/resources/previews/000/007/313/original/Plexus.mp4"
          type="video/mp4"
        />
      </video> */}
      <div className={styles.Title}>
        <h1>Welcome to Foodie Blog</h1>
        <button variant="info" className={styles.Button}>
          <NavLink to="/home">Dive In</NavLink>
        </button>
      </div>

      <ul className={styles.slideshow}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};

export default landing;
