import { East } from "@mui/icons-material";
import { Box } from "@mui/material";
import RecommendationCard from "./RecommendationsCard";
import CircularCarousel from "./CircularCarousel";

const apiURL = "https://gg-backend-assignment.azurewebsites.net/api/Events?";

async function getData() {
  const res = await fetch(
    apiURL +
      new URLSearchParams({
        code: process.env.NEXT_PUBLIC_API_KEY!,
        type: "reco",
      })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()) as ApiResponse;
}

function extractIdFromUrl(url: string): string | null {
  const match = url.match(/\/file\/d\/([^/]+)/);
  return match ? match[1] : null;
}

export default async function Recommendations() {
  const data = await getData();

  return (
    <Box color="white" marginTop={{ xs: 16, md: 32 }}>
      <Box sx={{ marginBottom: 2 }}>
        Recommended Shows
        <East sx={{ marginLeft: 1 }} />
      </Box>

      <CircularCarousel>
        {data.events.map((event, index) => {
          const url =
            "https://drive.google.com/thumbnail?size=w1000&id=" +
            extractIdFromUrl(event.imgUrl);

          return (
            <RecommendationCard
              key={index}
              title={event.eventName}
              date={new Date(event.date).toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
              location={event.cityName}
              weather={event.weather}
              distance={Math.round(Number.parseFloat(event.distanceKm))}
              image={url}
            />
          );
        })}
      </CircularCarousel>
    </Box>
  );
}
