import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';

const StyledPapel = styled(Paper) ({
    width: '100%',
    height: '100px',
});

function ViewNotesPanel(props) {

    props = {
        title: "Sample title",
        content: "Some content Some content Some content Some content Some content ",
        created: new Date().toISOString().split('T')[0]
    }

    return (
        <div>
            <Typography>Title: {props.title}</Typography>
            <Typography>Created: {props.created}</Typography>
            <Typography>Content:</Typography>
            <StyledPapel elevation={3}>{props.content}</StyledPapel>
        </div>
    );
}

export default ViewNotesPanel;