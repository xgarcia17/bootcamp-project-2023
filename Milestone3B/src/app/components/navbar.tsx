import React from "react";
import Link from "next/link"
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar} >
      <nav>
        <h1 className={style.logo}><Link href="https://xaviers-personal-website-gf35kvjry-xgarcia17s-projects.vercel.app/">Xavier&apos;s Personal Website</Link></h1>
            <ul className={style.navlist}>
                <Link href="https://xaviers-personal-website-gf35kvjry-xgarcia17s-projects.vercel.app/">Home</Link>
                <Link href="https://xaviers-personal-website-gf35kvjry-xgarcia17s-projects.vercel.app/blog">Blogs</Link>
                <Link href="https://xaviers-personal-website-gf35kvjry-xgarcia17s-projects.vercel.app/portfolio">Portfolio</Link>
                <Link href="https://xaviers-personal-website-gf35kvjry-xgarcia17s-projects.vercel.app/resume">Resume</Link>
                <Link href="https://xaviers-personal-website-gf35kvjry-xgarcia17s-projects.vercel.app/contact">Contact</Link>
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
