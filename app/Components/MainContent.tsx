import { Box, Typography } from "@mui/material";
import Banner from "../../public/Banner.svg";
import Recommendations from "./Recommendations";
import UpcomingEvents from "./UpcomingEvents";
import { Suspense } from "react";

export default function MainContent() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Banner.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: {
          xs: "50%",
        },
      }}
    >
      <Box
        marginX={{ xs: 4, md: 16 }}
        marginTop={{ xs: 8, md: 22 }}
        marginBottom={2}
      >
        <Typography
          color="white"
          align="center"
          fontSize={{ xs: 26, md: 55 }}
          fontWeight={"500"}
          marginX={{ md: 4 }}
        >
          Discover Exciting Events Happening Near You - Stay Tuned for Updates!
        </Typography>
        <Typography
          color="white"
          align="center"
          marginX={{ md: 16 }}
          marginTop={2}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          aliquet magna sed est tincidunt, a facilisis lorem semper. Donec
          vestibulum feugiat lectus ultrices tincidunt.
        </Typography>
        <Suspense>
          <Recommendations />
        </Suspense>
        <UpcomingEvents />
      </Box>
    </Box>
  );
}
