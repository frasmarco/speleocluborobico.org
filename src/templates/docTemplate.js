import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import clsx from 'clsx';
import { Card, CardHeader, CardContent, Divider, Collapse, } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles'
import SEO from "../components/SEO";

const useStyles = makeStyles({
  root: {
    marginTop: '24px',
    '& a:link':{
      //color: 'red',
    },
    '& a:visited':{
      color: 'violet',
    },
  }
});

const tocStyles = makeStyles({
  root: {
    '& ul': {
      listStyle: 'none',
    },
    '& a:link':{
      //color: 'red',
    },
    '& a:visited':{
      color: 'violet',
    }
  }
});

export default function Template({
  data,
}) {
  const { frontmatter, html, tableOfContents } = data.markdownRemark;
  const classes = useStyles();
  const tocClasses = tocStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <SEO title={frontmatter.title}/>
    <Layout>
      <Card className={classes.root}>
        <CardHeader title={frontmatter.title} subheader={frontmatter.date} action={
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show table of contents">
            <ExpandMoreIcon />
          </IconButton>
        } >
        </CardHeader>
        <Collapse in={expanded} timeout="auto" unmountOnExit >
          <Divider />
          <div className={tocClasses.root} dangerouslySetInnerHTML={{ __html: tableOfContents }} />
        </Collapse>
        <Divider />
        <CardContent dangerouslySetInnerHTML={{ __html: html }}>
        </CardContent>
      </Card>
    </Layout>
    </>
  );
}

export const pageQuery = graphql`
query DocByPath($path: String!) {
  markdownRemark(frontmatter: {path: {eq: $path}}) {
    tableOfContents(maxDepth: 3, pathToSlugField: "frontmatter.path", absolute: false)
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
    }
  }
}
`;