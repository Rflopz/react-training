import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material'
import { Avatar, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { useQuote } from '../../Hooks/useQoute'

const QuotesFavsList = ({listQuote, handleFavoriteQuoteList}) => {
  return (
    <div>
     
      
     {
      listQuote?.map((quote)=>(
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} key={quote._id}>
        <ListItem alignItems="flex-start">
        <IconButton size="large" onClick={()=>handleFavoriteQuoteList(quote)}>
         <Favorite/> 
              </IconButton>
        <ListItemAvatar>
          <Avatar alt={quote.author} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={quote.author}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {`${quote.author} - ${ new Date(quote.dateAdded).getFullYear()}`}
              </Typography>
              {` — ${quote.content}`}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </List>


      ))

     }
    



    </div>
  )
}

export default QuotesFavsList