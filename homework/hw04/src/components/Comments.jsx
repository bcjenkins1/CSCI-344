import React from "react";

export default function Comments({comments}) {
    if(comments.length == 0) {
        return "";
    }
    if(comments.length == 1){
        return (
            <p className="text-sm mb-3">
                <strong>{comments[0].user.username}</strong>
                {comments.text}
            </p>
        );
    }
    if(comments.length > 1) {
        return (
            <>
            <button 
            aria-label="view all comments">
            view all {comments.length} comments
            </button>
            <p className="text-sm mb-3">
            <strong>{comments[comments.length-1].user.username}</strong>
            {comments[comments.length-1].text}
            </p>
            </>
        )
    }
}