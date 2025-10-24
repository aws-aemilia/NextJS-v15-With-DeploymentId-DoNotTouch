import { useState } from "react";
import Image from "next/image";
import Layout from "../components/layout";

export default function Page() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <Layout>
      <article>
        <h1>Image Optimization</h1>
        <hr />
        <Image
          id="pic"
          src="https://images.unsplash.com/photo-1632730038107-77ecf95635ab"
          width={100}
          height={100}
          quality={50}
          onLoadingComplete={() => setLoading(false)}
          onError={() => setError(true)}
          onLoadStart={() => setLoading(true)}
        />
        {loading && <p>Loading...</p>}
        {!loading && !error && (
          <p>
            ✅ Test passed.<br />
            You should see the image in a 100x100 size.
            The original image dimension are 2268 x 4032.
          </p>
        )}
        {!loading && error && (
          <p>
          ❌ Test failed.<br />
          There was an error loading the image.
          </p>
        )}
      </article>
    </Layout>
  );
}
