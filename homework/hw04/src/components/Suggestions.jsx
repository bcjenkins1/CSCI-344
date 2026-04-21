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

            <section className="flex justify-between items-center flex-col mb-4 gap-2">
                {
                suggestions.map(suggestion => (
                    <section key={suggestion.id} className="flex justify-between items-center mb-4 gap-2">
                        <img src={suggestion.thumb_url} className="rounded-full" alt="photo of {suggestion.username}"/>
                        <div className="w-[180px]">
                            <p className="font-bold text-sm">{suggestion.username}</p>
                            <p className="text-gray-500 text-xs">suggested for you</p>
                        </div>
                        <button className="text-blue-500 text-sm py-2">follow</button>
                    </section>
                ))
            }
            </section>
        </div>
    );
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