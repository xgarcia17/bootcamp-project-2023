import '../globals.css'
import style from '../components/blogPreview.module.css'

export default function Blog1() {
    return(
    <div className={style.blogpost}>
            <h2 className={style.blogtitle}>
                Welcome to my Blog!
            </h2>
            <h4 className={style.blogsubtitle}>
                Thursday, October 18, 2023
            </h4>
            <p className={style.blogdescription}>
                Dear reader, as you may know, my name is Xavier Garcia. This is my first blogpost on my personal website 
                that I have been curating for <em>Hack4Impact,</em> and I will use this post as an introduction to 
                this Blog page. I am beginning Bootcamp for new Hack4Impact members, and as part of the program, I have learned
                how to dynamically update my website by appending to the DOM using TypeScript. Expect to see more posts from 
                me in the future!
            </p>
        </div>
    );
}