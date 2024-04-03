import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchBar from "./SearchBar";
import {
  ChevronRight,
  Favorite,
  LocationOn,
  Menu,
  Person,
} from "@mui/icons-material";
import NavItem from "./NavItem";

export default function Header() {
  return (
    <Box>
      <AppBar
        elevation={0}
        sx={{
          backgroundColor: "white",
          paddingTop: 2,
          position: "relative",
        }}
      >
        <Toolbar
          sx={{
            flexDirection: "column",
          }}
        >
          <UpperContent />
          <Navigation />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function Navigation() {
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent={"space-between"}
      width="100%"
      padding={{ md: 0.5 }}
    >
      <Box flex="1">
        <Button
          sx={{
            textTransform: "capitalize",
            minWidth: "fit-content",
            color: "black",
          }}
        >
          <LocationOn fontSize="inherit" />
          Mumbai, India
          <ChevronRight fontSize="inherit" />
        </Button>
      </Box>
      <Stack
        direction={"row"}
        overflow={"scroll"}
        sx={{ scrollbarWidth: "none" }}
      >
        <NavItem>Live Shows</NavItem>
        <NavItem>Streams</NavItem>
        <NavItem>Movies</NavItem>
        <NavItem>Plays</NavItem>
        <NavItem>Events</NavItem>
        <NavItem>Sports</NavItem>
        <NavItem>Activities</NavItem>
      </Stack>
      <Box flex="1"></Box>
    </Box>
  );
}

function UpperContent() {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      width="100%"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography
        color="#CF2D2D"
        fontWeight={"800"}
        fontSize={18}
        flexGrow={{ xs: 1, md: 0.5 }}
      >
        BookUsNow
      </Typography>
      <Box
        display={"inherit"}
        flexDirection={"inherit"}
        gap={2}
        flex={{ xs: "0 0 0", md: "0.25 0 50%" }}
      >
        <Button
          startIcon={<Menu />}
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: "black",
            ":hover": {
              bgcolor: "gray",
            },
            borderRadius: 2,
            textTransform: "capitalize",
            flexShrink: "0",
            display: { xs: "none", md: "inline-flex" },
          }}
        >
          Categories
        </Button>
        <SearchBar />
      </Box>
      <Box display={"inherit"} flexDirection={"inherit"} gap={{ md: 2 }}>
        <Button
          variant="text"
          disableElevation
          startIcon={<Favorite />}
          sx={{
            textTransform: "capitalize",
            color: "#B0BABF",
            display: { xs: "none", md: "flex" },
          }}
        >
          Favorites
        </Button>
        <IconButton sx={{ display: { md: "none" } }}>
          <Favorite />
        </IconButton>
        <Button
          variant="outlined"
          disableElevation
          sx={{
            textTransform: "capitalize",
            color: "black",
            borderColor: "#B0BABF",
            display: { xs: "none", md: "flex" },
          }}
        >
          Sign In
        </Button>
        <IconButton sx={{ display: { md: "none" } }}>
          <Person />
        </IconButton>
      </Box>
    </Box>
  );
}
