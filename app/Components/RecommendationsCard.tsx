"use client";

import { LocationOnSharp } from "@mui/icons-material";
import { Card, CardContent, Stack, Typography, styled } from "@mui/material";

const StyledCard = styled(Card)({
  minHeight: 360,
  width: 240,
  position: "relative",
  borderRadius: 16,
  boxShadow: "none",
});

const StyledContent = styled(CardContent)(({ theme }) => ({
  bottom: 0,
  width: "100%",
  position: "absolute",
  color: "white",
}));

interface RecommendationCardProps {
  title: string;
  date: string;
  location: string;
  weather: string;
  distance: number;
  image: any;
}

export default function RecommendationCard({
  title,
  date,
  location,
  weather,
  distance,
  image,
}: RecommendationCardProps) {
  return (
    <StyledCard
      sx={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "120% 112%",
        backgroundPosition: "-20px -20px",
      }}
    >
      <StyledContent>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems="end"
        >
          <Typography fontWeight={"600"}>{title}</Typography>
          <Typography fontSize={12}>{date}</Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"end"}
          justifyContent={"space-between"}
        >
          <Typography fontSize={12}>
            <LocationOnSharp fontSize="inherit" />
            {location}
          </Typography>
          <Typography fontSize={12}>
            {weather} | {distance} Km
          </Typography>
        </Stack>
      </StyledContent>
    </StyledCard>
  );
}
