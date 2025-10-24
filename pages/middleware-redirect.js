import TestResult from "../components/testresult";

export default function Page() {
  return (
    <TestResult passed={false} title="Middleware - Redirect">
      If you see this page, Middleware with redirect is NOT working. You should
      be redirected to /middleware-redirect-destination.
    </TestResult>
  );
}
