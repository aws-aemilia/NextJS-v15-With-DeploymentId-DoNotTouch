import TestResult from "../components/testresult";

export async function getServerSideProps() {
  return {
    notFound: true,
  };
}

export default function Page() {
  return (
    <TestResult passed={false} title="Server Side Rendering 404">
      If you see this page, SSR with redirect is NOT working. You should have
      been redirected to /404
    </TestResult>
  );
}
