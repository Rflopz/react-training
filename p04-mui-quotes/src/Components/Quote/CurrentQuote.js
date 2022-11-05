import { Typography } from "@mui/material";
import React from "react";
import { QuotePaper } from "./Quotes.styles";

const CurrentQuote = () => {
  return <QuotePaper>
    <Typography variant="h3">
      "Science gives us knowledge, but only philosophy can give us wisdom."
    </Typography>

    <Typography variant="h5" align="right">
      - will-durant
    </Typography>

  </QuotePaper>;
};

export default CurrentQuote;
