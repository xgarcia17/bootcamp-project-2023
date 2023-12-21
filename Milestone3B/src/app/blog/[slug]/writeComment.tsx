"use client"
import React, { useState } from "react"


export default function writeComment(slug: any) {
	// const [post, sendPost] = useState(0);
    const [comment, setComment] = useState("");
    const [user, setUser] = useState("");

    const handleComment = (event: any) => {
        event.preventDefault();
        const params = { user, comment, slug }; 
        fetch("http://localhost:3000/api/blog/blogSlug/comment", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(params)
        }).then(() => {
            console.log("booyah");
            event.reset();
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