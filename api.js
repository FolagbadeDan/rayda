import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query';

export const dashboardApi = createApi({
  reducerPath: 'dashboard',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://run.mocky.io/v3/' }),
  endpoints: (builder) => ({
    getDashboardData: builder.query({
      query: () => '7f02819f-8254-410a-b8af-ab98572bd26b',
    }),
  }),
});

export const { useGetDashboardDataQuery } = dashboardApi;
