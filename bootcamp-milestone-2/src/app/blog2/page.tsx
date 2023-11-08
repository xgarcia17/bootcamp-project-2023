import '../globals.css'
import style from '../components/blogPreview.module.css'

export default function Blog2() {
    return(
    <div className={style.blogpost}>
            <h2 className={style.blogtitle}>
                My First Blog
            </h2>
            <h4 className={style.blogsubtitle}>
                Thursday, October 18, 2023
            </h4>
            <p className={style.blogdescription}>
                Week 4 of my third year at Cal Poly is coming to an end, but I still have classes tomorrow. I am excited to
                attend my first Hack4Impact bootcamp session in about an hour and a half. I want to learn more Languages
                and programming practices through this bootcamp, and I am eager to get to work on helping non-profits. I am 
                looking forward to attending Culturefest Saturday, and I can't wait to get some much needed rest this weekend.
            </p>
        </div>
    );
}