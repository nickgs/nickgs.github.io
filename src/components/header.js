import React from 'react'
import { Helmet } from "react-helmet"

const Header = ({ siteTitle }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Nick Selvaggio - Long Island Technology Professional. Drupal and web development.</title>
    <meta name="description" content="Long Island web applications developer" />
  </Helmet>
)


export default Header
