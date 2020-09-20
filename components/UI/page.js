import React from "react";
import styles from "../../assets/styles/page.css";

function page({ children, height = "none" }) {
  return (
    <div className={styles.root} style={{ height: height }}>
      {children}
    </div>
  );
}

export default page;
