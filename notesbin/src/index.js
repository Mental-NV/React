import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import NavBar from './components/navbar';

import CreateNotes from './routes/createnotes';
import ViewNotes from './routes/viewnotes';
import ListNotes from './routes/listnotes';

function App(props) {
    return (
        <div>
            <NavBar />
            <ViewNotes />
            <CreateNotes />
            <ListNotes />
        </div>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);