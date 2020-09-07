import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function NotesTable(props) {
    let notesList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => { 
        return { 
            'id': index, 
            'title': 'title ' + index, 
            'created': new Date(2020, 8, index + 2).toISOString().split('T')[0] 
        }; 
    });
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Created</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {notesList.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.title}</TableCell>
                            <TableCell>{row.created}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default NotesTable;
