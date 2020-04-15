import Collapse from '@material-ui/core/Collapse'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Section = ({ title, section }) => {
  const data = useStaticQuery(docsQuery);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const Docs = data.docs.nodes
    .filter(node => {
      return node.frontmatter.section === {section}.section ? true : false
    })
    .map(node => {
      return <ListItem key={node.id} to={node.frontmatter.path} button className={classes.nested} component={Link}>
            <ListItemText primary={node.frontmatter.title} />
            
    </ListItem>
    })
  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {Docs}
        </List>
      </Collapse>
    </>
  );
}

export default Section;

const docsQuery = graphql`
query DocsQuery {
  docs: allMarkdownRemark(filter: {frontmatter: {type: {eq: "doc"}}}, sort: {fields: frontmatter___order}) {
    nodes {
      frontmatter {
        section
        title
        path
      }
      id
    }
  }
}
`