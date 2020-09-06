
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const Home = React.lazy(() => import('./home'));
const About = React.lazy(() => import('./about'));

function App(props) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <section>
                <Home />
                <About />
            </section>
        </Suspense>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);