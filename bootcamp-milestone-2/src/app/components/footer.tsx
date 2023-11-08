import React from "react";
import Link from "next/link"
import style from "./footer.module.css";

export default function Navbar() {
  return (
    <>
    <div className={style.footer}>
            <footer>
                © 2023 <p>Xavier's Personal Website</p> | All Rights Reserved
            </footer>
    </div>
    </>
  );
}