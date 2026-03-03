import { Suspense } from 'react';
import Link from 'next/link';

async function SlowComponent({ delay, name }) {
  await new Promise(resolve => setTimeout(resolve, delay));
  return <div>{name} loaded after {delay}ms</div>;
}

export default function StreamingPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Streaming with Suspense</h1>
      <hr />
      <p><b>✅ Test passed</b></p>
      <Suspense fallback={<div>Loading fast component...</div>}>
        <SlowComponent delay={1000} name="Fast" />
      </Suspense>
      <Suspense fallback={<div>Loading medium component...</div>}>
        <SlowComponent delay={2000} name="Medium" />
      </Suspense>
      <Suspense fallback={<div>Loading slow component...</div>}>
        <SlowComponent delay={3000} name="Slow" />
      </Suspense>
      <p><Link href="/">← Back to home</Link></p>
    </div>
  );
}
