import React from "react";
import Link from "next/link"
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar} >
      <nav>
        <h1 className={style.logo}><Link href="/">Xavier&apos;s Personal Website</Link></h1>
            <ul className={style.navlist}>
                <Link href="/">Home</Link>
                <Link href="/blog">Blogs</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/resume">Resume</Link>
                <Link href="/contact">Contact</Link>
                {/* <Link href="http://localhost:3000/">Home</Link> */}
                {/* <Link href="http://localhost:3000/blog">Blogs</Link> */}
                {/* <Link href="http://localhost:3000/portfolio">Portfolio</Link> */}
                {/* <Link href="http://localhost:3000/resume">Resume</Link> */}
                {/* <Link href="http://localhost:3000/contact">Contact</Link> */}
            </ul>
      </nav>
    </header>
  );
}
