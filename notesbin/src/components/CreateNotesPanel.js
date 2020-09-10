import React from 'react';
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledTextField = styled(TextField) ({
    width: '100%',
    marginTop: '15px',
});

function CreateNotesPanel(props) {

    return (
        <div>
            <StyledTextField multiline label="New notes" variant="outlined" rows={10}>
                {props.content}
            </StyledTextField>
            <TextField label="Title:">{props.title}</TextField>
            <Button>Create notes</Button>
        </div>
    );
}

export default CreateNotesPanel;