import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import { makeStyles } from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home';
import Tooltip from '@material-ui/core/Tooltip'
import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import SectionItem from "./SectionItem"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    maxWidth: 360
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const SideBar = () => {
  const data = useStaticQuery(sectionsQuery);
  const classes = useStyles();

  const Sections = data.sections.nodes
    .map(node => {
      return <SectionItem key={node.id} title={node.frontmatter.title} section={node.frontmatter.section}/>
    })

  return (
    <div>
      <Tooltip title="Home" arrow>
        <IconButton aria-label="Home" to="/" component={Link}>
          <HomeIcon/>
        </IconButton>
      </Tooltip>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Documentation
          </ListSubheader>
        }
        className={classes.root}
      >
        {Sections}
      </List>
    </div>
  );
}

export default SideBar;

export const sectionsQuery = graphql`
query NavQuery {
  sections: allMarkdownRemark(filter: {frontmatter: {type: {eq: "section"}}}, sort: {fields: frontmatter___order}) {
    nodes {
      frontmatter {
        section
        title
      }
      id
    }
  }
}
`