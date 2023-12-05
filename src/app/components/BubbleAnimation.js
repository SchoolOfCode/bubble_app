import React from "react";
import styles from "./BubbleAnimationCSS.module.css";

const BubbleAnimation = () => {
  return (
    <div className={styles.container}>
      <section class="sticky">
        <div class="bubbles">
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
        </div>
      </section>
    </div>
  );
};

export default BubbleAnimation;
