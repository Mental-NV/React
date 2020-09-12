import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

import { styled } from '@material-ui/core/styles';

const NavLink = styled(Link)({
    color: 'white',
    marginLeft: '10px',
});

const StyledAppBar = styled(AppBar)({
    marginBottom: '15px',
});

const NavBar = () => {
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <Typography variat="title" color="inherit">
                    Notesbin
                </Typography>
                <Typography>
                    <NavLink component={RouterLink} to="/" >
                        Notes list
                    </NavLink>
                    <NavLink component={RouterLink} to="/create" >
                        Create notes
                    </NavLink>
                </Typography>
            </Toolbar>
        </StyledAppBar>
    );
}

export default NavBar;
