"use client";

import { Search } from "@mui/icons-material";
import { Box, IconButton, InputBase, styled } from "@mui/material";

const SearchIconWrapper = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#B0BABF",
}));

export default function SearchBar() {
  return (
    <Box
      border={{ xs: 0, md: 1 }}
      borderColor={{ md: "#B0BABF" }}
      display={"flex"}
      borderRadius={2}
      padding={0.5}
      width={{ xs: "min-content", md: "100%" }}
    >
      <InputBase
        placeholder="Search..."
        sx={{ width: "100%", display: { xs: "none", md: "flex" } }}
      ></InputBase>
      <SearchIconWrapper>
        <Search />
      </SearchIconWrapper>
    </Box>
  );
}
