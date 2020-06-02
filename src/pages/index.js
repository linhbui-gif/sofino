import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner/banner"
import Team from "../components/team-expert/team"
import Feature from "../components/features/feature"
import Blog from "../components/blog/blog"

const IndexPage = () => (
  <Layout>
    <Banner firstkey="O" lastkey="ur Team" nameCate="Team"/>
    <Team/>
    <Feature/>
    <Blog/>
  </Layout>
)

export default IndexPage
