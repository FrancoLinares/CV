import React from "react";
import styles from "../../../assets/styles/page.scss";

function Page({ children, height = "none" }) {
  return (
    <div className={styles.root} style={{ height: height }}>
      {children}
    </div>
  );
}

export default Page;
