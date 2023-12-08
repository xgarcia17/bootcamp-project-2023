import moment from 'moment';
import style from "./comments.module.css"


{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type IComment = {
    user: string;
    comment: string;
    time: Date;
}


type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}



// convert Date into readable words
function parseCommentTime(time: Date){
	return moment(time).format('MMMM Do YYYY, h:mm:ss a');
}


function Comment({ comment }: CommentProps) {
    return (
        <div className={style.commentPostBlock}>
        <div className={style.commentPost}>
            <div className={style.commentHeader}>
                <h4 className={style.commentUser}>{comment.user}</h4>
                <h4 className={style.commentTime}>{parseCommentTime(comment.time)}</h4>
            </div>
            <p className={style.commentContent}>{comment.comment}</p>
        </div>
        </div>
    );
}

export default Comment;