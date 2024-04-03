"use client";
import { LocationOnSharp } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  styled,
} from "@mui/material";

interface UpcomingEventCardProps {
  title: string;
  location: string;
  date: Date;
  weather: string;
  distance: number;
  imageUrl: string;
}

export default function UpcomingEventCard({
  title,
  location,
  date,
  weather,
  distance,
  imageUrl,
}: UpcomingEventCardProps) {
  return (
    <Card
      elevation={0}
      sx={{ maxWidth: 300, borderColor: "#B0BABF", borderRadius: 2 }}
      variant="outlined"
    >
      <CardMedia
        image={imageUrl}
        sx={{
          height: 200,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          paddingX: 2,
          paddingY: 1,
        }}
      >
        <Typography
          color="white"
          component={"div"}
          sx={{ backgroundColor: "#00000080" }}
          paddingX={2}
        >
          {date.toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </Typography>
      </CardMedia>
      <CardContent>
        <Typography
          fontWeight={"600"}
          textOverflow={"ellipsis"}
          overflow={"hidden"}
          whiteSpace={"nowrap"}
        >
          {title}
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography fontSize={12}>
            <LocationOnSharp fontSize="inherit" /> {location}
          </Typography>
          <Typography fontSize={12}>
            {weather} | {distance.toFixed(0)} Km
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
