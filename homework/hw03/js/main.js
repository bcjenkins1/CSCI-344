//Run this in terminal while working:  npm run build:tailwind
// requires utilities.js to be loaded first:
// included in index.html


const rootURL = "https://photo-app-secured.herokuapp.com";
let token = null;
let username = "bjenkin2";   // change to your username :)
let password = "password";

async function initializeScreen() {
    token = await getToken();
    showNav();
    // invoke all of the Part 1 functions here
    showPosts();
    showProfile();
    showSuggestions();
    showStories();
}

//fetch and display posts
async function showPosts() {
    // fetch the posts from /api/posts
    const endpoint = `${rootURL}/api/posts/`
    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });

    const posts = await response.json(); //array of objects
    console.log(posts);

    // select the posts container
    const postsContainerEl = document.querySelector('#postsContainer');
        // loop through the first 10 posts
    posts.forEach((post) => {
        const htmlSnip = postToHTML(post);
            // build each post's HTML (or call a helper function)
            // insert the rendered posts into the DOM
        postsContainerEl.insertAdjacentHTML("beforeend", postToHTML(post));
    });
}

async function showSuggestions() {
    const endpoint = `${rootURL}/api/suggestions/`
    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });

    const suggestions = await response.json(); //array of objects
    console.log(suggestions);

    const suggestionsContainerEl = document.querySelector('#suggestionsContainer');
    // loop through the first 10 posts
    suggestions.forEach((suggestion) => {
        const htmlSnip = suggestionToHTML(suggestion);
            // build each post's HTML (or call a helper function)
            // insert the rendered posts into the DOM
        suggestionsContainerEl.insertAdjacentHTML("beforeend", suggestionToHTML(suggestion));
    });
}

function suggestionToHTML(suggestion) {
    return `
    <section class="flex justify-between items-center mb-4 gap-2">
        <img src="${suggestion.thumb_url}" class="rounded-full" alt="photo of ${suggestion.username}"/>
        <div class="w-[180px]">
            <p class="font-bold text-sm">${suggestion.username}</p>
            <p class="text-gray-500 text-xs">suggested for you</p>
        </div>
        <button class="text-blue-500 text-sm py-2">follow</button>
    </section>
    `;
}

async function showStories() {
    const endpoint = `${rootURL}/api/stories/`
    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });

    const stories = await response.json(); //array of objects
    console.log(stories);

    const storiesContainerEl = document.querySelector('#storiesContainer');
    // loop through the first 10 posts
    stories.forEach((story) => {
        const htmlSnip = storyToHTML(story);
            // build each post's HTML (or call a helper function)
            // insert the rendered posts into the DOM
        storiesContainerEl.insertAdjacentHTML("beforeend", storyToHTML(story));
    });
}

function storyToHTML(story) {
    return`
    <div class="flex flex-col justify-center items-center">
        <img src="${story.user.thumb_url}" class="rounded-full border-4 border-gray-300" alt="photo of ${story.user.username}"/>
        <p class="text-xs text-gray-500">${story.user.username}</p>
    </div>
    `;
}

async function showProfile() {
    const endpoint = `${rootURL}/api/profile/`;
    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });

    const profile = await response.json();
    console.log(profile);
    
    const template = `
    <img src="${profile.thumb_url}" class="rounded-full w-16" alt="photo of ${profile.username}"/>
    <h2 class="font-Comfortaa font-bold text-2xl">${profile.username}</h2>
    `;
    document.querySelector("#profile").innerHTML = template;

}

function postToHTML(post) {

    return `
            <!-- Post 1 -->
        <section class="bg-white border mb-10">
            <div class="p-4 flex justify-between">
                <h3 class="text-lg font-Comfortaa font-bold">${post.user.username}</h3>
                <button class="icon-button" aria-label="more"><i class="fas fa-ellipsis-h"></i></button>
            </div>
            <img src="${post.image_url}" alt="placeholder image" width="300" height="300"  IMAGE
                class="w-full bg-cover">
            <div class="p-4">
                <div class="flex justify-between text-2xl mb-3">
                    <div>
                        ${getLikeButton(post)}
                        <button aria-label="comment" ><i class="far fa-comment"></i></button>
                        <button aria-label="share" ><i class="far fa-paper-plane"></i></button>
                    </div>
                    <div>
                        ${getBookmarkButton(post)}
                    </div>
                </div>
                <p class="font-bold mb-3">${post.likes.length} Likes</p>
                <div class="text-sm mb-3">
                    <p>
                        <strong>${post.user.username}</strong>
                        ${post.caption}
                        <button class="button">more</button>                                                MORE BUTTON
                    </p>
                </div>
                <p class="text-sm mb-3">                                                                      COMMENT
                    <strong>lizzie</strong>
                    Here is a comment text text text text text text text text.
                </p>
                <p class="text-sm mb-3">                                                                      COMMENT
                    <strong>vanek97</strong>
                    Here is another comment text text text.
                </p>
                <p class="uppercase text-gray-500 text-xs">${post.display_time}</p>
            </div>
            <div class="flex justify-between items-center p-3">
                <div class="flex items-center gap-3 min-w-[80%]">
                    <i class="far fa-smile text-lg"></i>
                    <input aria-label="Add a comment" type="text" class="min-w-[80%] focus:outline-none" placeholder="Add a comment...">
                </div>
                <button class="text-blue-500 py-2">Post</button>
            </div>
        </section>
    `;
}
//comment thing
//comment made up of username and comment
//if none, empty
//if 1, show 1 only
//if more than one, show "view all # comments" # = number of comments



function getLikeButton(post) {
    if (post.current_user_like_id != undefined) {
        return `
        <button aria-label="unlike" onclick="unLike(${post.current_user_like_id})">
            <i class="fas text-red-500 fa-heart"></i>
        </button>`;
    }else {
        return `
        <button aria-label="like" onclick="like(${post.id})">
            <i class="far fa-heart"></i>
        </button>`;
    }
}

async function unLike(likeID) {
    const endpoint = `${rootURL}/api/likes/${likeID}`;

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

async function like(postID) {
    const endpoint = `${rootURL}/api/likes/`;

    const postData = {
        "post_id": postID,
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

function getBookmarkButton(post) {
    if (post.current_user_bookmark_id != undefined) {
        return `
        <button aria-label="unbookmark" onclick="unBook(${post.current_user_bookmark_id})">
            <i class="fas fa-bookmark"></i>
        </button>`;
    }else {
        return `
        <button aria-label="bookmark" onclick="book(${post.id})">
            <i class="far fa-bookmark"></i>
        </button>`;
    }
}

async function unBook(bookID) {
    const endpoint = `${rootURL}/api/bookmarks/${bookID}`;

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

async function book(postID) {
    const endpoint = `${rootURL}/api/bookmarks/`;

    const postData = {
        "post_id": postID,
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

async function getToken() {
    return await getAccessToken(rootURL, username, password);
}

function showNav() {
    document.querySelector("#nav").innerHTML = `
    <nav class="flex justify-between py-5 px-9 bg-white border-b fixed w-full top-0">
            <h1 class="font-Comfortaa font-bold text-2xl">Photo App</h1>
            <ul class="flex gap-4 text-sm items-center justify-center">
                <li><span>${username}</span></li>
                <li><button class="text-blue-700 py-2">Sign out</button></li>
            </ul>
        </nav>
    `;
}

// implement remaining functionality below:









// after all of the functions are defined, 
// invoke initialize at the bottom:
initializeScreen();
