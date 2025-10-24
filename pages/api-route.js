import useSWR from "swr";
import TestResult from "../components/testresult";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page() {
  const { data, error, isLoading } = useSWR("/api/hello", fetcher);

  if (error) {
    return (
      <TestResult passed={false} title="API Route">
        There was an error fetching data from the API route.
      </TestResult>
    );
  }

  if (isLoading) {
    return "⏳ API route loading...";
  }

  const json = JSON.stringify(data, null, 2);

  return (
    <TestResult passed={true} title="API Route">
      The API response 👉 <b>{json}</b>
    </TestResult>
  );
}
