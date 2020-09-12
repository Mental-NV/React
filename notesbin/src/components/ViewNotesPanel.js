import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';

const StyledPaper = styled(Paper) ({
    width: '100%',
    height: '100px',
});

function ViewNotesPanel(props) {
    let notes = props.notes;
    return (
        <div>
            <Typography>Title: {notes.title || 'No title'}</Typography>
            <Typography>Created: {notes.created}</Typography>
            <Typography>Content:</Typography>
            <StyledPaper elevation={3}>{notes.content || 'No content'}</StyledPaper>
        </div>
    );
}

export default ViewNotesPanel;