import TestResult from "../components/testresult";

export default function Page() {
  return (
    <TestResult passed={true} title="Middleware - Redirect">
      If you see this page, a middleware redirected you here.
    </TestResult>
  );
}
