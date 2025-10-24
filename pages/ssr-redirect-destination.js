import TestResult from "../components/testresult";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps() {
  return {
    props: {
      deploymentId: publicRuntimeConfig.AWS_AMPLIFY_DEPLOYMENT_ID || "Not available", // Always provide a fallback
    },
  };
}

export default function Page({ deploymentId }) {
  return (
    <TestResult passed={true} title="Server Side Rendering Redirect">
      <div>
        <p>
          If you were redirected here by accessing <b>/ssr-redirect</b>, then SSR
          with redirect is working properly.
        </p>
        <p>
          If you were redirected here by accessing <b>/ssr-not-found</b>, then SSR
          with 404 not found is working properly.
        </p>
        <p>
          <strong>Deployment ID:</strong> <b>{deploymentId}</b>
        </p>
      </div>
    </TestResult>
  );
}