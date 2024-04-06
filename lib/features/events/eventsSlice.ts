import { RootState } from "@/lib/store";
import {
  PayloadAction,
  ThunkAction,
  UnknownAction,
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
    incrementPage: (state) => {
      state.page += 1;
    },
    decrementPage: (state) => {
      --state.page;
    },
    resetEvents: (state) => {
      return initialState;
    },
  },
});

export const {
  eventsAdded,
  totalEventsChanged,
  incrementPage,
  resetEvents,
  decrementPage,
} = eventsSlice.actions;

export default eventsSlice.reducer;

export const selectAllEvents = (state: RootState) => state.events.events;
export const getTotalPages = (state: RootState) => state.events.totalEvents;
export const getCurrentPage = (state: RootState) => state.events.page;

const apiURL = "https://gg-backend-assignment.azurewebsites.net/api/Events?";
export const getNextPage =
  (): ThunkAction<void, RootState, unknown, UnknownAction> =>
  async (dispatch, getState) => {
    const page = getState().events.page + 1;
    dispatch(incrementPage());
    const response = await fetch(
      apiURL +
        new URLSearchParams({
          code: process.env.NEXT_PUBLIC_API_KEY!,
          page: page.toFixed(0),
          type: "upcoming",
        })
    );

    if (!response.ok) {
      dispatch(decrementPage());
      return;
    }

    const data = (await response.json()) as ApiResponse;
    dispatch(totalEventsChanged(data.totalEvents));
    dispatch(eventsAdded(data.events));
  };
