import TestResult from "../components/testresult";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toISOString(),
      deploymentId:  publicRuntimeConfig.AWS_AMPLIFY_DEPLOYMENT_ID || null,
      buildTimestamp: publicRuntimeConfig.buildTimestamp || null,
    },
  };
}

export default function Page({ time, deploymentId, buildTimestamp }) {
  const title = "Server Side Rendering (SSR)";

  if (!time) {
    return (
      <TestResult passed={false} title={title}>
        The prop 'time' was not found. It should have been passed from
        getServerSideProps.
      </TestResult>
    );
  }

  return (
    <TestResult passed={true} title={title}>
      <div>
        <p>
          <strong>Current Server Time:</strong> <b>{time}</b>
        </p>
        <p>
          <strong>Deployment ID:</strong> <b>{deploymentId || "Not available"}</b>
        </p>
        <p>
          <strong>Build Timestamp:</strong> <b>{buildTimestamp || "Not available"}</b>
        </p>
        <p>
          This page is rendered on the server on every request, so the <b>Current Server Time</b> will change with every refresh.
        </p>
      </div>
    </TestResult>
  );
}
