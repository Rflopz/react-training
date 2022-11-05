import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <AppBar position="static" color="transparent" enableColorOnDark>
      <Toolbar>
        <Typography variant="h6">
          Quotes
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header