import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import packageJson from "next/package.json";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps() {
  return {
    props: {
      deploymentId:  publicRuntimeConfig.AWS_AMPLIFY_DEPLOYMENT_ID || null,
    },
  };
}

export default function Home({deploymentId}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <header>
        <h1>
          Next.js Feature Test App
        </h1>
        <p>This app contains a handful of pages. Each page implements a specific Next.js feature. Deploy this app. Then select a test below to check if the feature works. Currently serving deployment </p>
        <hr />
      </header>
      <section>
        <b>NextJS deployed version {packageJson.version}</b>
      </section>
      <hr />
      <section>
        <Link href={"/ssg"}>Static Site Generation (SSG)</Link><br />
        <Link href={"/ssg-dynamic/1"}>Static Site Generation — with dynamic routes</Link><br />
        <Link href={"/ssg-dynamic-fallback/1"}>Static Site Generation — with dynamic route fallback</Link><br />
        <Link href={`/isr`}>Incremental Static Regeneration (ISR)</Link><br />
        <Link href={`/ssr`}>Server Side Rendering (SSR)</Link><br />
        <Link href={`/ssr-redirect`}>Server Side Rendering - Redirect</Link><br />
        <Link href={`/ssr-not-found`}>Server Side Rendering - Page not found</Link><br />
        <Link href={`/api-route`}>API Route</Link><br />
        <Link href={`/middleware-rewrite`}>Middleware — Rewrite</Link><br />
        <Link href={`/middleware-redirect`}>Middleware — Redirect</Link><br />
        <Link href={`/middleware-set-header`}>Middleware — Set Header</Link><br />
        <Link href={`/image-optimization-imported`}>Image Optimization — Imported image</Link><br />
        <Link href={`/image-optimization-remote`}>Image Optimization — Remote image</Link><br />
        <Link href={`/image-html-tag`}>Image using html image tag from public folder</Link><br />
        <Link href={`/font-css-font`}>Font — CSS Font</Link><br />
        <Link href={`/font-next-font`}>Font — @next/font</Link><br />
        <Link href={`/page-does-not-exist`}>404 Page not found</Link><br />
        <Link href={`/about-us`}>App Dir</Link><br />
      </section>
    </Layout>
  );
}
