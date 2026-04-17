import React from "react";
import BookmarkBtn from "./BookmarkBtn.jsx";
import LikeBtn from "./LikeBtn.jsx";
import Comments from "./Comments.jsx";

export default function Post({post, token}) {


    return (
        <section className="bg-white border mb-10">
            <div className="p-4 flex justify-between">
                <h3 className="text-lg font-Comfortaa font-bold">{post.user.username}</h3>
                <button className="icon-button"><i className="fas fa-ellipsis-h"></i></button>
            </div>
            <img src={post.image_url} alt= {post.alt_text || post.caption} 
                width="300" 
                height="300"
                className="w-full bg-cover" />
            <div className="p-4">
                <div className="flex justify-between text-2xl mb-3">
                    <div>
                        <LikeBtn post={post} token={token} />
                        <button><i className="far fa-comment"></i></button>
                        <button><i className="far fa-paper-plane"></i></button>
                    </div>
                    <div>
                        <BookmarkBtn post={post} token={token} />
                    </div>
                </div>
                <p className="font-bold mb-3">{post.likes.length + "likes"}</p>
                <div className="text-sm mb-3">
                    <p>
                        <strong>{post.user.username}</strong>
                        {" " + post.caption}
                        <button className="button">more</button>
                    </p>
                </div>
                <Comments comments={post.comments}/>
                <p className="uppercase text-gray-500 text-xs">{post.display_time}</p>    
            </div>
            <div className="flex justify-between items-center p-3">
                <div className="flex items-center gap-3 min-w-[80%]">
                    <i className="far fa-smile text-lg"></i>
                    <input type="text" className="min-w-[80%] focus:outline-none" placeholder="Add a comment..." />
                </div>
                <button className="text-blue-500 py-2">Post</button>
            </div>
        </section>

    );
}