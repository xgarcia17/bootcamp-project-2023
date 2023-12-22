
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
      <div className="pageFormatting">
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
        ))}
      </div>
    );
  }
