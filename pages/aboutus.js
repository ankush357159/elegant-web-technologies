import { Button, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NextSeo } from "next-seo";
import React from "react";
import CompanyProfile from "../src/components/Profile/CompanyProfile";

const aboutus = () => {
  return (
    <>
      <NextSeo
        title='Website Deign Company in Navi Mumbai'
        description='Elegant Web Technologies is a website design company in Navi Mumbai'
      />
      <Box>
        <Box>
          <CardMedia
            component='img'
            image='/elegant-web-technology.jpg'
            sx={{
              height: "175px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <Typography
            sx={{
              textAlign: "center",
              color: "#ffffff",
              mt: -15,
              fontFamily: ["Oleo Script", "sans-serif"].join(","),
              fontSize: 40,
            }}
          >
            About us
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
            mt: 15,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>
              <Button
                variant='contained'
                sx={{
                  borderRadius: 0,
                  alignItems: "left",
                  mb: 2,
                  ml: 2,
                  mr: 2,
                  height: 50,
                  width: { xs: "100%", sm: 200, md: 300, lg: 300 },
                }}
              >
                Company Profile
              </Button>
            </Box>
            <Box>
              <Button
                variant='contained'
                sx={{
                  borderRadius: 0,
                  ml: 2,
                  mr: 2,
                  mb:2,
                  height: 50,
                  width: { xs: "100%", sm: 200, md: 300, lg: 300 },
                }}
              >
                Why Elegant Web Technologies
              </Button>
            </Box>
          </Box>
          <Box sx={{ ml: 2 }}>
            <CompanyProfile />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default aboutus;

// aboutus.getLayout = function PageLayout(page) {
//   //This function defines components where Header and Footer components are not required.
//   // Or only one of the component i.e. Header or Footer is required.
//   return (
//     <>
//       <InfoHeader />
//       <Header />
//       <MainHeader />
//       {page}
//       {/* <Footer /> */}
//     </>
//   );
// };
