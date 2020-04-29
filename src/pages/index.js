import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

class Homepage extends React.Component {
    render() {
        const siteTitle = "OpenGP";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Our mission is to improve GP experience through open source software</h2>
                            </header>
                            <p>We are at the beginning of our road, just getting started. If you are interested in knowing more, email us at <strong>contact@opengp.org</strong></p>
                        </div>
                      <div className="col-6">
                        <ul className="major-icons">
                          <li><span className="icon style2 major fa-user-md"></span></li>
                          <li><span className="icon style5 major fa-desktop"></span></li>
                        </ul>
                      </div>
                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Demo</a></li>
                            <li><a href="mailto:contact@opengp.org" className="button">Contact Us</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;