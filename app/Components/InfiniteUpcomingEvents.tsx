"use client";

import { CircularProgress, Grid } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import UpcomingEventCard from "./UpcomingEventCard";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  getCurrentPage,
  getNextPage,
  getTotalPages,
  resetEvents,
  selectAllEvents,
} from "@/lib/features/events/eventsSlice";
import { useEffect } from "react";

export default function InfiniteUpcomingEvents() {
  const events = useAppSelector(selectAllEvents);
  const totalEvents = useAppSelector(getTotalPages);
  const page = useAppSelector(getCurrentPage);
  const hasMore = events.length < totalEvents;

  const dispatch = useAppDispatch();
  async function loadNextBatch() {
    dispatch(getNextPage());
  }

  useEffect(() => {
    loadNextBatch();
  }, [dispatch]);

  function extractIdFromUrl(url: string): string | null {
    const match = url.match(/\/file\/d\/([^/]+)/);
    return match ? match[1] : null;
  }
  return (
    <InfiniteScroll
      dataLength={events.length}
      next={loadNextBatch}
      hasMore={hasMore}
      loader={
        <div style={{ margin: "auto", width: "min-content" }}>
          <CircularProgress />
        </div>
      }
      style={{ scrollbarWidth: "none" }}
      height={"75vh"}
    >
      <Grid container spacing={3}>
        {events.map((value, index) => {
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
  );
}
