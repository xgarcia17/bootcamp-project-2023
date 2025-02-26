import React from "react";
import Link from "next/link"
import connectDB from "../helpers/db";
import Blog from "../database/blogSchema"
import style from "../components/blogPreview.module.css";
import '../globals.css'


type IParams = {
    params: {
        slug: string
    }
}

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail();
      //const blogs = await blogSchema.find({}).orFail();

			// send a response as the blogs as the message
	    return blogs;
	} catch (err) {
	    return null;
	}
}

export default async function Blogs() {
    const blogs = await getBlogs();
    if (blogs == null) {
      return(
        <>
          <p>There are currently no blogs available.</p>
        </>
      );
    }
    return(
      <>
        {blogs.map((blog) => (
            <>
              <div className={style.postpreview}>  
                  <div className={style.blogpostcontainer}>
                      <h3 className={style.posttitle}>{blog.title}</h3>
                      <p className={style.postsubtitle}>{String(blog.date)}</p>
                      <div>
                          <p className={style.postdescription}>{blog.description}</p>
                          <Link className={style.readlinkprompt} href={"/blog/" + blog.slug}>Click here to read</Link>
                      </div>
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