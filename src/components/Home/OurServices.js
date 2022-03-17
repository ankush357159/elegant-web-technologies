import { Box, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const OurServices = () => {
  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { sm: 22, md: 22, lg: 30 },
          mt: 5,
        }}
      >
        OUR SERVICES
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          }}
        >
          <Link href='/web-design-service/Navi Mumbai' passHref={true}>
            <Box
              sx={{
                width: { xs: "90%", sm: "90%", md: "33.33%", lg: "33.33%" },
                boxShadow: "5px 5px 5px 0px rgba(0,0.3,0,0.3)",
                m: { xs: "5%", sm: "5%", md: 3, lg: 5 },
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#4c5fed",
                  fontSize: { xs: 20, sm: 22, md: 22, lg: 30 },
                  textAlign: "center",
                }}
              >
                Website Deign
              </Typography>
              <CardMedia
                component='img'
                image='/website-design-1.jpg'
                sx={{
                  height: "auto",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "100%",
                }}
              />
            </Box>
          </Link>

          <Link href='/web-development-service/Navi Mumbai' passHref={true}>
            <Box
              sx={{
                width: { xs: "90%", sm: "90%", md: "33.33%", lg: "33.33%" },
                boxShadow: "5px 5px 5px 0px rgba(0,0.3,0,0.3)",
                m: { xs: "5%", sm: "5%", md: 3, lg: 5 },
                cursor:"pointer"
              }}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#4c5fed",
                  fontSize: { xs: 20, sm: 22, md: 22, lg: 30 },
                  textAlign: "center",
                }}
              >
                Website Development
              </Typography>
              <CardMedia
                component='img'
                image='/website-development-1.jpg'
                sx={{
                  height: "auto",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "100%",
                }}
              />
            </Box>
          </Link>

          <Link href='/seo-service/Navi Mumbai' passHref={true}>
            <Box
              sx={{
                width: { xs: "90%", sm: "90%", md: "33.33%", lg: "33.33%" },
                boxShadow: "5px 5px 5px 0px rgba(0,0.3,0,0.3)",
                m: { xs: "5%", sm: "5%", md: 3, lg: 5 },
                cursor:"pointer"
              }}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#4c5fed",
                  fontSize: { xs: 20, sm: 22, md: 22, lg: 30 },
                  textAlign: "center",
                }}
              >
                Local SEO
              </Typography>
              <CardMedia
                component='img'
                image='/seo-service.jpg'
                sx={{
                  height: "auto",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "100%",
                }}
              />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default OurServices;
