import React from "react";
import connectDB from "../../helpers/db";
import Blog from "../../database/blogSchema"
import style from "../../components/blogPreview.module.css";
import commentStyle from "../../components/comments.module.css"
import '../../globals.css';
import Comment from "../../components/comments";
import moment from 'moment';
import WriteComment from "../../components/writeComment";

type IComment = {
    user: string;
    comment: string;
    time: Date;
}


async function getBlogPosts(slug: string) {
	await connectDB()
	try {
      const blogPost = await Blog.findOne({ slug }).orFail()
	    return blogPost
	} catch (err) {
      console.error("Error Getting Data From DB: ", err);
	    return null
	}
}


// convert Date into readable words
function parseDateTime(time: Date) {
	return moment(time).format('MMMM Do YYYY, h:mm:ss a');
}


async function BlogPost ({ params }: { params: { slug: string } }) {
	const blogPost = await getBlogPosts(params.slug);
	if (!blogPost) {
	  return <p>The blog post was not found</p>;
	}
	return (
		<div className="pageFormatting">
		<div className={style.blogpost}>  
			<div className={style.blogpostcontainer}>
				<h3 className={style.posttitle}>{blogPost.title}</h3>
				<em className={style.postsubtitle}>{parseDateTime(blogPost.date)}</em>
				<br/>
				<p className={style.postcontent}>{blogPost.content}</p>
			</div>
		</div>
		<div className={commentStyle.commentBlock}>
			<strong>Comments</strong>
			<WriteComment slug={params.slug}/>
			{blogPost.comments.map((icomment: IComment, index: React.Key | null | undefined) => (
	            <Comment key={index} comment = {icomment}/>
	        ))}
		</div>
	  </div>
	);
  };
  
  export default BlogPost;

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