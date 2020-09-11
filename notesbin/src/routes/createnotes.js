import React, { useState } from 'react';
import CreateNotesPanel from '../components/CreateNotesPanel';
import { saveNotes } from '../Utils';

function CreateNotes(props) {
    let [content, setContent] = useState(null);
    let [title, setTitle] = useState(null);
    return (
        <div>
            <CreateNotesPanel 
                content={content} 
                title={title} 
                onContentChange={(e) => { setContent(e.target.value); }}
                onTitleChange={(e) => { setTitle(e.target.value); }}
                onClick={() => { saveNotes(title, content); }} 
            />
        </div>
    );
}

export default CreateNotes;