"use client"
import React, { useState } from "react"


export default function writeComment(slug: any) {
	// const [post, sendPost] = useState(0);
    const [comment, setComment] = useState("");
    const [user, setUser] = useState("");
    let url;
    const subSlug = String(slug.slug).substring(0,4);

    const handleComment = (event: any) => {
        event.preventDefault();
        const params = { user, comment, slug }; 
        if (subSlug === "blog") {
            console.log("blog = ", subSlug);
            url = "http://localhost:3000/api/blog/blogSlug/comment";
        } else {
            console.log("not blog");
            url = "http://localhost:3000/api/portfolio/comment"
        }
        console.log("got past that part");
        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(params)
        }).then(() => {
            // console.log("booyah");
            // event.reset();
        });
    }
    const handleChangeComment = (event: any) => { setComment(event.target.value); }
    const handleChangeUser = (event: any) => { setUser(event.target.value); }

	return(
		<div>
            <form id="commentForm" onSubmit={handleComment}>
            <label htmlFor="username">Username: 
            <input required value={user} onChange={handleChangeUser} id="username"/>
            </label>
            <label htmlFor="comment">Comment:
            <textarea required value={comment} onChange={handleChangeComment} id="comment"/>
            </label>
            <button type="submit">Post Comment</button>
            </form>
		</div>
	)
}