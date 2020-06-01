import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";

function App() {
    return (
        <div className="App">
            <PageTitle/>
            <Rating/>
            <Accordion title={"Accordion"}/>
            <Accordion title={"New Accordion"}/>
        </div>
    );
}

function PageTitle() {
    return <h2>App Component</h2>
}

export default App;
