// IMPORTS
import React from 'react';
import "./Main.css";
// PROPS: Main
const Main = props => (
    <main>
        <div className="container">
            {props.children}
        </div>

    </main>
)
// EXPORT DEFAULT: Main
export default Main;
