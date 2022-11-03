import { Grid, IconButton, Typography } from '@mui/material'
import CurrentQuote from './CurrentQuote'
import { Favorite, SkipNext, FavoriteBorderOutlined } from '@mui/icons-material';
import { QuoteActions, QuoteContainer, QuoteListContainer } from './Quotes.styles'
import QuotesFavsList from './QuotesFavsList';
import { useQuote } from '../../Hooks/useQoute';

const Quotes = () => {
     const {
      quote,
      secs,
      isFavorite,
      handleFavoriteQuote,
      handleFavoriteQuoteList,
      listOfFavoriteQuote,
      handleNextQuote,
      handleStopSecond} = useQuote();
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <QuoteContainer> 
            <QuoteActions>
              <div>
                <IconButton color="primary" onClick={handleStopSecond}>
                 { secs}s
                </IconButton>
                <IconButton color="primary" size="large" onClick={handleNextQuote}>
                  <SkipNext />
                </IconButton>
              </div>
              <IconButton size="large" onClick={handleFavoriteQuote}>
           {   isFavorite ? <Favorite/> :
                <FavoriteBorderOutlined/>}
              </IconButton>
            </QuoteActions>
            <CurrentQuote  quote={quote}/>
          </QuoteContainer>
        </Grid>
        <Grid item xs={4}>
          <QuoteListContainer>
            <Typography variant="h5">
              List of favorites quotes
            </Typography>
            <QuotesFavsList  listQuote={listOfFavoriteQuote} handleFavoriteQuoteList={handleFavoriteQuoteList}/>
          </QuoteListContainer>
        </Grid>
      </Grid>
    </>
  )
}

export default Quotes