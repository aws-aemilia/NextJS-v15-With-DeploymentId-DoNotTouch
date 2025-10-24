import Layout from "../components/layout";

export default function Page() {
  return (
    <Layout>
      <article>
        <h1>Image from public folder using img tag</h1>
        <hr />
        <img src="/images/patrick.1200x1200.png"/>
        <p>
          If you see the image above from Patrick, the test passed.
          Original image dimension: 1200 x 1200. Check the dimension of the displayed image is also 1200 x 1200.
        </p>
      </article>
    </Layout>
  );
}