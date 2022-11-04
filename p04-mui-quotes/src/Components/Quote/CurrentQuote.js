import { Typography } from "@mui/material";
import React from "react";
import { QuotePaper } from "./Quotes.styles";

const CurrentQuote = ({quote}) => {

  return <QuotePaper>
    <Typography variant="h3">
      {
        quote ?
        String(quote?.data?.content).endsWith('.') ? quote?.data?.content : `${quote?.data?.content}.`
        :
        null
      } 
    </Typography>

    <Typography variant="h5" align="right">
      {quote ? `${quote?.data?.author} - (${String(quote?.data?.dateAdded).substring(0,4)})`: ""}
    </Typography>

  </QuotePaper>;
};




export default CurrentQuote;
