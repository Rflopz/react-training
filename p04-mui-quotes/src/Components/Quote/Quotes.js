import { Grid, IconButton, Typography } from '@mui/material'
import {React, useState, useEffect, useRef} from 'react'
import CurrentQuote from './CurrentQuote'
import axios from 'axios';

import { Favorite, SkipNext, FavoriteBorderOutlined, Pause, Timer } from '@mui/icons-material';

import { QuoteActions, QuoteContainer, QuoteListContainer } from './Quotes.styles'
import QuotesFavsList from './QuotesFavsList';
import configData from '../../Configs/config.json';

const Quotes = () => {
  const [randomQuoteTimer, setRandomQuoteTimer] = useState(0)
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [year, setYear] = useState('')
  const [tags, setTags] = useState([])
  const [pause, setPause] = useState(false)
  const [favorite, setFavorite] = useState(false)
  const [favoriteList, setFavoriteList] = useState([])

  const myTimeout = useRef(null)

  const fetchRandomQuote = () => {
    const url = configData.QUOTABLE_API_URL + "/random"
    axios.get(url).then((response) => {
      setContent(response.data.content)
      setAuthor(response.data.author);
      setYear(response.data.dateAdded.substr(0, 4))
      setTags(response.data.tags)
      setPause(false)
      setFavorite(false)
      setRandomQuoteTimer(configData.RANDOM_QUOTE_TIMER)
    })
  }

  useEffect(() => {
    if (pause)
      return
    if (randomQuoteTimer === 0){
      fetchRandomQuote()
      clearTimeout(myTimeout.current)
    }
    else{
      myTimeout.current = setTimeout(()=>{
        setRandomQuoteTimer(randomQuoteTimer-1)
      }, 1000)
    }
  }, [randomQuoteTimer, pause])

  const onPauseResumeClick = () => {
    setPause(!pause)
  }

  const onSkipClick = () => {
    fetchRandomQuote()
    clearTimeout(myTimeout.current)
  }

  const onAddFavoriteClick = () => {
    if (favorite)
      return
    setFavoriteList([...favoriteList, {
      "content": content,
      "author": author,
    }])
    setFavorite(true)
  }

  const onFavoriteIconItemClick = (e) => {
    const favoriteIndex = e.target.parentNode.parentNode.value;
    const newFavoritList = favoriteList.filter((favorite, index) => index !== Number(favoriteIndex))
    setFavoriteList(newFavoritList)
  }
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <QuoteContainer>
            <QuoteActions>
              <div>
                <IconButton color="primary" onClick={onPauseResumeClick}>
                  { pause && <Pause/> }
                  { (!pause)? randomQuoteTimer: ''}
                </IconButton>
                <IconButton color="primary" size="large" onClick={onSkipClick}>
                  <SkipNext />
                </IconButton>
              </div>
              <IconButton size="large" onClick={onAddFavoriteClick}>
                { (favorite)? <Favorite color="secondary"/> : <FavoriteBorderOutlined/>}
              </IconButton>
            </QuoteActions>
            <CurrentQuote content={content} author={author} year={year} tags={tags}/>
          </QuoteContainer>
        </Grid>
        <Grid item xs={4}>
          <QuoteListContainer>
            <Typography variant="h5">
              List of favorites quotes
            </Typography>
            <QuotesFavsList favoriteList={favoriteList} onClick={onFavoriteIconItemClick}/>
          </QuoteListContainer>
        </Grid>
      </Grid>
    </>
  )
}

export default Quotes