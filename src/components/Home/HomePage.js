import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NextSeo } from "next-seo";
import React from "react";
import MainCarousel from "../layout/MainCarousel";
import OurServices from "./OurServices";

function HomePage() {
  return (
    <>
      <Box>
        <NextSeo
          title='Elegant Web Technology'
          description='Elegant Web Techonology Home page'
        />
        <MainCarousel />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            justifyContent: "space-around",
            textAlign: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 20, sm: 22, md: 30, lg: 35 },
                fontWeight: 600,
                textAlign: "left",
                ml: { xs: 4, sm: 6, md: 8, lg: 10 },
                mt: 2,
              }}
            >
              Elegant Web Techonologies
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                color: "#3030303",
                mx: { xs: 4, sm: 6, md: 8, lg: 10 },
                fontSize: { xs: 14, md: 14, lg: 16 },
                mt: { lg: 1 },
              }}
            >
              Elegant Web Technologies is an IT company that provides Website
              Design, Web Development, Software Development and Digital
              Marketing Services.
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                color: "#3030303",
                mx: { xs: 4, sm: 6, md: 8, lg: 10 },
                fontSize: { xs: 14, md: 14, lg: 16 },
                mt: { lg: 1 },
              }}
            >
              Elegant Web Technologies is a reputed name in the IT sector. With
              over a decade of experience since its inception in 2015, Elegant
              Web Technologies caters to a wide array of clients on a global
              scale, helping them to reach out and make their mark.
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                color: "#3030303",
                mx: { xs: 4, sm: 6, md: 8, lg: 10 },
                fontSize: { xs: 14, md: 14, lg: 16 },
                mt: { lg: 1 },
                mt: { lg: 1 },
              }}
            >
              Our focus is on personalized service, avoiding auto generated
              responses and dedicated support after service. Our team is
              qualified, expert and professionals who are always ready to
              translating a client’s requirements into reality.
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                color: "#3030303",
                mx: { xs: 4, sm: 6, md: 8, lg: 10 },
                fontSize: { xs: 14, md: 14, lg: 16 },
                mt: { lg: 1 },
              }}
            >
              We have inhouse web designers, web developers, Digital Marekting
              (SEO) experts and specialists are ready to work on your project.
            </Typography>
          </Box>
          <Box>
            <CardMedia
              component='img'
              image='/elegant-web-technologies.png'
              sx={{
                mt: { xs: 4, sm: 4, md: 8 },
                height: "200px",
                width: "auto",
                backgroundPosition: "center",
                backgroundSize: "cover",
                mr: { md: 5 },
                ml: { xs: "25%", sm: "25%", md: 2 },
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", mt: 5 }}>
        <CardMedia
          component='img'
          image='/web-design.jpg'
          sx={{
            height: "auto",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "33.33%",
          }}
        />
        <Box
          sx={{
            width: "33.3%",
            backgroundColor: "#ffbb29",
            color: "#FFFFFF",
            px: { xs: 1, sm: 1, lg: 3 },
            pt: { xs: 1, sm: 1, lg: 2 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 13, sm: 14, md: 16, lg: 24 },
              fontWeight: 600,
            }}
          >
            6+ YEARS OF EXPERIENCE
          </Typography>
          <Typography sx={{ fontSize: { xs: 12, sm: 13, md: 14, lg: 18 } }}>
            We started the company in 2015 and the journy still continue. We
            have more than 6 years of industry experience.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 13, sm: 14, md: 16, lg: 24 },
              fontWeight: 600,
              mt: 1,
            }}
          >
            300+ PROJECTS DELIVERED
          </Typography>
          <Typography sx={{ fontSize: { xs: 12, sm: 13, md: 14, lg: 18 } }}>
            We have delivered more than 300 projects till the date including
            website design, web development and digital marketing.
          </Typography>
        </Box>

        <Box
          sx={{
            width: "33.3%",
            backgroundColor: "#4c5fed",
            color: "#FFFFFF",
            px: { xs: 1, sm: 1, lg: 5 },
            pt: { xs: 1, sm: 1, lg: 3 },
          }}
        >
          <Typography
            sx={{ fontSize: { xs: 13, sm: 14, lg: 24 }, fontWeight: 600 }}
          >
            QUALITY SERVICES
          </Typography>
          <Typography sx={{ fontSize: { xs: 12, sm: 13, lg: 18 } }}>
            We have expert and professional team with us so that we can provide
            the quality solutions to our customers.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 13, sm: 14, lg: 24 },
              fontWeight: 600,
              mt: { xs: 1, sm: 1, lg: 1 },
            }}
          >
            AFFORDABLE COST
          </Typography>
          <Typography sx={{ fontSize: { xs: 12, sm: 13, lg: 18 } }}>
            Our rates are affordable and economal solutions are provided
          </Typography>
        </Box>
      </Box>
      <OurServices />
    </>
  );
}

export default HomePage;
