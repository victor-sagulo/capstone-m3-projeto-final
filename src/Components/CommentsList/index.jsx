import CardComment from "../CardComment";

const CommentsList = (comments) => {

    return(<div>
        {comments.map{(comment) =>{
            <CardComment img={comment.img} name={comment.game} comment={comment.text} likes={comment.likes} />
        }}
    </div>)
};

export default CommentsList;
