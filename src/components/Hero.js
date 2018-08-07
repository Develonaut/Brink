import React from 'react';
import Heading from "components/shared/Heading";
import ContentWrapper from "components/shared/ContentWrapper";
import Button from "components/shared/Button";
import JumpTo from "components/shared/JumpTo";

import 'stylesheets/components/Hero.css';

export default function Hero() {
  return(
    <header className="hero" id="hero">
    <ContentWrapper className="hero-wrapper">
      <Heading>Notifications <strong>you</strong> can be <strong>excited</strong> about, with</Heading>
      <section className="call-to-action">
        <div className="logo icon"></div>
        <div className="logo typeface white"></div>
        <div className="action-buttons">
          <JumpTo className="button" target="signup">
            <span>Sign Up</span>
            <i className="icon-pen" />
          </JumpTo>
          <Button className="button activate-install" >
            <span>Desktop</span>
            <i className="icon-device-desktop" />
          </Button>
          <Button className="button activate-install" >
            <span>Mobile</span>
            <i className="icon-device-phone" />
          </Button>
        </div>
        <JumpTo target="info">
          <i className="icon-arrow-down"/>
        </JumpTo>
      </section>
    </ContentWrapper>
    </header>
  );
}