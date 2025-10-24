import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default function handler(req, res) {
  const deploymentId = publicRuntimeConfig.AWS_AMPLIFY_DEPLOYMENT_ID || 'Not available';
  const buildTimestamp = publicRuntimeConfig.buildTimestamp || 'Not available';

  res.status(200).json({
    deploymentId,
    buildTimestamp,
    serverTime: new Date().toISOString(),
  });
}
