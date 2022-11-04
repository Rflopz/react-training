import React from 'react'
import { Grid, IconButton, Typography } from '@mui/material'
import { Favorite, SkipNext, FavoriteBorderOutlined } from '@mui/icons-material';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';

import Header from './Header';
import DataTableRow from './DataTableRow';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const QuotesFavsList = ({favoritesQuotes, removeQuote}) => {

  return (
    <>
      <div >Quotes Favorite Lists</div>
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 20 }} size="small" aria-label="a dense table">
          <Header />
          <DataTableRow favoritesQuotes={favoritesQuotes} removeQuote={removeQuote}/>
        </Table>
      </TableContainer>
    </>
    
  )
}

export default QuotesFavsList