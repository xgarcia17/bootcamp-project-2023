import React from 'react';
import type {Blog} from '../blogData'
import style from './blogPreview.module.css'
import '../globals.css'
import Link from 'next/link'


// Pass your props into the component here ↓↓↓
export default function BlogPreview(props: Blog) {  
    return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones

        //<Image src="./imageLinkHere" alt="img" width={500} height={500} ></Image>
        //above Image doesn't work because "JSX element class does not support attributes because it does not have a 'props' property.ts(2607)"
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
