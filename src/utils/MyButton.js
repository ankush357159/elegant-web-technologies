import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const MyButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#fade07",
  borderColor: "#fade07",
  width: "100%",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#ffa600",
    borderColor: "#ffa600",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#ffa600",
    borderColor: "#ffa600",
  },
  // "&:focus": {
  //   boxShadow: "0 0 0 0.2rem #fade07",
  // },
});

export default MyButton;
