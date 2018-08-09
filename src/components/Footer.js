import React from 'react';
import ContentWrapper from "components/shared/ContentWrapper";
import JumpTo from "components/shared/JumpTo";

import 'stylesheets/components/Footer.css';

export default function Footer() {
  return(
    <footer className="footer">
      <ContentWrapper className="footer-wrapper">
          <p>© 2018 Brink. All rights reserved, Brink LLC</p>
          <p>Proudly made by Ryan McHenry</p>
          <div className="social">
            <a target="_blank" href="https://twitter.com/Develonaut" rel="noopener noreferrer"><i className="icon-twitter"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/ryan-mchenry-0416323a/" rel="noopener noreferrer"><i className="icon-linkedin"></i></a>
            <a target="_blank" href="https://github.com/Develonaut" rel="noopener noreferrer"><i className="icon-github"></i></a>
            <JumpTo target="hero">
              <i className="icon-arrow-up"/>
            </JumpTo>
          </div>
      </ContentWrapper>
    </footer>
  );
}