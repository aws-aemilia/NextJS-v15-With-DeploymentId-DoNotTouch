import TestResult from "../components/testresult";

export async function getServerSideProps(context) {
  return {
    props: {
      isRewritten: context.query.rewritten === "true" ? true : false,
    },
  };
}

export default function Page({ isRewritten }) {
  if (!isRewritten) {
    return (
      <TestResult passed={false} title="Middleware - Rewrite">
        The expected param <b>context.query.rewritten</b> added by the middleware was not found.
      </TestResult>
    );
  }

  return (
    <TestResult passed={true} title="Middleware - Rewrite">
      Middleware added the <b>context.query.rewritten</b> successfully.
    </TestResult>
  );
}
