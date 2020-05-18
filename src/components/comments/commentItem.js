import React, {useState, useEffect} from 'react'
import userAvatart from '../../images/userpro.png';
import DeleteIcon from '@material-ui/icons/Delete';



export default function CommentItem(props) {
    
 

    const [commentIdState, setCommentIdState] = useState("");
    const [state, setstate] = useState("")
    const handleDeletComment = () => {

        let localComment = JSON.parse(localStorage.getItem("comments"))

        let newCommentList = localComment.filter( item => item.id !== commentIdState)
    
        console.log(newCommentList);
        localStorage.setItem("comments", JSON.stringify(newCommentList));

        setstate('1')
    }
  
   


    useEffect(() => {
        setCommentIdState(props.id)
    }, [])

    return (
        <div className="comment-item">
            <div className="comment-item__avatar">
                <img src={userAvatart} />
            </div>
            <div className="comment-item__data">
                <span className="comment-item__data-title">{props.name}</span>
                <span className="comment-item__data-date">2020-3-5</span>
                <span className="comment-item__data-delete" onClick={handleDeletComment}><DeleteIcon /></span>
                <p className="comment-item__data-text">
                    {props.text}
                </p>
            </div>
        </div>
    )
}
