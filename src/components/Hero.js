import React from 'react';
import Heading from "components/shared/Heading";
import ContentWrapper from "components/shared/ContentWrapper";
import Button from "components/shared/Button";

import 'stylesheets/components/Hero.css';

export default function Hero() {
  return(
    <header class="hero" data-type="hero">
    <ContentWrapper className="hero-wrapper">
      <Heading>Notifications <strong>you</strong> can be <strong>excited</strong> about, with</Heading>
      <section class="call-to-action">
        <div class="logo icon"></div>
        <div class="logo typeface white"></div>
        <div class="action-buttons">
          <Button className="button" >
            <span>Sign Up</span>
            <i className="icon-pen" />
          </Button>
          <Button className="button activate-install" >
            <span>Desktop</span>
            <i className="icon-device-desktop" />
          </Button>
          <Button className="button activate-install" >
            <span>Mobile</span>
            <i className="icon-device-phone" />
          </Button>
        </div>
        <Button className="jump-to" >
          <i className="icon-device-phone" />
        </Button>
      </section>
    </ContentWrapper>
    </header>
  );
}