import Layout from "./layout";

export default function TestResult({ passed, title, children }) {
  const result = passed ? "✅ Test passed" : "❌ Test failed";
  return (
    <Layout>
      <article>
        <h1>{title}</h1>
        <hr />
        <p>
          <b>{result}</b>
          <br /><br />
          {children}
        </p>
      </article>
    </Layout>
  );
}
