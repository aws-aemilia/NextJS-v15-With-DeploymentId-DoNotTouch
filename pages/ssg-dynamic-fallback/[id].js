import Link from "next/link";
import Layout from "../../components/layout";
import TestResult from "../../components/testresult";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  return {
    // No page passed in paths, but fallback is true, it means
    // that it will generate the page on-demand like SSR, and show a fallback
    // loading message while it is generating it.
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // Sleep to simulate a slow page generation
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    props: {
      id: params.id,
      time: new Date().toISOString(),
    },
  };
}

export default function Post({ id, time }) {
  const router = useRouter();
  const title = "SSG with Dynamic Route and Fallback";

  if (router.isFallback) {
    return (
      <Layout>
        <h1>Fallback page</h1>
        <article>
          <p>The page is being generated in 3, 2, 1...</p>
        </article>
      </Layout>
    );
  }

  if (!id) {
    return (
      <TestResult passed={false} title={title}>
        The prop 'id' was not found. It should have been passed from
        getStaticProps.
      </TestResult>
    );
  }

  return (
    <TestResult passed={true} title={title}>
      The postId received as parameter is <b>{id}</b> and the page was generated
      on <b>{time}</b>
      <hr />
      The following link uses the <i>Link</i> component to navigate to this same
      page but with a randomized id param. You should not see the fallback page
      because doesn't re-render the page until after it generates it.
      <br />
      <br />
      <Link href={"/ssg-dynamic-fallback/" + new Date().getTime()}>
        Click me
      </Link>
    </TestResult>
  );
}
