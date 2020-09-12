import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

import './navbar.css';

const NavBar = () => {
    return (
        <AppBar className='nav' position="static">
            <Toolbar>
                <div className='logo'>
                    <Typography>
                        <Link className='logolink navlink' component={RouterLink} to="/" >
                            <img src='logo32.png' alt='Notesbin' title='Notesbin' />
                            <span>Notesbin</span>
                        </Link>
                    </Typography>
                </div>
                <div className='buttons'>
                    <Typography>
                        <Link className='navlink' component={RouterLink} to="/create" >
                            Create notes
                        </Link>
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
