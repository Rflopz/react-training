

import { Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import CurrentQuote from './CurrentQuote'
import axios from "axios"
import { Favorite, SkipNext, FavoriteBorderOutlined } from '@mui/icons-material';
import { QuoteActions, QuoteContainer, QuoteListContainer } from './Quotes.styles'
import QuotesFavsList from './Favorites/QuotesFavsList';
import ListTags from './Tags/ListTags';
import ListFavoriteQuote from './Favorites/ListFavoriteQuote';


import {useRef, useState, useEffect} from 'react'
import _defaultMaxTime, {_APIQuotes} from './QuotesConfig'




const Quotes = () => {
 
  const [counter, setCounter] = useState(_defaultMaxTime)
  const [counterActive, setCounterActive] = useState(true)

  const [quote, setQuote] = useState([])
  const [favorite, setFavorite] = useState(false)

  const getQuote = () =>{
    axios.get(_APIQuotes)
    .then(res => {
      setQuote(res)
    }).catch(err => {
      console.log(err)
    })
  }

  const nextQuote = () =>{
    setCounter(_defaultMaxTime) 
    setCounterActive(true)
    setFavorite(false)
    getQuote()
    return quote
  }

  const [favoritesQuotes, setFavoritesQuotes] = useState([])

  const reduceCounter = () => {
    (counter - 1)>0 ? setCounter(counter - 1) : nextQuote()
  }

  useEffect(() => {
    const timer =
      (counter > 0 && counterActive)&& setInterval(() => reduceCounter(), 1000);
      
      
    return () => {
      clearInterval(timer);
    }
  }, [counter]);

  useEffect(()=>{
    nextQuote()
  },[])


  const handleNext = () => {
    nextQuote()
  }

  const handlePause = () => {
    setCounterActive(!counterActive)
    if (!counterActive) reduceCounter()
  }

  function addToFavorites () {

    let exist = favoritesQuotes.find((element) => element.id === quote.data._id)

    if (!exist){
      setFavoritesQuotes(favoritesQuotes => [...favoritesQuotes, 
        {
          content : quote.data.content,
          author: quote.data.author,
          id : quote.data._id
        }
      ])
    }
  }

  function removeFromFavorites (key){
    //console.log(`Removiendo ${key}`)
    setFavoritesQuotes( (current) =>
      current.filter((quote) => quote.id !== key)
    );

    //console.log (`quote.id = ${quote.data._id} and key=${key}`)
    if (quote.data._id === key) { setFavorite(false)}

  }

  useEffect(() => {
    if (favorite) addToFavorites()
  }, [favorite]);

  useEffect(() =>{
    //console.log(favoritesQuotes)
  }, [favoritesQuotes])

  const handleFavoriteIcon = () => {

    let exist = favoritesQuotes.find((element) => element.id === quote.data._id)
    exist ? setFavorite(true) : setFavorite(!favorite)
    
  }


  return (
    <>
      <Grid container spacing={4} padding={2}>
        <Grid item xs={8}>
          <QuoteContainer>
            <QuoteActions>
              <div>
                <IconButton onClick={handlePause} color="primary"  >
                  {counter}s
                </IconButton>
                <IconButton color="primary" size="large" onClick={handleNext}>
                  <SkipNext />
                </IconButton>
              </div>
              <IconButton size="large" onClick={handleFavoriteIcon} >
                {favorite && <Favorite  style={{ color: 'red' }}/>}
                {!favorite && <FavoriteBorderOutlined />}
              </IconButton>
            </QuoteActions>
            <CurrentQuote  quote={quote} />
            <QuoteListContainer>
              <ListTags quote = {quote}/>
            </QuoteListContainer>
          </QuoteContainer>
        </Grid>
        <Grid item xs={4}>
          <ListFavoriteQuote favoritesQuotes={favoritesQuotes} removeQuote={removeFromFavorites}/>
        </Grid>
      </Grid>
    </>
  )
}

export default Quotes