import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
          },
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              mt: 1,
              borderRadius: 0,
              ml: { xs: 4, sm: 6, md: 6, lg: 12 },
            }}
          >
            <Link href='/' passHref={true}>
              <CardMedia
                component='img'
                image={"/Logo.png"}
                height='65px'
                sx={{ objectFit: "scale-down", cursor: "pointer" }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ml: 3,
              cursor: "pointer",
            }}
          >
            <Link href='/' passHref={true}>
              <Typography
                sx={{ fontSize: 36, color: "#100259", mb: 0, ml: 0.5 }}
              >
                ELEGANT
              </Typography>
            </Link>
            <Link href='/' passHref={true}>
            <Typography
              sx={{
                fontSize: { md: 14, lg: 16 },
                fontWeight: 600,
                color: "#FFF",
                backgroundColor: "#100259",
                px: { xs: 1.5, sm: 1.5, md: 1.5, lg: 0.5 },
                mt: -1,
                pt: 0,
                cursor:"pointer"
              }}
            >
              WEB TECHNOLOGIES
            </Typography>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              mt: { xs: 3, sm: 2, md: 1, lg: 1 },
            }}
          >
            <MailIcon
              sx={{
                color: "#f5bc42",
                ml: { xs: 5, sm: 4, lg: 2 },
                mt: { xs: 1.5, sm: 2, md: 1, lg: 1.5 },
                display: { xs: "block", sm: "block", md: "block", lg: "block" },
                fontSize: { xs: 25, sm: 30, md: 30, lg: 40 },
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                display: { xs: "block", sm: "block", md: "block", lg: "block" },
                ml: 1,
              }}
            >
              <Typography
                sx={{ pt: 1, fontSize: { xs: 10, sm: 12, md: 12, lg: 14 } }}
              >
                Mail Us
              </Typography>
              <Link href='mailto:ankush357159@gmail.com' passHref={true}>
                <Typography
                  sx={{
                    cursor: "pointer",
                    color: "#075ce6",
                    fontSize: { md: 12, lg: 14 },
                  }}
                >
                  ankush357159@gmail.com
                </Typography>
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              mt: { xs: 3, sm: 2, md: 1, lg: 1 },
            }}
          >
            <PhoneAndroidIcon
              sx={{
                color: "#292da3",
                ml: 2,
                mt: { xs: 1.5, sm: 2, md: 1, lg: 1.5 },
                display: { xs: "block", sm: "block", md: "block", lg: "block" },
                fontSize: 30,
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                display: { xs: "block", sm: "block", md: "block", lg: "block" },
                ml: 0.5,
              }}
            >
              <Typography
                sx={{ pt: 1, fontSize: { xs: 10, sm: 12, md: 12, lg: 14 } }}
              >
                Call Us
              </Typography>
              <Typography
                sx={{
                  cursor: "pointer",
                  fontSize: { md: 12, lg: 14 },
                  fontWeight: 600,
                }}
              >
                +91 9967280727
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              mt: { sm: 3, md: 1, lg: 1 },
              ml: { sm: 5, md: 2, lg: 3 },
              mr: 2,
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }}
          >
            <Button
              variant='filled'
              sx={{
                backgroundColor: "#fa9e00",
                color: "#FFF",
                mt:0.8
              }}
            >
              Request a Quote
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: 3, sm: 3, md: 1, lg: 1 },
            ml: { xs: 5, sm: 4.5, md: 2, lg: 3 },
            mr: 2,
            display: { sm: "block", md: "none", lg: "none" },
            alignItems: "center",
          }}
        >
          <Button
            variant='filled'
            sx={{
              backgroundColor: "#f5bc42",
              color: "#FFF",
            }}
          >
            Request a Quote
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
