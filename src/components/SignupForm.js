import React from 'react';
import Heading from "components/shared/Heading";
import ContentWrapper from "components/shared/ContentWrapper";
import Input from "components/shared/Input";
import Button from 'components/shared/Button';

import "stylesheets/components/SignupForm.css";

export default function SignupForm() {

  const inputs = [{
    id: "full_name",
    name: "full_name",
    type:"text",
    placeholder: "Full Name",
  }, {
    id: "email",
    name: "email",
    type:"text",
    placeholder: "Email",
  }];

  return(
    <section className="signup-form modules">
      <ContentWrapper className="signup-wrapper" >
        <Heading>Sign Up Now, and get <strong>all</strong> the NHL <strong>news</strong> at your <strong>fingertips</strong>.</Heading>
            <div className="sub-heading">
          <div className="logo typeface white"></div>
        </div>
        <form className="form">
          { inputs.map(({ id, name, type, placeholder}) => {
              return (
                <div className="form-group" key={id}>
                  <label className="hidden" htmlFor={name}>{name.split("_").join(" ")}}</label>
                  <Input id={id} name={name} type={type} placeholder={placeholder} />
                </div>
              );
            })
          }
          <div className="form-group">
            <label className="hidden" htmlFor="submit">Sign Up</label>
            <Button className="button" type="submit">
              <span>Sign Up</span>
              <i className="icon-pen" />
            </Button>
          </div>
        </form>
      </ContentWrapper>
    </section>
  );
}