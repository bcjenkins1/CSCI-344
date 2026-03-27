import React from "react";
import Card from "./components/Card.jsx";

export default function App() {

    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <main>
                <p>Hello React!</p>
                <Card
                    name="Sample item"
                    image_url="https://picsum.photos/id/237/400/300"
                    description="A short description goes here."
                />
            </main>
        </>
    );
}