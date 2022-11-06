import { Typography, Chip } from "@mui/material";
import React from "react";
import { QuotePaper } from "./Quotes.styles";

const CurrentQuote = ({content, author, year, tags}) => {
  return <QuotePaper>
    <Typography variant="h3">
      {content}
    </Typography>
    {
      tags.map((tag) => (
        <Chip key={tag} label={tag} />)
      )
    }
    <Typography variant="h5" align="right">
      - {author} - {year}
    </Typography>

  </QuotePaper>;
};

export default CurrentQuote;
