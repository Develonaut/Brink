import React from 'react';
import Heading from "components/shared/Heading";
import ContentWrapper from "components/shared/ContentWrapper";
import InfoArticle from "components/shared/InfoArticle";

import "stylesheets/components/Info.css";

export default function Info() {
  const articles = [{
    iconclassName: "icon-heart-outline",
    header: "Following your favorite NHL teams",
    text: "There’s no limit, follow as many as you like! We’ll even be sure to update you on important league news!",
  }, {
    iconclassName: "icon-flash-outline",
    header: "News and Notifications directly to your device!",
    text: "Whether you’re on a laptop or out and about on a mobile device we can get your notifications to you!",
  }, {
    iconclassName: "icon-arrow-repeat",
    header: "Will keep you in the loop with updates everyday",
    text: "Neither sleet, snow nor rain will keep you out of the loop! We will be sure to keep you updated every single day.",
  }]

  return(
    <section className="info" data-type="info">
      <ContentWrapper className="info-wrapper" >
        <Heading><span>How does</span><span className="logo typeface purple"></span> <span>work?</span></Heading>
        <h2 className="sub-heading">All you need is to sign up! We’ll take care of the rest.</h2>
        <section className="info-articles">
          {
            articles.map((article, idx) => {
              return (
                <React.Fragment key={`${idx}-${article.header}`}>
                  { (idx === 1) && <span className="divider"/> }
                  <InfoArticle {...article} />
                  { (idx === 1) && <span className="divider"/> }
                </React.Fragment>
              );
            })
          }
        </section>
      </ContentWrapper>
    </section>
  );
}