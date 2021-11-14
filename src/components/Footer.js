import React from "react";
import githubLogo from "../assets/github-logo.svg";
import gmailLogo from "../assets/gmail-logo.svg";
import linkedinLogo from "../assets/linkedin-logo.svg";
// import turingLogo from "../assets/turing-logo.png";

export const Footer = () => {
  return (
    <footer class="page-footer" id="contact">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Get in Contact</h5>
            <p class="grey-text text-lighten-4">
              I would love to help bring your next website to life!
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <a
              class="waves-effect waves-light btn-large social github"
              href="https://github.com/ERaith"
              target="_blank"
            >
              <img src={githubLogo} className="logo" alt="github logo" /> Find
              me on github
            </a>
            <a class="waves-effect waves-light btn-large social google">
              <img src={gmailLogo} className="logo" alt="gmail logo" /> Get in
              touch!
            </a>
            <a
              class="waves-effect waves-light btn-large social linkedin"
              href="https://www.linkedin.com/in/erik-raith-8b441969/"
              target="_blank"
            >
              <img src={linkedinLogo} className="logo" alt="linkedin logo" />
              Connect to me on linkedin
            </a>
            {/* <a class="waves-effect waves-light btn-large social linkedin">
              <img src={turingLogo} className="logo" alt="turing logo" /> See my
              Portfolio on Turing Alumms
            </a> */}
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">© 2020 Erik Raith</div>
      </div>
    </footer>
  );
};

export default Footer;
