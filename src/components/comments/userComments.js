import React, {useState} from 'react'
import CommentItem from './commentItem';

export default function UserComments() {


    let localComment = JSON.parse(localStorage.getItem("comments"))
    
    if(localComment){

        var comments = [...localComment];
    }else {
        var comments = [];

    }
    const [userNameState, setUserNameState] = useState("")
    const [userEmailState, setUserEmailState] = useState("")
    const [userPhoneState, setUserPhoneState] = useState("")
    const [userTextState, setUserTextState] = useState("")

    const handleSubmit = () => {
        let comment = {
            name: userNameState,
            email: userEmailState,
            phone: userPhoneState,
            text: userTextState,
            id: Math.random().toString(36).substr(2, 9)
        }
        comments.push(comment)
        // const jsonComment = comments.JSON.stringify
        localStorage.setItem("comments", JSON.stringify(comments));

    }
    console.log(JSON.parse(localStorage.getItem("comments")))
    return (
        <>
            <h1 className="resume-page-title">user comments</h1>
            
            {
                comments ? comments.map( (item, index) => (
                    <CommentItem name={item.name} email={item.email} phone={item.phone} text={item.text} key={index +1} id={item.id}/>
                )) : <p>user comments empty</p>
            }

            <div className="row">
                <div className="col-12 col-md-6">


                    <div className="comment-form">
                    
                    <h2 className="comment-form__title">send comment</h2>
                        <form className="comment-form__form">
                            <div className="comment-form__item">
                                <label for="commentInputName">Name</label>
                                <input type="text" id="commentInputName" onChange={(e) => setUserNameState(e.target.value)}/>
                            </div>
                            <div className="comment-form__item">
                                <label for="commentInputEmail">Email</label>
                                <input type="text" id="commentInputEmail" onChange={(e) => setUserEmailState(e.target.value)}/>
                            </div>
                            <div className="comment-form__item">
                                <label for="commentInputPhone">Phone</label>
                                <input type="text" id="commentInputPhone" onChange={(e) => setUserPhoneState(e.target.value)}/>
                            </div>
                            <div className="comment-form__item">
                                <label for="commentInputTextarea">Textarea</label>
                                <textarea type="text" id="commentInputTextarea" onChange={(e) => setUserTextState(e.target.value)}/>
                            </div>
                            <button type="submit" onClick={handleSubmit}>send</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}
