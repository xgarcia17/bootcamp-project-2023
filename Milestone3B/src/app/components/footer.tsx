import React from "react";
import Link from "next/link"
import style from "./footer.module.css";

export default function Footer() {
  return (
    <>
    <div className={style.footer}>
      <footer>
        © 2023 Xavier&apos;s Personal Website | All Rights Reserved
      </footer>
    </div>
    </>
  );
}