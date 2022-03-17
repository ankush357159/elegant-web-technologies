import React from "react";
import { Box, Button, CardMedia, TextField, Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import { styled } from "@mui/system";

const FlexComponent = styled("div")({
  color: "darkslategray",
  mx: { lg: 5 },
  my: { lg: 5 },
  borderRadius: 1,
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "column",
    md: "row",
    lg: "row",
  },
  width: "100%",
});

const Contact = () => {
  return (
    <Box>
      <NextSeo
        title='Contact Elegant Web Technologies'
        description='Elegant Web Technologies is a website Design company in Navi Mumbai'
      />
      <Box sx={{ mx: 5 }}>
        <CardMedia
          component='img'
          image='/contact-elegant-web-technology.jpg'
          sx={{
            height: "175px",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <Typography
          sx={{
            textAlign: "center",
            color: "#FFFFFF",
            mt: -15,
            fontFamily: ["Oleo Script", "sans-serif"].join(","),
            fontSize: { sm: 30, lg: 40 },
          }}
        >
          Contact Us
        </Typography>
      </Box>
      <Box sx={{ mt: 15, mx: 10 }}>
        <Typography sx={{ fontSize: { lg: 30 } }}>CONTACT US</Typography>
        <Box
          component='form'
          sx={{
            fontSize: { lg: 20 },
          }}
          noValidate
          autoComplete='off'
        >
          <FlexComponent>
            <Box sx={{ width: "100%", mt: 5 }}>
              <TextField
                id='outlined-basic'
                defaultValue='Enter Your Name'
                sx={{ width: "50%" }}
              />
              <TextField
                id='outlined-basic'
                defaultValue='Enter Your Email Address'
                sx={{ width: "50%" }}
              />
            </Box>
          </FlexComponent>
          <FlexComponent>
            <Box sx={{ width: "100%", mt: 5 }}>
              <TextField
                id='outlined-basic'
                defaultValue='Enter Contact Number'
                sx={{ width: "50%" }}
              />
              <TextField
                id='outlined-basic'
                defaultValue='Enter Your Company Name'
                sx={{ width: "50%" }}
              />
            </Box>
          </FlexComponent>
          <TextField
            id='outlined-multiline-static'
            label='Provide your requirement...'
            multiline
            rows={4}
            sx={{ width: "100%", mt: 5 }}
          />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant='filled'
            sx={{
              backgroundColor: "#fa9e00",
              color: "#FFF",
              mt: 0.8,
              width: "20%",
              mt: 5,
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
