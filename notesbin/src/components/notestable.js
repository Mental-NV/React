import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';

const TabLink = styled(Link)({
});

function NotesTable(props) {
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
                    {props.notesList.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>
                                <TabLink 
                                    to={`/view?id=${row.id}`} 
                                    component={RouterLink}>
                                    {row.title}
                                </TabLink>
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
