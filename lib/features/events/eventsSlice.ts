import { RootState } from "@/lib/store";
import {
  PayloadAction,
  ThunkAction,
  UnknownAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

interface EventsState {
  events: EventType[];
  page: number;
  totalEvents: number;
  status: "loading" | "idle" | "success" | "failed";
}

const initialState: EventsState = {
  events: [],
  page: 0,
  totalEvents: 0,
  status: "idle",
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    eventsAdded: (state, action: PayloadAction<EventType[]>) => {
      state.events.push(...action.payload);
    },
    totalEventsChanged: (state, action: PayloadAction<number>) => {
      state.totalEvents = action.payload;
    },
    resetEvents: () => {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getNextPage.pending, (state) => {
        state.status = "loading";
        state.page += 1;
      })
      .addCase(getNextPage.fulfilled, (state, action) => {
        state.status = "success";
        state.events = state.events.concat(action.payload.events);
        state.totalEvents = action.payload.totalEvents;
      })
      .addCase(getNextPage.rejected, (state, action) => {
        state.status = "failed";
        state.page -= 1;
        console.log(action.error.message);
      });
  },
});

export const { eventsAdded, totalEventsChanged, resetEvents } =
  eventsSlice.actions;

export default eventsSlice.reducer;

export const selectAllEvents = (state: RootState) => state.events.events;
export const getTotalPages = (state: RootState) => state.events.totalEvents;
export const getCurrentPage = (state: RootState) => state.events.page;
export const getStatus = (state: RootState) => state.events.status;

const apiURL = "https://gg-backend-assignment.azurewebsites.net/api/Events?";
export const getNextPage = createAsyncThunk<
  ApiResponse,
  void,
  { state: RootState }
>("events/fetchNextPage", async (_payload, { getState, rejectWithValue }) => {
  const page = getState().events.page;
  const response = await fetch(
    apiURL +
      new URLSearchParams({
        code: process.env.NEXT_PUBLIC_API_KEY!,
        page: page.toFixed(0),
        type: "upcoming",
      })
  );

  if (!response.ok) {
    return rejectWithValue("Failed to fetch data");
  }

  return (await response.json()) as ApiResponse;
});
