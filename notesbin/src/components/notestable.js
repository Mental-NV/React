import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Table, TableBody, TableCell, TableContainer, 
    TableHead, TableRow, Paper, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    tableContainer: {
        height: 'calc(100vh - 95px)',
    },
});

function NotesTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Created</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.notesList.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>
                                <Link 
                                    to={`/view?id=${row.id}`} 
                                    component={RouterLink}>
                                    {row.title || 'No title'}
                                </Link>
                            </TableCell>
                            <TableCell>{row.created}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default NotesTable;
