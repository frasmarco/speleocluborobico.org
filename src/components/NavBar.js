import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
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
          <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <g >
                <path d="M5.298 8.715v3.965l13.404 2.605V11.32z" fill="#e98300" />
                <path d="M68.382 67.602l-25.275.088v13.657h39.067V41.863l-13.792-2.668zM43.107 0v13.54h25.275v6.77h13.792V0zM13.675 60.927H0v20.42h39.067V67.7H13.675v-6.763zM0 39.476l13.675 2.63V13.54h25.392V0H0z" mask="url(#b)" fill="#fff" transform="scale(.29206 .29503)" />
              </g>
            </svg>
          </SvgIcon>
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