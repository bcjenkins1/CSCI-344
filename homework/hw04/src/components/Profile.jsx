import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

export default function Profile({ token }) {
    const [profile, setProfile] = useState([]);

    async function getProfile() {
        const data = await getDataFromServer(token, "/api/profile");
        console.log(data);
        setProfile(data);
    }

    useEffect(() => {
        getProfile();
    }, []);
    return (
        <header className="flex gap-4 items-center">
            <p>
                <img src={profile.thumb_url} className="rounded-full w-16" alt="photo of {profile.username}"/>
                <h2 className="font-Comfortaa font-bold text-2xl">{profile.username}</h2>
            </p>
        </header>
    );
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