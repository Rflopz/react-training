import React, { useEffect, useState } from 'react'
import { getFavoriteQuoteLocalStorage, Quote } from '../utility'
import axios from 'axios'
let startingSeconds = 30;
export const useQuote = () => {

    const [secs, setSeconds] = useState(startingSeconds);
    const [quote, setQuote] = useState(Quote)
    const [isFavorite, setIsFavorite] = useState(true);
    const [isContinueSeconds, setContinueSeconds] = useState(true);
    const [listOfFavoriteQuote, setlistOfFavoriteQuote] = useState(getFavoriteQuoteLocalStorage)
    useEffect(() => {
      getQuote();
      setSeconds(30);
    },[] )
    

  useEffect(() => {
    let sampleInterval= 0;
    if(isContinueSeconds){
      sampleInterval=   setInterval(getSeconds,1000);
    }
    
    return () => {
      clearInterval(sampleInterval);
     
    };
  });

  const getSeconds =()=>{
    if (secs > 0) {
      setSeconds(secs - 1);
    }
    if(secs===0){
      getQuote();
      setSeconds(30);
     
    }

  }

    const getQuote= async()=>{

        const response = await axios.get('https://api.quotable.io/random');
        setQuote(response.data);
        setIsFavorite(false);

    }

    const addFavoriteQuote=(favoriteQuote)=>{
        if(listOfFavoriteQuote?.find(x=>x._id===favoriteQuote._id)){
           
            const newList=  listOfFavoriteQuote.filter((item) => item._id !==favoriteQuote._id);
  
          setlistOfFavoriteQuote(
              newList
          ) 
         
          }else{
              listOfFavoriteQuote.push(favoriteQuote)
              setlistOfFavoriteQuote(
                  listOfFavoriteQuote
                  )
          }

          localStorage.setItem('favoritesQuote',JSON.stringify(listOfFavoriteQuote));
    }

    const handleFavoriteQuote =()=>{
            setIsFavorite(!isFavorite);
            addFavoriteQuote(quote);
    }

    const handleFavoriteQuoteList =(favoriteQuote)=>{
        addFavoriteQuote(favoriteQuote);
}

const handleNextQuote=()=>{
  getQuote();
  setSeconds(30);
}

const handleStopSecond =()=>{
  setContinueSeconds(!isContinueSeconds)
}


  return {
        ...quote,
        quote,
        secs,
        getQuote,
        isFavorite,
        listOfFavoriteQuote,
        handleFavoriteQuote,
        handleFavoriteQuoteList,
        handleNextQuote,
        handleStopSecond,

  }
}
