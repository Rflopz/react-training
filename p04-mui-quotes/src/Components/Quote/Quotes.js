import { Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import CurrentQuote from './CurrentQuote'

import { Favorite, SkipNext, FavoriteBorderOutlined } from '@mui/icons-material';

import { QuoteActions, QuoteContainer, QuoteListContainer } from './Quotes.styles'
import QuotesFavsList from './QuotesFavsList';

const Quotes = () => {

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <QuoteContainer>
            <QuoteActions>
              <div>
                <IconButton color="primary">
                  30s
                </IconButton>
                <IconButton color="primary" size="large">
                  <SkipNext />
                </IconButton>
              </div>
              <IconButton size="large">
                <FavoriteBorderOutlined />
              </IconButton>
            </QuoteActions>
            <CurrentQuote />
          </QuoteContainer>
        </Grid>
        <Grid item xs={4}>
          <QuoteListContainer>
            <Typography variant="h5">
              List of favorites quotes
            </Typography>
            <QuotesFavsList />
          </QuoteListContainer>
        </Grid>
      </Grid>
    </>
  )
}

export default Quotes