import TestResult from "../components/testresult";

export async function getServerSideProps(context) {
  return {
    props: {
      middlewareHeader: context.req.headers["x-hello-from-middleware1"],
    },
  };
}

export default function Page({ middlewareHeader }) {
  if (!middlewareHeader) {
    return (
      <TestResult passed={false} title="Middleware - Set Header">
        The expected header <b>x-hello-from-middleware1</b> added by the
        middleware was not found.
      </TestResult>
    );
  }

  return (
    <TestResult passed={true} title="Middleware - Set Header">
      The header <b>x-hello-from-middleware1</b> with value{" "}
      <b>{middlewareHeader}</b> was added by a middleware.
    </TestResult>
  );
}
