import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { cities } from "../Endpoints";

interface GetCitiesDataProps {
  country?: string;
  min_population?: string;
  limit?: string;
}

export const citiesApi = createApi({
  reducerPath: "citiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: cities }),
  endpoints: (builder) => ({
    getCitiesData: builder.query<CitiesDataResponse[], GetCitiesDataProps>({
      query: ({ country, min_population, limit }) => {
        const params = new URLSearchParams({
          ...(country && { country }),
          ...(min_population && { min_population }),
          ...(limit && { limit }),
        });
        return {
          url: `?${params.toString()}`,
          method: "GET",
          headers: { "X-Api-Key": `${process.env.REACT_APP_API_KEY}` },
        };
      },
    }),
  }),
});

export const { useGetCitiesDataQuery } = citiesApi;
