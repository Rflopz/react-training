export const  Quote={
    _id:'',
    content:'',
    author:'',
    tags:[],
    authorSlug: '',
    length: 0,
    dateAdded: '',
    dateModified: '',
}


export const getFavoriteQuoteLocalStorage=()=>{


    return JSON.parse(localStorage.getItem('favoritesQuote') || '[]');
    
    }