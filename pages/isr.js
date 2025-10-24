import TestResult from "../components/testresult";

export async function getStaticProps() {
  // Sleep for 5 seconds to simulate a slow query
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    props: {
      time: new Date().toISOString(),
    },
    revalidate: 10,
  };
}

export default function Page({ time }) {
  const title = "Incremental Static Generation (ISR)";

  if (!time) {
    return (
      <TestResult passed={false} title={title}>
        The prop 'time' was not found. It should have been passed from
        getStaticProps.
      </TestResult>
    );
  }

  return (
    <TestResult passed={true} title={title}>
      This timestamp 👉 <b>{time}</b> should change every 10 seconds when the page is repeatedly refreshed.
    </TestResult>
  );
}
