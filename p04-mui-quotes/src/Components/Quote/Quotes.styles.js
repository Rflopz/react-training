import { Paper } from "@mui/material";
import { padding, styled } from "@mui/system";

export const QuoteContainer = styled("div")(({ theme }) => ({
  textAlign: "center",
  width: "90%",
  height: "90vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  margin: "auto",
  
}));

export const QuoteListContainer = styled("div")(({ theme }) => ({
  textAlign: "center",
  width: "100%",
  height: "90vh",
  display: "flex",
  marginTop: "20px",
  flexDirection: "column",
  justifyContent: "start",
  alignContent: "start",
}))

export const QuoteActions = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const QuotePaper = styled(Paper)({
  width: "100%",
  padding: "20px",
  backgroundColor: "#f3f3f3"
})