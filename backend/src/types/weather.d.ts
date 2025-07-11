export interface WeatherResponse {
  main: {
    temp: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
}