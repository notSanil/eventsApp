import { Box, Stack } from "@mui/material";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";

export default function Home() {
  return (
    <main>
      <Stack>
        <Header />
        <MainContent />
      </Stack>
    </main>
  );
}
