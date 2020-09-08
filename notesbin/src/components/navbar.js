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

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
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
                        <NavLink component={RouterLink} to="/view" >
                            View notes
                        </NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;
