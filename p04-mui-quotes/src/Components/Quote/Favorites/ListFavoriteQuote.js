import React from 'react'
import { Typography } from '@mui/material'
import { QuoteListContainer } from '../Quotes.styles'
import QuotesFavsList from './QuotesFavsList';


function ListFavoriteQuote({favoritesQuotes, removeQuote}) {
  return (
    <QuoteListContainer>
      <Typography variant="h5">
        List of favorites quotes
      </Typography>
      <QuotesFavsList favoritesQuotes={favoritesQuotes} removeQuote={removeQuote}/>
  </QuoteListContainer>
   
  )
}

export default ListFavoriteQuote