import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default function Main() {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const meta = data?.site?.siteMetadata ?? [];

  return (
    <>
    <header>
        <h1>{meta.description}</h1>
        <Link to="/">{meta.title}</Link>
    </header>
    <div>
      <h1>Hello GatsBy</h1>
      <Link to="/about">Go To about page</Link>
    </div>
    </>
  )
}