import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Table, TableBody, TableCell, TableContainer, 
    TableHead, TableRow, Paper, Link } from '@material-ui/core';

import './notestable.css';

function NotesTable(props) {
    return (
        <TableContainer className='notes-table-container' component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell width='60%'>Title</TableCell>
                        <TableCell width='40%'>Created</TableCell>
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
