
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css'

const Home = React.lazy(() => import('./home'));
const About = React.lazy(() => import('./about'));
const Users = React.lazy(() => import('./users'));

function App(props) {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/users" component={Users} />
                </Switch>
            </Suspense>
        </Router>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);