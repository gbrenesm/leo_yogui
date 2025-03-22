import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";

const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Hogar Corporal">
      <main style={ pageStyles }>
        <h1 style={ headingStyles} >Hogar Corporal</h1>
        <h2>Psic. Leonor Brenes</h2>
      </main>
    </Layout>
  )
};

export const Head: HeadFC = () => <title>Hogar Corporal</title>;

export default IndexPage;