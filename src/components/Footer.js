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
            <a target="_blank" href=""><i className="icon-twitter"></i></a>
            <a target="_blank" href=""><i className="icon-facebook"></i></a>
            <a target="_blank" href=""><i className="icon-discord"></i></a>
            <JumpTo target="hero">
              <i className="icon-arrow-up"/>
            </JumpTo>
          </div>
      </ContentWrapper>
    </footer>
  );
}