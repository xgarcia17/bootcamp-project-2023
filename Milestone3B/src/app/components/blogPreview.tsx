import React from 'react';
import style from './blogPreview.module.css'
import '../globals.css'
import Link from 'next/link'

interface Blog {
    title: string;
    date: string;
    description: string;
    slug: string;
}

// Pass your props into the component here ↓↓↓
export default function BlogPreview(props: Blog) {  
    return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
        <>
            <div className={style.postpreview}>  
                <div className={style.blogpostcontainer}>
                    <h3 className={style.posttitle}>{props.title}</h3>
                    <p className={style.postsubtitle}>{props.date}</p>
                    <div>
                        <p className={style.postdescription}>{props.description}</p>
                        <Link className={style.readlinkprompt} href={props.slug}>Click here to read</Link>
                    </div>
                </div>
            </div>
        </>
        );
}
