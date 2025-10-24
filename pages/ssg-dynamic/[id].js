import TestResult from "../../components/testresult";

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
    ],
    // Any paths not returned by getStaticPaths will result in a 404 page.
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
      time: new Date().toISOString(),
    },
  };
}

export default function Post({ id, time }) {
  const title = "SSG with Dynamic Route";

  if (!id || !time) {
    return (
      <TestResult passed={false} title={title}>
        The prop 'id' or 'time' were not found. It should have been passed from
        getStaticProps.
      </TestResult>
    );
  }

  return (
    <TestResult passed={true} title={title}>
      The postId received as parameter is 👉 <b>{id}</b> and the page was
      generated on <b>{time}</b>
    </TestResult>
  );
}
