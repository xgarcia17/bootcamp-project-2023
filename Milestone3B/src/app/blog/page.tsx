import React from "react";
import Link from "next/link"
import connectDB from "../helpers/db";
import Blog from "../database/blogSchema"
import style from "../components/blogPreview.module.css";
import '../globals.css'
import moment from 'moment';


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


// convert Date into readable words
function parseDateTime(time: Date){
	return moment(time).format('MMMM Do YYYY, h:mm:ss a');
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
      <div className="pageFormatting">
        {blogs.map((blog) => (
            <>
              <div className={style.postpreview}>  
                  <div className={style.blogpostcontainer}>
                      <h3 className={style.posttitle}>{blog.title}</h3>
                      <p className={style.postsubtitle}>{parseDateTime(blog.date)}</p>
                      <div>
                          <p className={style.postdescription}>{blog.description}</p>
                          <Link className={style.readlinkprompt} href={"/blog/" + blog.slug}>Click here to read</Link>
                      </div>
                  </div>
              </div>
            </>
          )
        )}
      </div>
    );
  }