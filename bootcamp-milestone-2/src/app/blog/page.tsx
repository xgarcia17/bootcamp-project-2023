import React from "react";
import Link from "next/link"
import Image from "next/image"
import style from "../components/blogPreview.module.css";
import '../globals.css'
import blogs from '../blogData'
import BlogPreview from '../components/blogPreview'

export default function Blog() {
  return (
    <>
        <h1 className="page-title">Blogs</h1>
        <div className={style.blogpostcontainer}>
        {blogs.map(blog => 
            <BlogPreview // This is how we call the component
            title={blog.title}
            description={blog.description}
            slug={blog.slug}
            date={blog.date}
            image={blog.image}
            imageHeight={blog.imageHeight}
            imageWidth={blog.imageWidth}
            />
        )}    
        </div>
        <footer className="footer">
            © 2023 Xavier's Personal Website | All Rights Reserved
        </footer>
    </>
  );
}