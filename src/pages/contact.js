import React from "react"

import Layout from "../components/layout"
import contactStyles from "../components/contact.module.css"

const Contact = () => {
    return (
        <Layout>
            <div className={contactStyles.contact_page}>
                <h1 className={contactStyles.contact__title}>Contact</h1>
            </div>
        </Layout>
    )
}

export default Contact;