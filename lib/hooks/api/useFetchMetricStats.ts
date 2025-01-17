import useSWR, { Fetcher } from "swr";
import { publicApiFetcher } from "lib/utils/public-api-fetcher";

type UseFetchMetricStatsParams = {
  repository: string;
  variant: "stars" | "forks" | "contributors"; // TODO: add other MetricCard types
  range: number;
  orderDirection?: "ASC" | "DESC";
};

export type StatsType = {
  bucket: string;
  star_count?: number;
  forks_count?: number;
  contributor_count?: number;
};

export function useFetchMetricStats({ repository, variant, range, orderDirection = "ASC" }: UseFetchMetricStatsParams) {
  const query = new URLSearchParams();
  query.set("repo", repository);
  query.set("range", range.toString());
  query.set("orderDirection", orderDirection);

  const endpoint = () => {
    if (typeof window === "undefined") {
      return null;
    }

    switch (variant) {
      case "stars":
        return `histogram/stars?${query}`;
      case "forks":
        return `histogram/forks?${query}`;
      case "contributors":
        return `histogram/contributors?${query}`;
    }
  };

  const { data, error, isLoading, mutate } = useSWR<StatsType[], Error>(
    endpoint,
    publicApiFetcher as Fetcher<StatsType[], Error>
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}
