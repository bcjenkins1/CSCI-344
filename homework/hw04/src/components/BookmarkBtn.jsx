import React, {useState} from "react";

export default function BookmarkBtn({post, token}) {

    const [bookmarkId, setBookmarkId] = useState(post.current_user_bookmark_id);
    
    async function unBook() {
    const endpoint = `/api/bookmarks/${bookmarkId}`;

    const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });
    const data = await response.json();
    console.log(data);
    setBookmarkId(data.id);
    }

    async function book() {
        const endpoint = `/api/bookmarks/`;

        const postData = {
            "post_id": post.id
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
        setBookmarkId(data.id);
    }
    
    if(bookmarkId != undefined) {
        return (
        <button 
            aria-label="unbookmark" 
            onClick={unBook}>
            <i className="fas fa-bookmark"></i>
        </button>
        );
        
    }else {
        return (
        <button 
            aria-label="bookmark" 
            onClick={book}>
            <i className="far fa-bookmark"></i>
        </button>
        );   
    }

}