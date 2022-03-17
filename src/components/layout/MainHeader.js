import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Box,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const AppbarContainer = styled("div")(({ theme }) => ({
  position: "relative",
  "&: .css-1rg09f3 .MuiToolbar-root": {
    padding: theme.spacing(1, 2, 0, 1),
  },
  display: "flex",
  flexDirection: "row",
}));

const MainHeader = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const prevOpen = useRef(open);

  const router = useRouter();

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleDesign = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
    router.push("/web-design-service/Navi Mumbai");
  };
  const handleDevelopment = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
    router.push("/web-development-service/Navi Mumbai");
  };

  const handleSeo = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
    router.push("/seo-service/Navi Mumbai");
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <AppbarContainer>
      <AppBar position='sticky' sx={{ background: "#1c435c", mt: 1 }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Link href='/' passHref={true}>
            <Typography sx={{ cursor: "pointer" }}>HOME</Typography>
          </Link>
          <Link href='/aboutus' passHref={true}>
            <Typography sx={{ cursor: "pointer" }}>ABOUT US</Typography>
          </Link>

          <Typography
            ref={anchorRef}
            id='composition-button'
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup='true'
            // onMouseOut={() => setOpen((prevOpen) => !prevOpen)}
            onMouseEnter={() => setOpen((prevOpen) => !prevOpen)}
            onMouseDownCapture={() => setOpen((prevOpen) => !prevOpen)}
            sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
          >
            SERVICES
          </Typography>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement='bottom-start'
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <Box sx={{ backgroundColor: "red" }}></Box>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id='composition-menu'
                      aria-labelledby='composition-button'
                      onKeyDown={handleListKeyDown}
                      sx={{
                        mt: 2.4,
                        cursor: "pointer",
                        backgroundColor: "#4d874e",
                        p: 0,
                        color:"#FFFFFF"
                      }}
                    >
                      <MenuItem
                        onClick={handleDesign}
                        sx={{ "&:hover": { backgroundColor: "#e3d264" } }}
                      >
                        Website Design
                      </MenuItem>
                      <MenuItem
                        onClick={handleDevelopment}
                        sx={{ "&:hover": { backgroundColor: "#e3d264" } }}
                      >
                        Website Development
                      </MenuItem>
                      <MenuItem
                        onClick={handleSeo}
                        sx={{ "&:hover": { backgroundColor: "#e3d264" } }}
                      >
                        Search Engine Optimisation
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          <Link href={"/portfolio"} passHref={true}>
            <Typography sx={{ cursor: "pointer" }}>PORTFOLIO</Typography>
          </Link>
          <Link href={"/contact"} passHref={true}>
            <Typography sx={{ cursor: "pointer" }}>CONTACT US</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </AppbarContainer>
  );
};

export default MainHeader;
