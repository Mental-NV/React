import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import './index.css';

import NavBar from './components/navbar';

const CreateNotes = React.lazy(() => import('./routes/createnotes'));
const ViewNotes = React.lazy(() => import('./routes/viewnotes'));
const ListNotes = React.lazy(() => import('./routes/listnotes'));
const NotFound404 = React.lazy(() => import('./routes/notfound404'));

function App(props) {
    return (
        <div>
            <NavBar />
            <div>
                <Router>
                    <Suspense fallback={<CircularProgress />}>
                        <Switch>
                            <Route exact path="/" component={ListNotes} />
                            <Route path="/view" component={ViewNotes} />
                            <Route path="/create" component={CreateNotes} />
                            <Route exact path='*' component={NotFound404} />
                        </Switch>
                    </Suspense>
                </Router>
            </div>
        </div>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);