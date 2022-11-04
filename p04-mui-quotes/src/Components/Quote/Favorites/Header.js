import React from 'react'
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function Header() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Delete</TableCell>
        <TableCell align="left">Content</TableCell>
        <TableCell align="left">Author</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default Header