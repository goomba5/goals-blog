import React from "react"

import Layout from "../components/layout"
import projectStyles from "../components/projects.module.css"

const Projects = () => {
    return (
        <Layout>
            <div className={projectStyles.projectsPage}>
                <h1 className={projectStyles.projects__projectsTitle}>Projects</h1>
            </div>
        </Layout>
    )
}

export default Projects;