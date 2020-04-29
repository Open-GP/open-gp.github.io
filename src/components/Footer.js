import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="mailto:contact@opengp.org" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; OpenGP</li><li>Design by: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
