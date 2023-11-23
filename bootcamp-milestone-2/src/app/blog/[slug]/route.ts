import React from "react";
import Link from "next/link"
import Image from "next/image"
import connectDB from "../../helpers/db";
import blogSchema from "../../database/blogSchema"
import style from "../components/blogPreview.module.css";
import '../globals.css'
import { NextRequest, NextResponse } from 'next/server'

type IParams = {
		params: {
			slug: string
		}
}


export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB() // function from db.ts before
		const { slug } = params // another destructure

	   try {
	        const blog = await blogSchema.findOne({ slug }).orFail()
	        return NextResponse.json(blog)
	    } catch (err) {
	        return NextResponse.json('Blog not found.', { status: 404 })
	    }
}


/* 
	In order to use params, you need to have a request parameter before

	The reason why we do { params }, is to destructure, the object, meaning,
	it allows us to obtain the individual properties within the "IParams" 
	object directly and conveniently, 
	such as the `params` property.

	If we didn't do this, to obtain slug would look messy,
	ex.
	const slug = params.params.slug

	There are more ways to destructure this, but that is up to you to find out
	lol.

 */


// async function getBlogs(slug: string){
// 	await connectDB() // function from db.ts before

// 	try {
// 			// query for all blogs and sort by date
// 	    //const blogs = await blogSchema.find().sort({ date: -1 }).orFail()
//       const blog = await blogSchema.findOne({slug}).orFail()

// 			// send a response as the blogs as the message
// 	    return blog
// 	} catch (err) {
//     console.error("Blog not found.");
// 	  return null
// 	}
// }

// export default async function BlogPost({params}: {params: {slug: string}}) {
//     const blogPost = await getBlogs(params.slug);
//     if (blogPost == null) {
//       return(
//         <>
//           <p>The blogpost is not available.</p>
//         </>
//       );
//     }
//     return(
//       <div className={style.blogpost}>
//             <h2 className={style.blogtitle}>{blogPost.title}</h2>
//             <h4 className={style.blogsubtitle}>{blogPost.date}</h4>
//             <p className={style.blogdescription}>{blogPost.description}</p>
//         </div>
//     );
//   }


// export async function GET(req: NextRequest, {params}: Params) {
//     const {slug} = params;
//     await connectDB();
//     try {
//         const blog = blogSchema.findOne({slug}).orFail();
//         return NextResponse.json(blog);
//     }
//     catch {
//         return NextResponse.json("No Blog Found.", {status: 501});
//     }
// }