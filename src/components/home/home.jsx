import React from "react";
import About from './about.jsx'
import Header from './header.jsx'
import Services from './services.jsx'
// import Team from './team.jsx'
import Contact from './contact.jsx'

import "./home.css";

const Home = (props) => {
    const { t } = props;
    return <>
        <Header t={t} />
        <About t={t} />
        <Services t={t} />
        {/* <Team t={t} /> */}
        <Contact t={t} />
    </>
}

export default Home;
