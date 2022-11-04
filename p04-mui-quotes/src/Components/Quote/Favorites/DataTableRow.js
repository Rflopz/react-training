import React from 'react'
import { IconButton } from '@mui/material'
import { Favorite } from '@mui/icons-material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';

function DataTableRow({favoritesQuotes, removeQuote}) {
  return (
    <TableBody>
      {favoritesQuotes?.map((element) => (
      <TableRow
          key={`${element.id}row`}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
          <TableCell component="th" scope="row">
            <IconButton  name={element.id} size="large" onClick={()=>{removeQuote(element.id)}}>
                <Favorite />
            </IconButton>
          </TableCell>
          <TableCell align="left">{element.content}</TableCell>
          <TableCell align="left">{element.author}</TableCell>
      </TableRow>
      ))}
    </TableBody>
  )
}

export default DataTableRow