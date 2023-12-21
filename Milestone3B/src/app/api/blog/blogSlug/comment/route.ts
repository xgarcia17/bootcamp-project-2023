import { NextRequest, NextResponse } from "next/server";
import Blog from "@/app/database/blogSchema";
import connectDB from "../../../../helpers/db";




export async function POST(req: NextRequest) {
	// const body = req.body
    const body = await req.json();
    console.log(body);
	// validate body
	if (body == null) {
		return NextResponse.json("Blog body not found");
	}
    const BlogSlug = body.slug; /*the blog slug from the request params*/
    // const BlogSlug = "blog1"

	// push comment object to document
	// Blog.update(...)
    await connectDB();
    try {
        const blogPost = await Blog.findOne(BlogSlug).orFail()
        const user = String(body.user);
        const comment = String(body.comment);
        const time = new Date();
        const newComment = { user, comment, time };
        blogPost.comments.push(newComment);

        // try {
        //     await Blog.updateOne(
        //         { BlogSlug },
        //         { $push: {comments: newComment }
        //     });
        // } catch (err) {
        //     console.log(err);
        //     return NextResponse.json("could not add comment");
        // }  
        // try {      
        //     blogPost.comments.collection.update({
        //         $push: {comments: {
        //             // user: body.user,
        //             // comment: body.comment,
        //             // time: new Date()
        //             newComment
        //         }}
        //     });
        // } catch (err) {
        //     console.log(err);
        //     return NextResponse.json("could not add comment");
        // }

        await blogPost.save();
        console.log("made it!")

        return NextResponse.json("Comment added", { status: 200 });
    } catch (err) {
        console.error("Error Getting Data From DB: ", err);
        return null;
    }
    
}