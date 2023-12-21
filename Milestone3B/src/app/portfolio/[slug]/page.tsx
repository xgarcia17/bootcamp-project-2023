import Link from 'next/link'
import Image from 'next/image'
import '../../globals.css'
import style from '../portfolio.module.css'
import React from "react";
import connectDB from "../../helpers/db";
import Portfolio from "../../database/portfolioSchema"
import commentStyle from "../../components/comments.module.css"
import WriteComment from "../../components/writeComment";
import Comment from "../../components/comments";


type IComment = {
  user: string;
  comment: string;
  time: Date;
}


async function getPortfolioProject(slug: string){
  await connectDB()
  try {
    const portfolioProject = await Portfolio.findOne({ slug }).orFail()
      return portfolioProject
  } catch (err) {
    console.error("Error Getting Data From DB: ", err);
      return null
  }
}


async function PortfolioProject ({ params }: { params: { slug: string } }) {
const project = await getPortfolioProject(params.slug);

if (!project) {
  return <p>The project was not found</p>;
}

return (
    <div className="pageFormatting">
      <div className={style.project}>  
        <Image className={style.projectimage} src={project.image} alt="" width={project.width} height={project.height}></Image>
        <div className={style.projectdetails}>
        <p className={style.projectname}><strong>{project.title}</strong></p>
        <p className={style.projectdescription}>{project.content}</p>
        </div>
      </div>
      <div className={commentStyle.commentBlock}>
			  <strong>Comments</strong>
			  <WriteComment slug={params.slug}/>
			  {project.comments.map((icomment: IComment, index: React.Key | null | undefined) => (
	        <Comment key={index} comment = {icomment}/>
	      ))}
		  </div>
    </div>
  );
};

export default PortfolioProject;