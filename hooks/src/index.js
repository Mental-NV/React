import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ClickCounter = (props) => {
    let [count, setCount] = useState(0);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increas</button>
        </div>
    );
};

ReactDOM.render(
    <ClickCounter />,
    document.getElementById("root")
);