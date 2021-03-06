import * as React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const menu = [
  { display: 'Read', to: '/page-2' },
  { display: 'Write', to: '/page-2' }
]

const IndexLayout: React.FC = ({ children }) => {
  const data = useStaticQuery<StaticQueryProps>(graphql`
    query IndexLayoutQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <LayoutRoot>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords }
        ]}
      />
      <Header title={data.site.siteMetadata.title} menu={menu} />
      <LayoutMain>{children}</LayoutMain>
    </LayoutRoot>
  )
}

export default IndexLayout
