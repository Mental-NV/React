import React from 'react';
import NotesTable from '../components/notestable';
import { loadAllNotes } from '../Utils';

function ListNotes(props) {
    let notesList = loadAllNotes();
    return (
        <NotesTable notesList={notesList} />
    );
}

export default ListNotes;
