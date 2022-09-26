import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default function Main() {
  return (
    <div>
      <h1>Hello GatsBy</h1>
      <Link to="/about">Go To about page</Link>
    </div>
  )
}