import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from "../components/SEO";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '24px',
    '& a:visited':{
      color: 'violet',
    },
  }
}));

export default function Index({
  data,
}) {
  const { html } = data.markdownRemark;
  const classes = useStyles();

  return (
    <>
    <SEO title="Home"/>
    <Layout>
      <Card className={classes.root}>
        <CardContent dangerouslySetInnerHTML={{ __html: html }}>
        </CardContent>
      </Card>
    </Layout>
    </>
  );
}

export const pageQuery = graphql`
query HomeQuery {
  markdownRemark(frontmatter: { page: {eq: "index"}}) {
    html
    frontmatter {
      type
      page
    }
  }
}
`;