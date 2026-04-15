import React from "react";

export default function LikeBtn({post, token}) {
    async function unLike () {
        const endpoint = `/api/likes/${post.current_user_like_id}`;

        const response = await fetch(endpoint, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        });
        const data = await response.json();
        console.log(data);
    }

    async function like () {
        const endpoint = `/api/likes/`;

        const postData = {
            "post_id": post.id,
        };

        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify(postData),
        });
        const data = await response.json();
        console.log(data);
    }

    if (post.current_user_like_id != undefined) {
        return (
        <button 
            aria-label="unlike" 
            onClick={unLike}>
            <i className="fas text-red-500 fa-heart"></i>
        </button>
        );
    }else {
        return (
        <button 
            aria-label="like" 
            onClick={like}>
            <i className="far fa-heart"></i>
        </button>
        );
    }

}