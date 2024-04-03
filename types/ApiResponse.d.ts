type EventType = {
  eventName: string;
  cityName: string;
  date: string;
  weather: string;
  distanceKm: string;
  imgUrl: string;
};

type ApiResponse = {
  events: EventType[];
  page: number;
  pageSize: number;
  totalEvents: number;
  totalPages: number;
};
