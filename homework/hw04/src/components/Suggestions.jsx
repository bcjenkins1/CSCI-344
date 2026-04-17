import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

export default function Suggestions({ token }) {
    const [suggestions, setSuggestions] = useState([]);

    async function getSuggestions() {
        const data = await getDataFromServer(token, "/api/suggestions");
        console.log(data);
        setSuggestions(data);
    }

    useEffect(() => {
        getSuggestions();
    }, []);
    return (
        <div className="mt-4">
            <p className="text-base text-gray-400 font-bold mb-4">
                Suggestions for you
            </p>

            <section className="flex justify-between items-center mb-4 gap-2">



            </section>
        </div>
    );
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