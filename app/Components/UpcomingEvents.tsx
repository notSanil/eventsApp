"use client";

import { East } from "@mui/icons-material";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import UpcomingEventCard from "./UpcomingEventCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

const apiURL = "https://gg-backend-assignment.azurewebsites.net/api/Events?";
async function getData(page: number) {
  const res = await fetch(
    apiURL +
      new URLSearchParams({
        code: process.env.API_KEY!,
        page: page.toFixed(0),
        type: "upcoming",
      })
  );

  if (!res.ok) {
    throw new Error("Error calling api");
  }

  return (await res.json()) as ApiResponse;
}

export default function UpcomingEvents() {
  const [data, setData] = useState({
    events: [],
    page: 0,
    pageSize: 0,
    totalEvents: 0,
    totalPages: 0,
  } as ApiResponse);

  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  async function loadNextBatch() {
    const newData = await getData(page + 1);
    const addedEvents = data.events.concat(newData.events);

    setHasMore(addedEvents.length < newData.totalEvents);
    setData({ ...newData, events: addedEvents });
    setPage(page + 1);
  }

  useEffect(() => {
    loadNextBatch();
  }, []);

  function extractIdFromUrl(url: string): string | null {
    const match = url.match(/\/file\/d\/([^/]+)/);
    return match ? match[1] : null;
  }

  return (
    <Box marginTop={4}>
      <Typography fontWeight={"600"} marginBottom={2}>
        Upcoming events <East />
      </Typography>
      <InfiniteScroll
        dataLength={data.events.length}
        next={loadNextBatch}
        hasMore={hasMore}
        loader={
          <div style={{ margin: "auto", width: "min-content" }}>
            <CircularProgress />
          </div>
        }
        style={{ height: "75vh", scrollbarWidth: "none" }}
      >
        <Grid container spacing={3}>
          {data.events.map((value, index) => {
            const url =
              "https://drive.google.com/thumbnail?size=w1000&id=" +
              extractIdFromUrl(value.imgUrl);
            return (
              <Grid key={index} item xs={12} md={4}>
                <UpcomingEventCard
                  title={value.eventName}
                  location={value.cityName}
                  date={new Date(value.date)}
                  weather={value.weather}
                  distance={parseFloat(value.distanceKm)}
                  imageUrl={url}
                />
              </Grid>
            );
          })}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
}
