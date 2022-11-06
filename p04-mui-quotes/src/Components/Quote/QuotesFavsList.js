import { Favorite } from '@mui/icons-material'
import { IconButton, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

const QuotesFavsList = ({favoriteList, onClick}) => {
  return (
    <List>
      {
        favoriteList.map((favorite, index) => (
          <ListItem key={index}
            secondaryAction={
              <IconButton color="secondary" edge="end" onClick={onClick} value={index}>
                <Favorite value={index} />
              </IconButton>
            }
          >
            <ListItemText
              primary={favorite.content}
              secondary={favorite.author}
            >
            </ListItemText>
          </ListItem>
          )
        )
      }
    </List>
  )
}

export default QuotesFavsList