import { NextRequest, NextResponse } from "next/server";
import Portfolio from "@/app/database/portfolioSchema";
import connectDB from "../../../helpers/db";




export async function POST(req: NextRequest) {
	// const body = req.body
    const body = await req.json();
	// validate body
	if (body == null) {
		return NextResponse.json("Portfolio body not found");
	}
    const PortfolioSlug = body.slug; /*the portfolio slug from the request params*/
	// push comment object to document
	// Blog.update(...)
    await connectDB();
    try {
        const portPost = await Portfolio.findOne({ PortfolioSlug }).orFail()
        portPost.collection.update({
            $push: {"comments": {
                user: body.user,
                comment: body.comment,
                time: new Date()
            }}
        });
    } catch (err) {
        console.error("Error Getting Data From DB: ", err);
        return null;
    }
    
}