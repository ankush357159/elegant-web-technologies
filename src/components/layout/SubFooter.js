import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SubFooter = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#103d68;",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        justifyContent: "space-around",
        py: { lg: 3 },
        mt: 5,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { sm: 24, md: 22, lg: 30 },
          mt: { xs: 1, md: 2 },
          my: { xs: 1, sm: 1 },
        }}
      >
        Best Web Design and Development, SEO Company in Navi Mumbai
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant='contained'
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#fa9e00",
            height: 40,
            width: 150,
            mt: { md: 2, lg: 1 },
            my: { xs: 2, sm: 2 },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default SubFooter;
