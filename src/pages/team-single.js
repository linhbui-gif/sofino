import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner/banner"
import TeamDetail from "../components/team-detail/detail"
import TeamSkill from "../components/team-skill/skill"
import Team from "../components/team-expert/team"

const TeamSigle = () => (
  <Layout>
    <Banner firstkey="T" lastkey="eam Single" nameCate="Team single"/>
    <TeamDetail/>
    <TeamSkill/>
    <Team/>
  </Layout>
)

export default TeamSigle
