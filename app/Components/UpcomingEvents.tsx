"use client";

import { East } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import StoreProvider from "../StoreProvider";
import InfiniteUpcomingEvents from "./InfiniteUpcomingEvents";

export default function UpcomingEvents() {
  return (
    <StoreProvider>
      <Box marginTop={4}>
        <Typography fontWeight={"600"} marginBottom={2}>
          Upcoming events <East />
        </Typography>
        <InfiniteUpcomingEvents />
      </Box>
    </StoreProvider>
  );
}
