import TestResult from "../components/testresult";

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/ssr-redirect-destination",
      permanent: false,
    },
  };
}

export default function Page() {
  return (
    <TestResult passed={false} title="Server Side Rendering Redirect">
      If you see this page, SSR with redirect is NOT working. You should be
      redirected to /ssr-redirect-destination.
    </TestResult>
  );
}
