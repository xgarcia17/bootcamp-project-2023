
import Link from 'next/link'
import Image from 'next/image'
import '../globals.css'
import style from './portfolio.module.css'
import React from "react";
import connectDB from "../helpers/db";
import Portfolio from "../database/portfolioSchema"


type IParams = {
    params: {
        slug: string
    }
}

async function getPortfolios(){
	await connectDB() // function from db.ts before
	try {
			// query for all blogs and sort by date
	    const portfolios = await Portfolio.find().orFail();
      //const blogs = await blogSchema.find({}).orFail();

			// send a response as the blogs as the message
	    return portfolios;
	} catch (err) {
	    return null;
	}
}

export default async function Portfolios() {
    const portfolios = await getPortfolios();
    if (portfolios == null) {
      return(
        <>
          <p>There are currently no projects available.</p>
        </>
      );
    }
    return(
      <>
      <h1 className="page-title">Portfolio</h1>
        {portfolios.map((portfolio) => (
            <>
            <div className={style.postpreview}>
                <div className={style.postcontainer}>
                    <p className={style.projectname}>{portfolio.title}</p>
                    <Link href={"/portfolio/" + portfolio.slug}>Click here to check out {portfolio.title}</Link>
                </div>
            </div>
            </>
          )
        )}
        <footer className="footer">
                © 2023 Xavier's Personal Website | All Rights Reserved
            </footer>
      </>
    );
  }



// export default function Portfolio() {
//     return (<>
//                 <h1 className="page-title">Portfolio</h1>
//                 <div className={style.project}>
//                     <Image className={style.projectimage} src="/Screenshot 2023-10-05 000120.png" alt="Homepage of Xavier's Personal Website" width="650" height="400"></Image>
//                     <div className={style.projectdetails}>
//                         <p className={style.projectname}>
//                             <strong>Xavier's Personal Website</strong>
//                         </p>
//                         <p className={style.projectdescription}>
//                             <em>Xavier's Personal Website</em> is a personal project of mine, Xavier Garcia, to learn and
//                             develop my <strong>Web development</strong> skills. I have also created this project as part of my 
//                             application to <em>Hack4Impact</em>, a non-profit organization dedicated to aiding local
//                             non-profits in the San Luis Obispo community by developing websites and software for them.
//                         </p>
//                         <Link href="index.html">LEARN MORE</Link>
//                         <p></p>
//                     </div>
//                 </div>
//                 <footer className="footer">
//                 © 2023 Xavier's Personal Website | All Rights Reserved
//                 </footer>
//             </>); 
//   }